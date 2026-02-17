import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

const stars = keyframes`
  from { background-position: 0 0; }
  to { background-position: 1000px 1000px; }
`;

export const PageBackground = styled(Box)({
  position: 'relative',
  minHeight: '100vh',
  background: `
    linear-gradient(to bottom, rgba(10, 10, 30, 0.8), rgba(20, 20, 50, 0.8)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle cx="50" cy="50" r="1" fill="white" />
    </svg>') repeat
  `,
  backgroundSize: '200px 200px',
  animation: `${stars} 100s linear infinite`
});

export const PageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  padding: theme.spacing(3),
  zIndex: 1
}));
