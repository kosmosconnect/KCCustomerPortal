import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const PageBackground = styled(Box)({
  minHeight: '100vh',
  width: '100%',
  background: 'linear-gradient(135deg, #0B1128 0%, #1A237E 100%)',
  backgroundAttachment: 'fixed',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.15) 0%, rgba(0, 180, 216, 0.1) 50%, rgba(10, 17, 40, 0.05) 100%)',
    animation: 'pulse 8s ease-in-out infinite',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0))
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    opacity: 0.4,
    animation: 'twinkle 8s infinite linear',
    pointerEvents: 'none',
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 0.5,
      transform: 'scale(1)',
    },
    '50%': {
      opacity: 0.7,
      transform: 'scale(1.02)',
    },
    '100%': {
      opacity: 0.5,
      transform: 'scale(1)',
    },
  },
  '@keyframes twinkle': {
    '0%': {
      backgroundPosition: '0 0',
      opacity: 0.3,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      backgroundPosition: '200px 200px',
      opacity: 0.3,
    },
  },
});

export const PageContainer = styled(Container)({
  position: 'relative',
  zIndex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  '@media (min-width: 960px)': {
    padding: '32px',
  },
});
