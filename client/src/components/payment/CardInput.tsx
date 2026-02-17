import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { styled } from '@mui/material/styles';

const CardContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

const CardInput: React.FC = () => {
  return (
    <CardContainer>
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    </CardContainer>
  );
};

export default CardInput;
