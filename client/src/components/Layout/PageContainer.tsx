import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface PageContainerProps {
  children: ReactNode;
}

export const PageBackground = styled(Box)({
  minHeight: '100vh',
  width: '100%',
  background: 'linear-gradient(135deg, #0A1929 0%, #1A237E 100%)',
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
    background: 'radial-gradient(circle at 50% 50%, rgba(124, 77, 255, 0.15) 0%, rgba(124, 77, 255, 0) 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/assets/stars-pattern.png")',
    opacity: 0.5,
    pointerEvents: 'none',
    animation: 'twinkle 8s infinite linear',
  },
  '@keyframes twinkle': {
    '0%': {
      opacity: 0.3,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 0.3,
    },
  },
});

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <PageBackground>
      {children}
    </PageBackground>
  );
};

export default PageContainer;
