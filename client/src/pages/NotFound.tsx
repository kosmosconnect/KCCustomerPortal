import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Home, RocketLaunch } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PageBackground } from '../components/common/PageContainer';

const twinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1
});

const StarsBackground = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle at center, #1A237E 0%, #0B1340 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\' fill=\'%23FFFFFF\'/%3E%3C/svg%3E")',
    animation: `${twinkle} 1s infinite`,
    opacity: 0.5
  }
});

const RocketContainer = styled(Box)({
  position: 'relative',
  marginBottom: 32,
  animation: `${float} 6s infinite ease-in-out`
});

const StyledRocket = styled(RocketLaunch)({
  fontSize: 120,
  color: '#9D4EDD',
  filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.5))'
});

const ErrorCode = styled(Typography)({
  fontSize: '8rem',
  fontWeight: 700,
  marginBottom: 16,
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 30px rgba(157, 78, 221, 0.3)'
});

const ErrorMessage = styled(Typography)({
  fontSize: '1.5rem',
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: 8
});

const ErrorDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: 32,
  maxWidth: 600
});

const HomeButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, rgba(0, 180, 216, 0.8) 100%)',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 20px rgba(157, 78, 221, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    background: 'linear-gradient(135deg, #9D4EDD 20%, rgba(0, 180, 216, 0.9) 100%)',
    boxShadow: '0 6px 24px rgba(157, 78, 221, 0.6)',
    transform: 'translateY(-2px)'
  }
});

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageBackground>
      <StarsBackground />
      <StyledContainer>
        <RocketContainer>
          <StyledRocket />
        </RocketContainer>

        <ErrorCode variant="h1">
          404
        </ErrorCode>

        <ErrorMessage variant="h4">
          Lost in Space
        </ErrorMessage>

        <ErrorDescription variant="body1">
          The page you're looking for seems to have drifted into deep space. 
          Let's get you back to mission control.
        </ErrorDescription>

        <HomeButton
          variant="contained"
          startIcon={<Home />}
          onClick={() => navigate('/')}
        >
          Return Home
        </HomeButton>
      </StyledContainer>
    </PageBackground>
  );
};

export default NotFound;
