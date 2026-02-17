import { styled } from '@mui/material/styles';
import { Card, ListItem, ListItemIcon } from '@mui/material';

export const StyledCard = styled(Card)({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  color: '#fff',
  marginBottom: '16px',
});

export const StyledListItem = styled(ListItem)({
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
});

export const StyledListItemIcon = styled(ListItemIcon)({
  color: '#7C4DFF',
  minWidth: '40px',
});
