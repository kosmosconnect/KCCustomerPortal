import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Alert,
  Grid,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
  Business,
  Phone,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PageBackground } from '../components/Layout/PageContainer';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '40px 20px',
  position: 'relative',
});

const GlassCard = styled(Box)({
  background: 'radial-gradient(circle at 20% 20%, rgba(0,180,216,0.16), transparent 40%), radial-gradient(circle at 80% 10%, rgba(157,78,221,0.22), transparent 42%), rgba(2, 8, 24, 0.78)',
  backdropFilter: 'blur(24px)',
  borderRadius: '24px',
  padding: '48px',
  width: '100%',
  maxWidth: '720px',
  border: '1px solid rgba(0, 180, 216, 0.35)',
  boxShadow: '0 20px 80px rgba(0, 180, 216, 0.25), 0 8px 32px rgba(2, 8, 24, 0.65)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, rgba(157,78,221,0), rgba(0,180,216,0.85), rgba(157,78,221,0))',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05), transparent 50%)',
    pointerEvents: 'none',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#FFFFFF',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: '14px',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.14)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 180, 216, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00B4D8',
      boxShadow: '0 0 0 1px rgba(0,180,216,0.4), 0 10px 30px rgba(0,180,216,0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.65)',
    fontSize: '0.9rem',
    letterSpacing: '0.2px',
  },
  '& .MuiInputAdornment-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  '& .MuiInputBase-input': {
    padding: '14px 14px',
    fontWeight: 600,
    letterSpacing: '0.2px',
    color: '#F8FAFC',
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px rgba(255,255,255,0.04) inset',
    WebkitTextFillColor: '#F8FAFC',
    caretColor: '#F8FAFC',
  },
  marginBottom: '20px',
});

const GlowingButton = styled(Button)({
  background: 'linear-gradient(135deg, #2563EB 0%, #00B4D8 55%, #9D4EDD 100%)',
  color: '#FFFFFF',
  padding: '14px 26px',
  borderRadius: '14px',
  fontSize: '1rem',
  fontWeight: 700,
  textTransform: 'none',
  letterSpacing: '0.3px',
  boxShadow: '0 10px 32px rgba(0, 180, 216, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: 'linear-gradient(135deg, #1D4ED8 0%, #00B4D8 50%, #9D4EDD 100%)',
    boxShadow: '0 12px 36px rgba(0, 180, 216, 0.35)',
    transform: 'translateY(-1px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.22), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.65s ease',
  },
  '&:hover::after': {
    transform: 'translateX(100%)',
  },
});

const StyledHeaderBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4)
}));

const LogoMark = styled('img')({
  width: 80,
  height: 80,
  objectFit: 'contain',
  marginBottom: 4,
  filter: 'drop-shadow(0 6px 18px rgba(0,180,216,0.45))',
});

const BrandText = styled(Typography)({
  color: '#A5B4FC',
  letterSpacing: '2.6px',
  fontSize: '0.78rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: 8,
});

const ComingSoonBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 12px',
  borderRadius: '12px',
  background: 'rgba(0, 180, 216, 0.12)',
  border: '1px solid rgba(0, 180, 216, 0.35)',
  color: '#E5E7EB',
  fontWeight: 600,
  letterSpacing: '0.4px',
  marginTop: 4,
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  marginBottom: theme.spacing(1)
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.7)
}));

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderRadius: '12px'
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const StyledFooterBox = styled(Box)({
  textAlign: 'center'
});

const StyledFooterText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.7)
}));

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add your registration logic here
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <PageBackground>
      <StyledContainer>
        <GlassCard>
          <StyledHeaderBox>
            <LogoMark src="/logo.png" alt="Kosmos Connect" />
            <BrandText>KOSMOS CONNECT</BrandText>
            <StyledTitle variant="h4">
              Join Kosmos Connect Live
            </StyledTitle>
            <StyledSubtitle variant="body1">
              Create your account to start exploring
            </StyledSubtitle>
            <ComingSoonBadge>
              <span>Coming Soon</span>
              <span>·</span>
              <span>First Light 2028 Q1</span>
            </ComingSoonBadge>
          </StyledHeaderBox>

          {error && (
            <StyledAlert severity="error">
              {error}
            </StyledAlert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Business />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <GlowingButton
              fullWidth
              type="submit"
              variant="contained"
            >
              Create Account
            </GlowingButton>

            <StyledFooterBox>
              <StyledFooterText variant="body2">
                Already have an account?{' '}
                <StyledLink href="/login">
                  Sign in
                </StyledLink>
              </StyledFooterText>
            </StyledFooterBox>
          </form>
        </GlassCard>
      </StyledContainer>
    </PageBackground>
  );
};

export default Register;
