import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import {
  Button,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { updateSubscription } from '../../store/slices/subscriptionSlice';
import CardInput from './CardInput';

interface PaymentFormProps {
  planId: string;
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface BillingDetails {
  name: string;
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
}

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(2)
}));

const GridContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2)
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const ErrorAlert = styled(Alert)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

const PaymentForm: React.FC<PaymentFormProps> = ({
  planId,
  amount,
  onSuccess,
  onError,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    name: '',
    email: '',
    address: {
      line1: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
    },
  });

  const handleBillingDetailsChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (parent === 'address') {
        setBillingDetails((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            [child]: value,
          },
        }));
      }
    } else {
      setBillingDetails((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: billingDetails.name,
          email: billingDetails.email,
          address: billingDetails.address,
        },
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      if (!paymentMethod) {
        throw new Error('Payment method creation failed');
      }

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          planId,
          billingDetails,
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      const subscription = await response.json();
      dispatch(updateSubscription(subscription));
      onSuccess?.();
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Billing Details
        </Typography>

        <TextField
          fullWidth
          label="Name"
          value={billingDetails.name}
          onChange={(e) => handleBillingDetailsChange('name', e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          value={billingDetails.email}
          onChange={(e) => handleBillingDetailsChange('email', e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Address"
          value={billingDetails.address.line1}
          onChange={(e) => handleBillingDetailsChange('address.line1', e.target.value)}
          margin="normal"
          required
        />

        <GridContainer>
          <TextField
            label="City"
            value={billingDetails.address.city}
            onChange={(e) => handleBillingDetailsChange('address.city', e.target.value)}
            required
          />

          <TextField
            label="State"
            value={billingDetails.address.state}
            onChange={(e) => handleBillingDetailsChange('address.state', e.target.value)}
            required
          />

          <TextField
            label="Postal Code"
            value={billingDetails.address.postal_code}
            onChange={(e) => handleBillingDetailsChange('address.postal_code', e.target.value)}
            required
          />

          <TextField
            label="Country"
            value={billingDetails.address.country}
            onChange={(e) => handleBillingDetailsChange('address.country', e.target.value)}
            required
          />
        </GridContainer>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Card Details
        </Typography>

        <CardInput />

        {error && (
          <ErrorAlert severity="error">
            {error}
          </ErrorAlert>
        )}

        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!stripe || processing}
        >
          {processing ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            `Pay ${amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
          )}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default PaymentForm;
