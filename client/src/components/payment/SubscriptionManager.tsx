import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Button,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { RootState } from '../../store';
import { AppDispatch } from '../../store';
import { cancelSubscriptionAsync } from '../../store/slices/subscriptionSlice';

interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const PlansContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const PlanCard = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const ErrorAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 999,
    currency: 'USD',
    interval: 'month',
    features: ['Basic celestial data access', 'Standard resolution images', 'Email support'],
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 2999,
    currency: 'USD',
    interval: 'month',
    features: [
      'Advanced celestial data access',
      'High-resolution images',
      'Real-time data streaming',
      'Priority support',
      'API access',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 9999,
    currency: 'USD',
    interval: 'month',
    features: [
      'Full celestial data access',
      'Ultra-high resolution images',
      'Real-time data streaming',
      '24/7 dedicated support',
      'Advanced API access',
      'Custom integrations',
      'Team collaboration tools',
    ],
  },
];

const SubscriptionManager: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { subscription, error } = useSelector((state: RootState) => state.subscription);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [cancellationError, setCancellationError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentSuccess = () => {
    setSelectedPlan(null);
  };

  const handlePaymentError = (errorMessage: string) => {
    console.error('Payment error:', errorMessage);
  };

  const handleCancelSubscription = async () => {
    try {
      setLoading(true);
      await dispatch(cancelSubscriptionAsync()).unwrap();
      setShowCancelDialog(false);
      setCancellationError(null);
    } catch (error: any) {
      setCancellationError(error.message || 'Failed to cancel subscription');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
  };

  return (
    <Container>
      {error && (
        <ErrorAlert severity="error">
          {error}
        </ErrorAlert>
      )}

      {subscription && (
        <PlanCard sx={{ marginBottom: 3 }}>
          <Typography variant="h6" gutterBottom>
            Current Subscription
          </Typography>
          <Typography variant="subtitle1">
            Plan: {subscription.planName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Next billing date:{' '}
            {new Date(subscription.currentPeriodEnd * 1000).toLocaleDateString()}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setShowCancelDialog(true)}
          >
            Cancel Subscription
          </Button>
        </PlanCard>
      )}

      <Typography variant="h4" gutterBottom>
        Available Plans
      </Typography>

      <PlansContainer>
        {plans.map((plan) => (
          <PlanCard key={plan.id}>
            <Typography variant="h5" gutterBottom>
              {plan.name}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {formatPrice(plan.price, plan.currency)}/{plan.interval}
            </Typography>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <Typography>{feature}</Typography>
                </li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handlePlanSelect(plan)}
              disabled={loading || subscription?.planId === plan.id}
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : subscription?.planId === plan.id ? (
                'Current Plan'
              ) : (
                'Select Plan'
              )}
            </Button>
          </PlanCard>
        ))}
      </PlansContainer>

      <Dialog
        open={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Subscribe to {selectedPlan?.name}
        </DialogTitle>
        <DialogContent>
          {selectedPlan && (
            <Elements stripe={stripePromise}>
              <PaymentForm
                planId={selectedPlan.id}
                amount={selectedPlan.price}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </Elements>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={showCancelDialog}
        onClose={() => setShowCancelDialog(false)}
      >
        <DialogTitle>Cancel Subscription</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to cancel your subscription? You'll continue to have access until the end of your current billing period.
          </Typography>
          {cancellationError && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {cancellationError}
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCancelDialog(false)}>
            Keep Subscription
          </Button>
          <Button
            onClick={handleCancelSubscription}
            color="error"
            variant="contained"
          >
            Cancel Subscription
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SubscriptionManager;
