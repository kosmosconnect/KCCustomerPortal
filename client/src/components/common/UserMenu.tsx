import React, { useState } from 'react';
import {
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  styled,
} from '@mui/material';
import {
  Person,
  Settings,
  Logout,
  AccountCircle,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: 'rgba(11, 19, 64, 0.95)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(157, 78, 221, 0.2)',
    borderRadius: '12px',
    marginTop: '8px',
    minWidth: '200px',
  },
});

const StyledMenuItem = styled(MenuItem)({
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: 'rgba(157, 78, 221, 0.1)',
  },
  '& .MuiListItemIcon-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    minWidth: '40px',
  },
  '& .MuiListItemText-primary': {
    color: 'rgba(255, 255, 255, 0.9)',
  },
});

const UserAvatar = styled(Avatar)({
  width: 44,
  height: 44,
  cursor: 'pointer',
  border: '2px solid rgba(157, 78, 221, 0.3)',
  transition: 'border-color 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(157, 78, 221, 0.5)',
  },
});

const UserMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    navigate('/login');
  };

  return (
    <>
      <IconButton
        onClick={handleMenu}
        size="large"
        sx={{ padding: 0 }}
      >
        <UserAvatar>
          <AccountCircle />
        </UserAvatar>
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <StyledMenuItem onClick={() => handleNavigation('/profile')}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleNavigation('/settings')}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <Divider sx={{ borderColor: 'rgba(157, 78, 221, 0.2)' }} />
        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};

export default UserMenu;
