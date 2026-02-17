import React from 'react';
import { Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { RocketLaunch } from '@mui/icons-material';

const twinkle = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.3; }
`;

const orbit = keyframes`
  from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const LoadingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: 'radial-gradient(circle at center, #1A237E 0%, #0B1340 100%)',
  position: 'relative',
  overflow: 'hidden'
});

const StarsBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\' fill=\'%23FFFFFF\'/%3E%3C/svg%3E")',
    animation: `${twinkle} 1.5s infinite ease-in-out`,
    opacity: 0.5
  }
});

const AnimationContainer = styled('div')({
  position: 'relative',
  width: 300,
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 32
});

const OrbitPath = styled('div')({
  position: 'absolute',
  width: 240,
  height: 240,
  borderRadius: '50%',
  border: '2px solid rgba(157, 78, 221, 0.2)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid rgba(157, 78, 221, 0.1)',
    borderRadius: '50%'
  }
});

const Planet = styled('div')({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  boxShadow: '0 0 40px rgba(157, 78, 221, 0.4)',
  animation: `${pulse} 3s infinite ease-in-out`,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: '50%',
    background: 'radial-gradient(circle at center, rgba(157, 78, 221, 0.2) 0%, transparent 70%)'
  }
});

const StyledRocket = styled(RocketLaunch)({
  position: 'absolute',
  fontSize: 40,
  color: '#9D4EDD',
  transform: 'rotate(-45deg)',
  animation: `${orbit} 8s infinite linear`,
  filter: 'drop-shadow(0 0 10px rgba(157, 78, 221, 0.5))'
});

const LoadingText = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  textAlign: 'center',
  animation: `${float} 2s infinite ease-in-out`,
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 20px rgba(157, 78, 221, 0.3)'
});

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  message = 'Preparing for Launch...' 
}) => {
  return (
    <LoadingContainer>
      <StarsBackground />
      <AnimationContainer>
        <OrbitPath />
        <Planet />
        <StyledRocket />
      </AnimationContainer>
      <LoadingText variant="h6">
        {message}
      </LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
