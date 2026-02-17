import React, { useState } from 'react';
import type { SxProps } from '@mui/material';
import {
  Box,
  Grid,
  Typography,
  Switch,
  FormControlLabel,
  Alert,
  Divider,
  Button,
  Slider,
  Chip,
  Select,
  MenuItem,
  LinearProgress,
  Tabs,
  Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Notifications,
  Security,
  VolumeUp,
  DarkMode,
  Language,
  Palette,
  Storage,
  Lock,
  Download,
  Delete,
  CheckCircle,
} from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const HeaderContainer = styled(Box)({
  marginBottom: 32
});

const PageTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 8
});

const PageSubtitle = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)'
});

const SettingsSection = styled(Box)({
  marginBottom: 32
});

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 16
});

const StyledDivider = styled(Divider)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: '24px 0'
});

const StyledFormControlLabel = styled(FormControlLabel)({
  '& .MuiTypography-root': {
    color: '#FFFFFF'
  }
});

const SaveButton = styled(Button)({
  background: 'linear-gradient(45deg, #9D4EDD, #00B4D8)',
  color: '#FFFFFF',
  padding: '8px 24px',
  '&:hover': {
    background: 'linear-gradient(45deg, #7B2CBF, #0098B8)'
  }
});

const SuccessAlert = styled(Alert)({
  marginBottom: 24,
  backgroundColor: 'rgba(46, 125, 50, 0.1)',
  color: '#81c784',
  '& .MuiAlert-icon': {
    color: '#81c784'
  }
});

const StyledSlider = styled(Slider)({
  color: '#9D4EDD',
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0 0 0 8px rgba(157, 78, 221, 0.16)',
    },
    '&.Mui-active': {
      boxShadow: '0 0 0 12px rgba(157, 78, 221, 0.16)',
    },
  },
  '& .MuiSlider-track': {
    background: 'linear-gradient(90deg, #9D4EDD, #00B4D8)',
  },
});

const StyledSwitch = styled(Switch)({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#9D4EDD',
    '&:hover': {
      backgroundColor: 'rgba(157, 78, 221, 0.08)',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#9D4EDD',
  },
});

const GlassCard = styled(Box)({
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
    background: 'linear-gradient(90deg, rgba(157, 78, 221, 0), rgba(157, 78, 221, 0.5), rgba(157, 78, 221, 0))',
  },
});

const IconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
});

const StyledIcon = styled(Box)({
  color: '#9D4EDD',
  fontSize: 28
});

const SliderContainer = styled(Box)({
  padding: '0 16px'
});

const ButtonContainer = styled(Box)({
  marginTop: 32
});

const Settings: React.FC = () => {
  const storageBoxStyle: SxProps = { mb: 2 };
  const storageProgressStyle: SxProps = { height: '8px', borderRadius: '4px', backgroundColor: 'rgba(0, 180, 216, 0.1)' };
  const [tabValue, setTabValue] = useState(0);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    twoFactor: false,
    emailAlerts: true,
    dataBackup: true,
    volume: 70,
    language: 'English',
    theme: 'Space',
    privacyLevel: 'public',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked
    });
  };

  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    setSettings(prev => ({
      ...prev,
      volume: newValue as number
    }));
  };

  const handleSelectChange = (event: any) => {
    setSettings(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <PageBackground>
      <PageContainer>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <HeaderContainer>
              <PageTitle variant="h4">
                Settings
              </PageTitle>
              <PageSubtitle variant="body1">
                Customize your space exploration experience
              </PageSubtitle>
            </HeaderContainer>

            {saved && (
              <SuccessAlert>
                Settings saved successfully
              </SuccessAlert>
            )}
          </Grid>

          <Grid item xs={12} md={8}>
            <GlassCard>
              <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
                <Tab label="Notifications & Sound" />
                <Tab label="Security & Privacy" />
                <Tab label="Data & Storage" />
              </Tabs>

              {tabValue === 0 && (
                <>
                  <SettingsSection>
                    <IconWrapper>
                      <StyledIcon>
                        <Notifications />
                      </StyledIcon>
                      <SectionTitle variant="h6">
                        Notifications
                      </SectionTitle>
                    </IconWrapper>
                    <StyledFormControlLabel
                      control={
                        <StyledSwitch
                          checked={settings.notifications}
                          onChange={handleChange}
                          name="notifications"
                        />
                      }
                      label="Enable Push Notifications"
                    />
                    <StyledFormControlLabel
                      control={
                        <StyledSwitch
                          checked={settings.emailAlerts}
                          onChange={handleChange}
                          name="emailAlerts"
                        />
                      }
                      label="Email Alerts"
                    />
                  </SettingsSection>

                  <StyledDivider />

                  <SettingsSection>
                    <IconWrapper>
                      <StyledIcon>
                        <VolumeUp />
                      </StyledIcon>
                      <SectionTitle variant="h6">
                        Sound
                      </SectionTitle>
                    </IconWrapper>
                    <SliderContainer>
                      <StyledSlider
                        value={settings.volume}
                        onChange={handleVolumeChange}
                        aria-label="Volume"
                      />
                    </SliderContainer>
                  </SettingsSection>
                </>
              )}

              {tabValue === 1 && (
                <>
                  <SettingsSection>
                    <IconWrapper>
                      <StyledIcon>
                        <Security />
                      </StyledIcon>
                      <SectionTitle variant="h6">
                        Security
                      </SectionTitle>
                    </IconWrapper>
                    <StyledFormControlLabel
                      control={
                        <StyledSwitch
                          checked={settings.twoFactor}
                          onChange={handleChange}
                          name="twoFactor"
                        />
                      }
                      label="Two-factor Authentication"
                    />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', mt: 1 }}>
                      Enhance your account security with 2FA
                    </Typography>
                  </SettingsSection>

                  <StyledDivider />

                  <SettingsSection>
                    <IconWrapper>
                      <StyledIcon>
                        <Lock />
                      </StyledIcon>
                      <SectionTitle variant="h6">
                        Privacy Level
                      </SectionTitle>
                    </IconWrapper>
                    <Select
                      fullWidth
                      name="privacyLevel"
                      value={settings.privacyLevel}
                      onChange={handleSelectChange}
                      sx={{ color: '#FFFFFF', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.2)' } }}
                    >
                      <MenuItem value="public">Public</MenuItem>
                      <MenuItem value="private">Private</MenuItem>
                      <MenuItem value="friends">Friends Only</MenuItem>
                    </Select>
                  </SettingsSection>
                </>
              )}

              {tabValue === 2 && (
                <>
                  <SettingsSection>
                    <IconWrapper>
                      <StyledIcon>
                        <Storage />
                      </StyledIcon>
                      <SectionTitle variant="h6">
                        Storage Usage
                      </SectionTitle>
                    </IconWrapper>
                    <Box sx={storageBoxStyle}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Used: 2.3 GB / 10 GB</Typography>
                        <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>23%</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={23} sx={storageProgressStyle} />
                    </Box>
                  </SettingsSection>

                  <StyledDivider />

                  <SettingsSection>
                    <IconWrapper>
                      <StyledIcon>
                        <Download />
                      </StyledIcon>
                      <SectionTitle variant="h6">
                        Data Management
                      </SectionTitle>
                    </IconWrapper>
                    <StyledFormControlLabel
                      control={
                        <StyledSwitch
                          checked={settings.dataBackup}
                          onChange={handleChange}
                          name="dataBackup"
                        />
                      }
                      label="Automatic Backups"
                    />
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      <Button variant="outlined" startIcon={<Download />} sx={{ color: '#00B4D8', borderColor: '#00B4D8' }}>
                        Export Data
                      </Button>
                      <Button variant="outlined" startIcon={<Delete />} sx={{ color: '#F44336', borderColor: '#F44336' }}>
                        Delete Account
                      </Button>
                    </Box>
                  </SettingsSection>
                </>
              )}
            </GlassCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <GlassCard>
                  <IconWrapper>
                    <StyledIcon>
                      <DarkMode />
                    </StyledIcon>
                    <SectionTitle variant="h6">
                      Appearance
                    </SectionTitle>
                  </IconWrapper>
                  <StyledFormControlLabel
                    control={
                      <StyledSwitch
                        checked={settings.darkMode}
                        onChange={handleChange}
                        name="darkMode"
                      />
                    }
                    label="Dark Mode"
                  />
                </GlassCard>
              </Grid>

              <Grid item xs={12}>
                <GlassCard>
                  <IconWrapper>
                    <StyledIcon>
                      <Language />
                    </StyledIcon>
                    <SectionTitle variant="h6">
                      Language
                    </SectionTitle>
                  </IconWrapper>
                  <Select
                    fullWidth
                    name="language"
                    value={settings.language}
                    onChange={handleSelectChange}
                    sx={{ color: '#FFFFFF', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.2)' } }}
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                    <MenuItem value="German">German</MenuItem>
                  </Select>
                </GlassCard>
              </Grid>

              <Grid item xs={12}>
                <GlassCard>
                  <IconWrapper>
                    <StyledIcon>
                      <Palette />
                    </StyledIcon>
                    <SectionTitle variant="h6">
                      Theme
                    </SectionTitle>
                  </IconWrapper>
                  <Select
                    fullWidth
                    name="theme"
                    value={settings.theme}
                    onChange={handleSelectChange}
                    sx={{ color: '#FFFFFF', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.2)' } }}
                  >
                    <MenuItem value="Space">Space</MenuItem>
                    <MenuItem value="Ocean">Ocean</MenuItem>
                    <MenuItem value="Forest">Forest</MenuItem>
                    <MenuItem value="Sunset">Sunset</MenuItem>
                  </Select>
                </GlassCard>
              </Grid>

              <Grid item xs={12}>
                <GlassCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <CheckCircle sx={{ color: '#4CAF50', fontSize: '1.2rem' }} />
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Account Status</Typography>
                  </Box>
                  <Chip label="✓ Verified" sx={{ background: 'rgba(76, 175, 80, 0.2)', color: '#4CAF50', mb: 1 }} />
                  <Chip label="Pro Member" sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }} />
                </GlassCard>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <ButtonContainer>
              <SaveButton variant="contained" onClick={handleSave}>
                Save Changes
              </SaveButton>
            </ButtonContainer>
          </Grid>
        </Grid>
      </PageContainer>
    </PageBackground>
  );
};

export default Settings;
