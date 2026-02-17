import express from 'express';
import Stripe from 'stripe';
import { buffer } from 'micro';
import { prisma } from '../prisma';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

router.post('/stripe', async (req, res) => {
  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).send('No signature found');
  }

  let event: Stripe.Event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionChange(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionCancellation(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleSuccessfulPayment(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleFailedPayment(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Error processing webhook:', err);
    res.status(500).send('Webhook processing failed');
  }
});

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const status = subscription.status;
  const priceId = subscription.items.data[0].price.id;

  const user = await prisma.user.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (!user) {
    throw new Error('User not found');
  }

  await prisma.subscription.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      stripePriceId: priceId,
      stripeSubscriptionId: subscription.id,
      status,
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
    update: {
      stripePriceId: priceId,
      status,
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
  });

  // Update user's access level based on subscription
  await updateUserAccessLevel(user.id, priceId);
}

async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;

  const user = await prisma.user.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (!user) {
    throw new Error('User not found');
  }

  await prisma.subscription.update({
    where: { userId: user.id },
    data: {
      status: subscription.status,
      canceledAt: subscription.canceled_at
        ? new Date(subscription.canceled_at * 1000)
        : null,
    },
  });

  // Downgrade user's access level
  await updateUserAccessLevel(user.id, 'free');
}

async function handleSuccessfulPayment(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string;

  const user = await prisma.user.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (!user) {
    throw new Error('User not found');
  }

  await prisma.payment.create({
    data: {
      userId: user.id,
      stripeInvoiceId: invoice.id,
      amount: invoice.amount_paid,
      currency: invoice.currency,
      status: 'succeeded',
      paidAt: new Date(invoice.status_transitions.paid_at! * 1000),
    },
  });
}

async function handleFailedPayment(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string;

  const user = await prisma.user.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (!user) {
    throw new Error('User not found');
  }

  await prisma.payment.create({
    data: {
      userId: user.id,
      stripeInvoiceId: invoice.id,
      amount: invoice.amount_due,
      currency: invoice.currency,
      status: 'failed',
      failureReason: invoice.last_payment_error?.message,
    },
  });

  // Optionally notify user about failed payment
  // await notifyUserAboutFailedPayment(user.email, invoice);
}

async function updateUserAccessLevel(userId: string, priceId: string) {
  let accessLevel = 'free';

  // Map price IDs to access levels
  switch (priceId) {
    case process.env.STRIPE_BASIC_PRICE_ID:
      accessLevel = 'basic';
      break;
    case process.env.STRIPE_PRO_PRICE_ID:
      accessLevel = 'pro';
      break;
    case process.env.STRIPE_ENTERPRISE_PRICE_ID:
      accessLevel = 'enterprise';
      break;
  }

  await prisma.user.update({
    where: { id: userId },
    data: { accessLevel },
  });
}

export default router;
