import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(90deg, rgba(11, 19, 64, 0.95), rgba(11, 19, 64, 0.9))',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(157, 78, 221, 0.2)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 0',
});

const LogoContainer = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    opacity: 0.8,
  },
});

const LogoText = styled(Typography)({
  background: 'linear-gradient(90deg, #9D4EDD, #00B4D8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontSize: '1.5rem',
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  position: 'relative',
  transition: 'color 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '-4px',
    left: '0',
    background: 'linear-gradient(90deg, #9D4EDD, #00B4D8)',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: '#00B4D8',
    '&::after': {
      width: '100%',
    },
  },
});

const AuthButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const LoginButton = styled(Button)({
  color: '#00B4D8',
  borderColor: '#00B4D8',
  padding: '8px 20px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.95rem',
  border: '1.5px solid',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)',
    borderColor: '#00B4D8',
  },
});

const SignupButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  padding: '10px 24px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(157, 78, 221, 0.3)',
  '&:hover': {
    boxShadow: '0 6px 20px rgba(157, 78, 221, 0.4)',
    transform: 'translateY(-2px)',
  },
});

const SocialIcon = styled(IconButton)({
  color: 'rgba(255, 255, 255, 0.6)',
  transition: 'all 0.3s ease',
  padding: '8px',
  '&:hover': {
    color: '#00B4D8',
    transform: 'translateY(-2px)',
  },
});

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: '#00B4D8',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const PublicNavbar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (path: string) => {
    handleMobileMenuClose();
    navigate(path);
  };

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <StyledToolbar>
          {/* Logo */}
          <LogoContainer to="/">
            <img src="/logo.png" alt="Kosmos Connect" height="40" />
            <LogoText>Kosmos Connect</LogoText>
          </LogoContainer>

          {/* Desktop Navigation */}
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          {/* Desktop Auth Buttons & Social */}
          <AuthButtons>
            <SocialIcon size="small">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon size="small">
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon size="small">
              <GitHubIcon />
            </SocialIcon>
            <LoginButton variant="outlined" onClick={() => navigate('/login')}>
              Login
            </LoginButton>
            <SignupButton variant="contained" onClick={() => navigate('/register')}>
              Get Started
            </SignupButton>
          </AuthButtons>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={handleMobileMenuOpen}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </MobileMenuButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={mobileMenuOpen}
            onClose={handleMobileMenuClose}
            PaperProps={{
              sx: {
                background: 'linear-gradient(135deg, rgba(11, 19, 64, 0.98), rgba(11, 19, 64, 0.95))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(157, 78, 221, 0.2)',
                borderRadius: '12px',
                mt: 1,
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    background: 'rgba(157, 78, 221, 0.1)',
                    color: '#00B4D8',
                  },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
            <MenuItem sx={{ borderTop: '1px solid rgba(157, 78, 221, 0.2)' }}>
              <LoginButton
                fullWidth
                variant="outlined"
                onClick={() => {
                  handleMobileMenuClose();
                  navigate('/login');
                }}
              >
                Login
              </LoginButton>
            </MenuItem>
            <MenuItem>
              <SignupButton
                fullWidth
                variant="contained"
                onClick={() => {
                  handleMobileMenuClose();
                  navigate('/register');
                }}
              >
                Get Started
              </SignupButton>
            </MenuItem>
          </Menu>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default PublicNavbar;
