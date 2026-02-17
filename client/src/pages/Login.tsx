import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { setCredentials } from '../redux/slices/authSlice';

// Styled components
const GlassContainer = styled(Container)({
  background: 'rgba(20, 30, 80, 0.4)',
  backdropFilter: 'blur(20px)',
  borderRadius: '20px',
  padding: '48px 40px',
  boxShadow: '0 8px 32px rgba(0, 180, 216, 0.15), 0 0 60px rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  maxWidth: '420px !important',
});

const LoginBackground = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #1a237e 0%, #000000 100%)',
  padding: '20px',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00B4D8',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
});

const ErrorText = styled(Typography)({
  color: '#ff1744',
  textAlign: 'center',
  marginTop: '8px',
  fontSize: '0.875rem',
});

const SignUpText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  textAlign: 'center',
});

const SignUpLink = styled('span')({
  color: '#00B4D8',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const LoginButton = styled(Button)({
  background: 'linear-gradient(135deg, #00B4D8 0%, #0095b5 100%)',
  color: '#fff',
  padding: '12px',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #0095b5 0%, #007a96 100%)',
    boxShadow: '0 8px 24px rgba(0, 180, 216, 0.4)',
    transform: 'translateY(-2px)',
  },
});

const ForgotPasswordLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  '&:hover': {
    color: '#00B4D8',
  },
});

const PageTitle = styled(Typography)({
  textAlign: 'center',
  color: '#fff',
  marginBottom: '8px',
  fontWeight: 500,
  letterSpacing: '0.3px',
});

const CenteredBox = styled(Box)({
  textAlign: 'center',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '24px',
  '& img': {
    height: '60px',
    width: 'auto',
    filter: 'drop-shadow(0 0 10px rgba(0, 180, 216, 0.3))',
  },
});

const BrandText = styled(Typography)({
  color: '#00B4D8',
  fontWeight: 600,
  letterSpacing: '0.5px',
  marginTop: '8px',
  textAlign: 'center',
});

const Divider = styled(Box)({
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.5), transparent)',
  margin: '24px 0',
});

// Interfaces
interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Mock authentication logic
      const mockUser = {
        id: '1',
        email: formData.email,
        firstName: 'Test',
        lastName: 'User',
        role: 'user',
      };

      dispatch(setCredentials({
        user: mockUser,
        token: 'mock-token',
      }));
      
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <LoginBackground>
      <GlassContainer maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <LogoContainer>
              <img src="/logo.png" alt="Kosmos Connect Logo" />
            </LogoContainer>
            
            <BrandText variant="subtitle1">
              KOSMOS CONNECT
            </BrandText>
            
            <Divider />
            
            <PageTitle variant="h5">
              Sign In
            </PageTitle>

            <StyledTextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <StyledTextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            {error && <ErrorText>{error}</ErrorText>}

            <LoginButton
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign In
            </LoginButton>

            <CenteredBox>
              <ForgotPasswordLink href="#">
                Forgot password?
              </ForgotPasswordLink>
            </CenteredBox>

            <SignUpText>
              Don't have an account?{' '}
              <SignUpLink onClick={() => navigate('/register')}>
                Sign Up
              </SignUpLink>
            </SignUpText>
          </FormContainer>
        </form>
      </GlassContainer>
    </LoginBackground>
  );
};

export default Login;
