import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const PublicNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(2,8,24,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,180,216,0.15)' : 'none',
          transition: 'all 0.4s ease',
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
            >
              <Box
                sx={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 16px rgba(0,180,216,0.5)',
                }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '1rem', lineHeight: 1 }}>K</Typography>
              </Box>
              <Typography
                sx={{
                  background: 'linear-gradient(90deg,#fff,#00B4D8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  fontSize: { xs: '1.1rem', md: '1.35rem' },
                  letterSpacing: '-0.5px',
                }}
              >
                Kosmos Connect
              </Typography>
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Box
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isActive(item.path) ? '#00B4D8' : 'rgba(255,255,255,0.85)',
                      textDecoration: 'none',
                      fontWeight: isActive(item.path) ? 700 : 500,
                      fontSize: '0.95rem',
                      position: 'relative',
                      transition: 'color 0.3s',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: isActive(item.path) ? '100%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg,#9D4EDD,#00B4D8)',
                        transition: 'width 0.3s',
                      },
                      '&:hover': { color: '#00B4D8', '&::after': { width: '100%' } },
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
            )}

            {/* Auth Buttons */}
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              {!isMobile && (
                <Button
                  onClick={() => navigate('/login')}
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    '&:hover': { color: '#00B4D8' },
                  }}
                >
                  Login
                </Button>
              )}
              {!isMobile && (
                <Button
                  onClick={() => navigate('/register')}
                  sx={{
                    background: '#2563EB',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
                    '&:hover': { background: '#1d4ed8', boxShadow: '0 6px 24px rgba(37,99,235,0.5)', transform: 'translateY(-1px)' },
                    transition: 'all 0.3s',
                  }}
                >
                  Get Started
                </Button>
              )}
              {isMobile && (
                <IconButton onClick={() => setMobileOpen(true)} sx={{ color: '#fff' }}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(2,8,24,0.97)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(0,180,216,0.2)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => { navigate(item.path); setMobileOpen(false); }}
                sx={{
                  borderRadius: '10px',
                  mb: 0.5,
                  color: isActive(item.path) ? '#00B4D8' : 'rgba(255,255,255,0.85)',
                  background: isActive(item.path) ? 'rgba(0,180,216,0.08)' : 'transparent',
                  '&:hover': { background: 'rgba(0,180,216,0.1)', color: '#00B4D8' },
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <ListItemButton
              onClick={() => { navigate('/login'); setMobileOpen(false); }}
              sx={{ borderRadius: '10px', border: '1px solid rgba(0,180,216,0.4)', color: '#00B4D8', mb: 1 }}
            >
              <ListItemText primary="Login" primaryTypographyProps={{ fontWeight: 600, textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => { navigate('/register'); setMobileOpen(false); }}
              sx={{ borderRadius: '50px', background: '#2563EB', color: '#fff', '&:hover': { background: '#1d4ed8' } }}
            >
              <ListItemText primary="Get Started" primaryTypographyProps={{ fontWeight: 700, textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default PublicNavbar;
