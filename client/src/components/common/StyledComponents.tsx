import { styled } from '@mui/material/styles';
import { Card, Button, Chip, IconButton, Box } from '@mui/material';

export const StyledCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(13, 17, 63, 0.95) 0%, rgba(20, 24, 80, 0.95) 100%)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: '24px',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  color: '#FFFFFF',
  '& .MuiTypography-root': {
    color: '#FFFFFF',
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  '& .MuiTypography-body2': {
    color: 'rgba(255, 255, 255, 0.85)',
  },
  '& .MuiListItemText-secondary': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #7C4DFF, #0288D1)',
    opacity: 0.7,
  },
});

export const GradientButton = styled(Button)(() => ({
  background: 'linear-gradient(90deg, rgba(74, 144, 226, 0.8) 0%, rgba(124, 77, 255, 0.8) 100%)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  padding: '10px 24px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(90deg, rgba(74, 144, 226, 0.9) 0%, rgba(124, 77, 255, 0.9) 100%)',
  },
}));

export const GradientChip = styled(Chip)(() => ({
  background: 'linear-gradient(90deg, rgba(74, 144, 226, 0.15) 0%, rgba(124, 77, 255, 0.15) 100%)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '& .MuiChip-label': {
    fontWeight: 500,
  },
  '&:hover': {
    background: 'linear-gradient(90deg, rgba(74, 144, 226, 0.2) 0%, rgba(124, 77, 255, 0.2) 100%)',
  },
}));

export const IconContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '56px',
  height: '56px',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(124, 77, 255, 0.15) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: '16px',
  transition: 'all 0.3s ease',
  '& .MuiSvgIcon-root': {
    fontSize: '28px',
    color: '#fff',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(124, 77, 255, 0.2) 100%)',
    border: '1px solid rgba(74, 144, 226, 0.2)',
  },
}));

export const GradientIconButton = styled(IconButton)(() => ({
  background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(124, 77, 255, 0.15) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#fff',
  padding: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(124, 77, 255, 0.2) 100%)',
    border: '1px solid rgba(74, 144, 226, 0.2)',
  },
}));
