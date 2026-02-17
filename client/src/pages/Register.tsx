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
  RocketLaunch,
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
  padding: '24px'
});

const GlassCard = styled(Box)({
  background: 'rgba(11, 19, 64, 0.7)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  padding: '48px',
  width: '100%',
  maxWidth: '680px',
  border: '1px solid rgba(157, 78, 221, 0.2)',
  boxShadow: '0 8px 32px rgba(157, 78, 221, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, rgba(157, 78, 221, 0), rgba(157, 78, 221, 0.5), rgba(157, 78, 221, 0))',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#FFFFFF',
    backgroundColor: 'rgba(157, 78, 221, 0.1)',
    borderRadius: '12px',
    '& fieldset': {
      borderColor: 'rgba(157, 78, 221, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(157, 78, 221, 0.4)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9D4EDD',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputAdornment-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  marginBottom: '20px',
});

const GlowingButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, rgba(0, 180, 216, 0.8) 100%)',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 20px rgba(157, 78, 221, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: 'linear-gradient(135deg, #9D4EDD 20%, rgba(0, 180, 216, 0.9) 100%)',
    boxShadow: '0 6px 24px rgba(157, 78, 221, 0.6)',
    transform: 'translateY(-1px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover::after': {
    transform: 'translateX(100%)',
  },
});

const StyledHeaderBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4)
}));

const StyledRocketIcon = styled(RocketLaunch)(({ theme }) => ({
  fontSize: 48,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2)
}));

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
            <StyledRocketIcon />
            <StyledTitle variant="h4">
              Join the Cosmos
            </StyledTitle>
            <StyledSubtitle variant="body1">
              Create your account to start exploring
            </StyledSubtitle>
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
