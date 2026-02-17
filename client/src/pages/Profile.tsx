import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
  Card,
  Badge,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Edit as EditIcon,
  Save,
  Verified,
  Star,
} from '@mui/icons-material';
import { PageBackground } from '../components/Layout/PageContainer';

const StyledContainer = styled(Container)({
  paddingTop: '40px',
  paddingBottom: '40px',
});

const GlassCard = styled(Card)({
  background: 'rgba(11, 19, 64, 0.7)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  padding: '32px',
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
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
  },
});

const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  border: '4px solid rgba(157, 78, 221, 0.3)',
  boxShadow: '0 4px 20px rgba(157, 78, 221, 0.2)',
  backgroundColor: 'rgba(157, 78, 221, 0.2)',
  color: '#FFFFFF',
  fontSize: '3rem',
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ProfileBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const EditButton = styled(IconButton)({
  marginTop: -24,
  position: 'relative',
  zIndex: 1
});

const ProfileName = styled(Typography)({
  marginTop: 16,
  color: '#FFFFFF',
  fontWeight: 600
});

const ProfileCompany = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)'
});

const InfoHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24
});

const EditProfileButton = styled(IconButton)({
  color: '#FFFFFF',
  backgroundColor: 'rgba(157, 78, 221, 0.2)',
  '&:hover': {
    backgroundColor: 'rgba(157, 78, 221, 0.3)'
  }
});

const FormGrid = styled(Grid)({
  marginBottom: 24
});

const FormField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: '#FFFFFF'
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)'
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)'
    }
  }
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

const SubmitButtonContainer = styled(Box)({
  marginTop: 24,
  display: 'flex',
  justifyContent: 'flex-end'
});

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'Space Corp',
    phone: '+1 234 567 8900',
    location: 'New York, USA',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <PageBackground>
      <StyledContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <GlassCard>
              <ProfileBox>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <StyledAvatar alt={formData.firstName}>
                    {formData.firstName[0]}
                  </StyledAvatar>
                </StyledBadge>
                <EditButton>
                  <EditIcon fontSize="small" />
                </EditButton>
                <ProfileName variant="h5">
                  {formData.firstName} {formData.lastName}
                </ProfileName>
                <ProfileCompany variant="body1">
                  {formData.company}
                </ProfileCompany>
                <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Chip icon={<Verified />} label="Verified" sx={{ background: 'rgba(76, 175, 80, 0.2)', color: '#4CAF50' }} />
                  <Chip icon={<Star />} label="Pro Member" sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }} />
                </Box>
              </ProfileBox>
            </GlassCard>
          </Grid>

          <Grid item xs={12} md={8}>
            <GlassCard>
              <InfoHeader>
                <ProfileName variant="h5">
                  Profile & Account
                </ProfileName>
                <EditProfileButton onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? <Save /> : <EditIcon />}
                </EditProfileButton>
              </InfoHeader>

              <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Tab label="Personal Info" />
                <Tab label="Account Stats" />
                <Tab label="Activity" />
              </Tabs>

              {tabValue === 0 && (
                <form onSubmit={handleSubmit}>
                  <FormGrid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField
                        fullWidth
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </FormGrid>

                  {isEditing && (
                    <SubmitButtonContainer>
                      <GlowingButton type="submit">
                        Save Changes
                      </GlowingButton>
                    </SubmitButtonContainer>
                  )}
                </form>
              )}

              {tabValue === 1 && (
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>Account Statistics</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: 2, background: 'rgba(0, 180, 216, 0.1)', borderRadius: '8px' }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Total Observations</Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '1.8rem', fontWeight: 800 }}>1,250</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: 2, background: 'rgba(0, 180, 216, 0.1)', borderRadius: '8px' }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Data Downloaded</Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '1.8rem', fontWeight: 800 }}>2.3 TB</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: 2, background: 'rgba(0, 180, 216, 0.1)', borderRadius: '8px' }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Member Since</Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '1.8rem', fontWeight: 800 }}>2022</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: 2, background: 'rgba(0, 180, 216, 0.1)', borderRadius: '8px' }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Account Level</Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '1.8rem', fontWeight: 800 }}>Pro</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}

              {tabValue === 2 && (
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>Recent Activity</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      { action: 'Downloaded dataset', time: '2 hours ago' },
                      { action: 'Created observation request', time: '1 day ago' },
                      { action: 'Updated profile', time: '3 days ago' }
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ p: 2, background: 'rgba(0, 180, 216, 0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#FFFFFF' }}>{item.action}</Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>{item.time}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </GlassCard>
          </Grid>
        </Grid>
      </StyledContainer>
    </PageBackground>
  );
};

export default Profile;
