import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledSection = styled('section')(({ theme }) => ({
  animation: `${fadeIn} 1s ease-out`,
  '& .MuiTypography-h2': {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: theme.spacing(4),
  },
  '& .MuiTypography-h4': {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
}));
