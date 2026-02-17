import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  background: 'rgba(4, 7, 32, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
});

const LogoLink = styled(RouterLink)(({ theme }) => ({
  flexGrow: 1,
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 700,
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));

const NavButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2)
}));

const NavLink = styled(RouterLink)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.2s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
    background: 'rgba(255, 255, 255, 0.05)'
  }
}));

interface NavItem {
  text: string;
  path: string;
}

const navLinks: NavItem[] = [
  { text: 'Dashboard', path: '/dashboard' },
  { text: 'VR Experience', path: '/vr-experience' },
  { text: 'Support', path: '/support' }
];

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <LogoLink to="/">
          <Typography variant="h6">
            Kosmos Connect
          </Typography>
        </LogoLink>
        <NavButtonsContainer>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
            >
              {link.text}
            </NavLink>
          ))}
        </NavButtonsContainer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
