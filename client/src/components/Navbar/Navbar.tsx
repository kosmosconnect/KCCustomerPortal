import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  AccountCircle,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(90deg, rgba(74, 144, 226, 0.3) 0%, rgba(124, 77, 255, 0.3) 100%)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const LogoContainer = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit'
});

const NavContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
});

const StyledNavLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  padding: theme.spacing(1),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '0',
    left: '50%',
    background: 'linear-gradient(90deg, #4A90E2 0%, #7C4DFF 100%)',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '80%',
  },
}));

const UserSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
});

interface NavItem {
  title: string;
  path: string;
}

const pages: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'Data Visualization', path: '/data-visualization' },
  { title: 'VR Experience', path: '/vr-experience' },
  { title: 'Support', path: '/support' }
];

const settings: NavItem[] = [
  { title: 'Profile', path: '/profile' },
  { title: 'Account', path: '/account' },
  { title: 'Dashboard', path: '/dashboard' }
];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettingClick = (path: string) => {
    handleCloseUserMenu();
    navigate(path);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    // Add logout logic here
    navigate('/login');
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar>
          {/* Logo */}
          <LogoContainer to="/">
            <Typography variant="h6" noWrap>
              Kosmos Connect
            </Typography>
          </LogoContainer>

          {/* Navigation Links */}
          <NavContainer>
            {pages.map((page) => (
              <StyledNavLink key={page.path} to={page.path}>
                {page.title}
              </StyledNavLink>
            ))}
          </NavContainer>

          {/* User Menu */}
          <UserSection>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={setting.path}
                  onClick={() => handleSettingClick(setting.path)}
                >
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </UserSection>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
