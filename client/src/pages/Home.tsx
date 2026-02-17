import { FC, useState } from 'react';
import { Box, Typography, Button, Grid, Card, Stack, InputAdornment, TextField, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
  Satellite,
  Shield,
  Radar,
  TrendingUp,
  Search,
  ArrowForward,
  Public,
  Speed,
  Visibility,
  Warning,
  CheckCircle,
  Visibility as TelescopeIcon,
  AddToPhotos,
  SignalCellularAlt,
  Cloud,
  Notifications
} from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700
});

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  position: 'relative',
  zIndex: 1
}));

const HeroTitle = styled(Typography)({
  fontSize: '3.5rem',
  fontWeight: 800,
  color: '#FFFFFF',
  marginBottom: '16px',
  lineHeight: 1.2,
  '@media (max-width: 960px)': {
    fontSize: '2.5rem'
  }
});

const HeroSubtitle = styled(Typography)({
  fontSize: '1.3rem',
  color: 'rgba(255, 255, 255, 0.85)',
  marginBottom: '32px',
  maxWidth: '800px',
  lineHeight: 1.6,
  '@media (max-width: 960px)': {
    fontSize: '1.1rem'
  }
});

const TaglineBox = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  background: 'rgba(0, 180, 216, 0.15)',
  border: '1px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '20px',
  marginBottom: '24px'
});

const TaglineText = styled(Typography)({
  color: '#00B4D8',
  fontWeight: 600,
  fontSize: '0.95rem'
});

const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  padding: '14px 32px',
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)',
  '&:hover': {
    boxShadow: '0 12px 32px rgba(157, 78, 221, 0.4)',
    transform: 'translateY(-2px)'
  }
});

const SecondaryButton = styled(Button)({
  color: '#00B4D8',
  borderColor: '#00B4D8',
  padding: '12px 28px',
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  border: '2px solid',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)',
    borderColor: '#00B4D8'
  }
});

const SearchBar = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    color: '#fff',
    height: '56px',
    border: '1px solid rgba(157, 78, 221, 0.2)',
    transition: 'all 0.3s ease',
    '& fieldset': {
      border: 'none'
    },
    '&:hover': {
      border: '1px solid rgba(157, 78, 221, 0.4)',
      boxShadow: '0 4px 20px rgba(157, 78, 221, 0.2)'
    },
    '&.Mui-focused': {
      border: '1px solid rgba(157, 78, 221, 0.6)',
      boxShadow: '0 4px 20px rgba(157, 78, 221, 0.3)'
    }
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
    opacity: 1
  }
});

const FeatureCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  padding: '32px',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(0, 180, 216, 0.2)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const FeatureIcon = styled(Box)({
  width: '64px',
  height: '64px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  fontSize: '2rem',
  marginBottom: '16px'
});

const FeatureTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1.3rem',
  marginBottom: '12px'
});

const FeatureDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.75)',
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: '16px',
  flex: 1
});

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '2.5rem',
  marginBottom: '48px',
  textAlign: 'center',
  '@media (max-width: 960px)': {
    fontSize: '2rem'
  }
});

const StatBox = styled(Box)({
  textAlign: 'center',
  padding: '24px'
});

const StatNumber = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 800,
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '8px'
});

const StatLabel = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '1rem',
  fontWeight: 600
});

const CapabilityItem = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  marginBottom: '24px'
});

const CapabilityIcon = styled(Box)({
  color: '#00B4D8',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  marginTop: '4px'
});

const CapabilityText = styled(Box)({});

const CapabilityTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1.1rem',
  marginBottom: '4px'
});

const CapabilityDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.95rem'
});

const CTACard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2) 0%, rgba(0, 180, 216, 0.15) 100%)',
  backdropFilter: 'blur(20px)',
  border: '2px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '16px',
  padding: '48px',
  textAlign: 'center',
  marginTop: '64px',
  marginBottom: '64px'
});

const CTATitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '2rem',
  marginBottom: '16px'
});

const CTADescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '1.1rem',
  marginBottom: '32px',
  maxWidth: '600px',
  margin: '0 auto 32px'
});

// Live Status Strip
const LiveStatusStrip = styled(Box)({
  background: 'linear-gradient(90deg, rgba(0, 180, 216, 0.15) 0%, rgba(157, 78, 221, 0.1) 100%)',
  border: '1px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '12px',
  padding: '16px 24px',
  marginBottom: '32px',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexWrap: 'wrap',
  '@media (max-width: 960px)': {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});

const StatusItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

const StatusLabel = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.85rem',
  fontWeight: 600
});

const StatusValue = styled(Typography)({
  color: '#00B4D8',
  fontSize: '0.95rem',
  fontWeight: 700
});

// Events Section
const EventCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, rgba(157, 78, 221, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 180, 216, 0.15)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const EventDate = styled(Typography)({
  color: '#00B4D8',
  fontSize: '0.85rem',
  fontWeight: 700,
  marginBottom: '4px'
});

const EventTitle = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '1rem',
  fontWeight: 700,
  marginBottom: '8px'
});

const EventDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.9rem',
  marginBottom: '12px'
});

const AddToCalendarButton = styled(Button)({
  color: '#00B4D8',
  fontSize: '0.85rem',
  fontWeight: 600,
  padding: '4px 12px',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)'
  }
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const Home: FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      icon: <Satellite />,
      title: 'Real-Time Satellite Monitoring',
      description: 'Access live satellite data and orbital tracking for comprehensive space situational awareness'
    },
    {
      icon: <Shield />,
      title: 'Planetary Defense System',
      description: 'Advanced threat detection and early warning systems for near-Earth objects and cosmic hazards'
    },
    {
      icon: <Radar />,
      title: 'Telescope as a Service',
      description: 'Democratized access to professional-grade telescopes and astronomical instruments globally'
    },
    {
      icon: <TrendingUp />,
      title: 'Data Analytics',
      description: 'Powerful analytics tools to process and visualize massive space observation datasets'
    },
    {
      icon: <Speed />,
      title: 'Real-Time Alerts',
      description: 'Instant notifications for critical space events and potential threats to Earth'
    },
    {
      icon: <Visibility />,
      title: 'Global Coverage',
      description: 'Worldwide network of observation stations providing 24/7 planetary surveillance'
    }
  ];

  const capabilities = [
    {
      icon: <CheckCircle />,
      title: 'Asteroid & Comet Tracking',
      description: 'Monitor potentially hazardous objects and predict orbital trajectories with precision'
    },
    {
      icon: <Warning />,
      title: 'Impact Risk Assessment',
      description: 'Calculate collision probabilities and provide early warning for potential impacts'
    },
    {
      icon: <TelescopeIcon />,
      title: 'Remote Observation Access',
      description: 'Control telescopes remotely and conduct observations from anywhere in the world'
    },
    {
      icon: <Public />,
      title: 'Global Coordination',
      description: 'Collaborate with international space agencies and research institutions in real-time'
    }
  ];

  // Upcoming astronomical events
  const upcomingEvents = [
    {
      date: 'Dec 14, 2024',
      title: 'Geminids Meteor Shower Peak',
      description: 'Best viewing conditions with up to 150 meteors per hour',
      type: 'Meteor Shower'
    },
    {
      date: 'Dec 25, 2024',
      title: 'Moon at Apogee',
      description: 'Moon reaches farthest point from Earth',
      type: 'Lunar Event'
    },
    {
      date: 'Jan 4, 2025',
      title: 'Quadrantids Meteor Shower',
      description: 'Annual meteor shower with radiant in Boötes',
      type: 'Meteor Shower'
    },
    {
      date: 'Jan 29, 2025',
      title: 'Total Lunar Eclipse',
      description: 'Visible from most of the world, 1 hour duration',
      type: 'Eclipse'
    }
  ];

  return (
    <PageBackground>
      <PageContainer>
        {/* Hero Section */}
        <HeroSection>
          <TaglineBox>
            <Satellite sx={{ fontSize: '1.2rem' }} />
            <TaglineText>Democratizing Space Situational Awareness</TaglineText>
          </TaglineBox>

          <HeroTitle>
            Strengthen Humanity's Shield Against Cosmic Threats
          </HeroTitle>

          <HeroSubtitle>
            Kosmos Connect provides real-time planetary defense monitoring, telescope-as-a-service access, and global space surveillance to protect Earth and advance our understanding of the cosmos.
          </HeroSubtitle>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <PrimaryButton
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/dashboard')}
            >
              Access Dashboard
            </PrimaryButton>
            <SecondaryButton
              size="large"
              variant="outlined"
              onClick={() => navigate('/space-science')}
            >
              Learn More
            </SecondaryButton>
            <SecondaryButton
              size="large"
              variant="outlined"
              onClick={() => navigate('/vr-experience')}
            >
              Try Demo
            </SecondaryButton>
          </Stack>

          <div style={{ width: '100%', maxWidth: '700px' }}>
            <SearchBar
              fullWidth
              placeholder="Search threats, observations, telescopes, or data..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                  </InputAdornment>
                )
              }}
            />
          </div>
        </HeroSection>

        {/* Live Status Strip */}
        <LiveStatusStrip>
          <StatusItem>
            <SignalCellularAlt sx={{ color: '#00B4D8', fontSize: '1.2rem' }} />
            <div>
              <StatusLabel>Constellation Health</StatusLabel>
              <StatusValue>Phase-0: Sim + Partner Feeds</StatusValue>
            </div>
          </StatusItem>
          <StatusItem>
            <Cloud sx={{ color: '#00B4D8', fontSize: '1.2rem' }} />
            <div>
              <StatusLabel>Next Downlink Window</StatusLabel>
              <StatusValue>2024-12-14 14:32 UTC</StatusValue>
            </div>
          </StatusItem>
          <StatusItem>
            <Notifications sx={{ color: '#00B4D8', fontSize: '1.2rem' }} />
            <div>
              <StatusLabel>Current ToO</StatusLabel>
              <StatusValue>Asteroid 2024 XY - Priority High</StatusValue>
            </div>
          </StatusItem>
        </LiveStatusStrip>

        {/* Statistics Section */}
        <Grid container spacing={3} sx={{ mb: 8, mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatBox>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Continuous Monitoring</StatLabel>
            </StatBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatBox>
              <StatNumber>150+</StatNumber>
              <StatLabel>Observation Stations</StatLabel>
            </StatBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatBox>
              <StatNumber>1M+</StatNumber>
              <StatLabel>Objects Tracked</StatLabel>
            </StatBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatBox>
              <StatNumber>{'<5min'}</StatNumber>
              <StatLabel>Alert Response Time</StatLabel>
            </StatBox>
          </Grid>
        </Grid>

        {/* Features Section */}
        <div style={{ marginBottom: '64px' }}>
          <SectionTitle>Our Capabilities</SectionTitle>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                  <Button
                    variant="text"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: '#00B4D8',
                      fontWeight: 600,
                      justifyContent: 'flex-start',
                      padding: 0,
                      '&:hover': {
                        background: 'transparent',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    Explore
                  </Button>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </div>

        {/* Planetary Defense Section */}
        <div style={{ marginBottom: '64px', padding: '32px', background: 'rgba(20, 30, 80, 0.4)', borderRadius: '16px', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <GradientText variant="h4" sx={{ mb: 2 }}>
                Global Planetary Defense
              </GradientText>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: 1.8, mb: 3 }}>
                Our advanced planetary defense system continuously monitors near-Earth objects, asteroids, and comets. We provide real-time threat assessment and early warning capabilities to protect our planet.
              </Typography>
              <PrimaryButton onClick={() => navigate('/mission-control')}>
                View Threat Assessment
              </PrimaryButton>
            </Grid>
            <Grid item xs={12} md={6}>
              {capabilities.map((cap, index) => (
                <CapabilityItem key={index}>
                  <CapabilityIcon>{cap.icon}</CapabilityIcon>
                  <CapabilityText>
                    <CapabilityTitle>{cap.title}</CapabilityTitle>
                    <CapabilityDescription>{cap.description}</CapabilityDescription>
                  </CapabilityText>
                </CapabilityItem>
              ))}
            </Grid>
          </Grid>
        </div>

        {/* Telescope as a Service Section */}
        <div style={{ marginBottom: '64px', padding: '32px', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <CapabilityItem>
                  <CapabilityIcon><TelescopeIcon /></CapabilityIcon>
                  <CapabilityText>
                    <CapabilityTitle>Professional-Grade Instruments</CapabilityTitle>
                    <CapabilityDescription>Access world-class telescopes and spectroscopy equipment remotely</CapabilityDescription>
                  </CapabilityText>
                </CapabilityItem>
                <CapabilityItem>
                  <CapabilityIcon><Public /></CapabilityIcon>
                  <CapabilityText>
                    <CapabilityTitle>Global Network</CapabilityTitle>
                    <CapabilityDescription>150+ observation stations across all continents for optimal coverage</CapabilityDescription>
                  </CapabilityText>
                </CapabilityItem>
                <CapabilityItem>
                  <CapabilityIcon><Speed /></CapabilityIcon>
                  <CapabilityText>
                    <CapabilityTitle>Instant Access</CapabilityTitle>
                    <CapabilityDescription>Book and control telescopes with minimal latency from anywhere</CapabilityDescription>
                  </CapabilityText>
                </CapabilityItem>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <GradientText variant="h4" sx={{ mb: 2 }}>
                Telescope as a Service
              </GradientText>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: 1.8, mb: 3 }}>
                Democratizing access to professional astronomy equipment. Whether you're a researcher, educator, or enthusiast, control powerful telescopes globally and conduct observations without geographical limitations.
              </Typography>
              <PrimaryButton onClick={() => navigate('/space-science')}>
                Book a Telescope
              </PrimaryButton>
            </Grid>
          </Grid>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <SectionTitle>Upcoming Astronomical Events</SectionTitle>
          <Grid container spacing={3}>
            {upcomingEvents.map((event, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <EventCard>
                  <EventDate>{event.date}</EventDate>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                  <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={event.type}
                      size="small"
                      sx={{
                        background: 'rgba(0, 180, 216, 0.2)',
                        color: '#00B4D8',
                        fontWeight: 600
                      }}
                    />
                    <AddToCalendarButton
                      size="small"
                      startIcon={<AddToPhotos />}
                    >
                      Add
                    </AddToCalendarButton>
                  </Stack>
                </EventCard>
              </Grid>
            ))}
          </Grid>
        </div>

        {/* Call to Action */}
        <CTACard>
          <Shield sx={{ fontSize: '3rem', color: '#00B4D8', mb: 2 }} />
          <CTATitle>Join the Planetary Defense Initiative</CTATitle>
          <CTADescription>
            Become part of humanity's collective effort to monitor and protect our planet from cosmic threats while advancing space science and exploration.
          </CTADescription>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <PrimaryButton size="large" onClick={() => navigate('/subscription')}>
              Get Started Today
            </PrimaryButton>
            <SecondaryButton size="large" variant="outlined">
              View Pricing
            </SecondaryButton>
          </Stack>
        </CTACard>
      </PageContainer>
    </PageBackground>
  );
};

export default Home;
