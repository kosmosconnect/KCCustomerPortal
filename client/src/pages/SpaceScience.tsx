import { FC, useState } from 'react';
import { Box, Typography, Grid, Card, Button, Chip, Dialog, DialogTitle, DialogContent, TextField, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Science, Stars, Biotech, Radar, EventNote, VideoCall, PersonAdd, CalendarToday, LocationOn, Group } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: 16,
  fontWeight: 700
});

const HeaderContainer = styled(Box)({
  marginBottom: 48,
  textAlign: 'center'
});

const SubtitleText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '1.1rem',
  marginTop: 8
});

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  marginBottom: 24,
  marginTop: 40,
  fontSize: '1.8rem'
});

const DiscoveryCard = styled(Card)({
  background: 'rgba(11, 19, 64, 0.7)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(157, 78, 221, 0.2)',
  borderRadius: '16px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(157, 78, 221, 0.25)',
    border: '1px solid rgba(157, 78, 221, 0.4)'
  }
});

const DiscoveryImage = styled(Box)({
  width: '100%',
  height: 240,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, transparent 0%, rgba(11, 19, 64, 0.8) 100%)'
  }
});

const DateBadge = styled(Box)({
  position: 'absolute',
  top: 16,
  right: 16,
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  padding: '6px 14px',
  borderRadius: '12px',
  fontSize: '0.85rem',
  fontWeight: 600,
  backdropFilter: 'blur(4px)',
  zIndex: 2
});

const ContentContainer = styled(Box)({
  padding: '20px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
});

const TitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: 12,
  gap: 12
});

const StyledIcon = styled(Box)({
  color: '#00B4D8',
  fontSize: '1.8rem',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0
});

const DiscoveryTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1.1rem'
});

const DiscoveryDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.75)',
  fontSize: '0.95rem',
  lineHeight: 1.5,
  marginBottom: 12,
  flex: 1
});

const EventCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.15) 0%, rgba(0, 180, 216, 0.1) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(0, 180, 216, 0.25)',
    border: '1px solid rgba(0, 180, 216, 0.5)'
  }
});

const EventHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 16
});

const EventIcon = styled(Box)({
  width: 50,
  height: 50,
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  fontSize: '1.5rem'
});

const EventTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1.15rem'
});

const EventDetail = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.9rem',
  marginBottom: 8
});

const EventDetailIcon = styled(Box)({
  color: '#00B4D8',
  display: 'flex',
  alignItems: 'center'
});

const EventDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.75)',
  fontSize: '0.95rem',
  marginBottom: 16,
  lineHeight: 1.5,
  flex: 1
});

const ActionButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  padding: '10px 20px',
  borderRadius: '10px',
  textTransform: 'none',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 20px rgba(157, 78, 221, 0.3)',
    transform: 'translateY(-2px)'
  }
});

const CategoryChip = styled(Chip)({
  background: 'rgba(0, 180, 216, 0.15)',
  border: '1px solid rgba(0, 180, 216, 0.3)',
  color: '#00B4D8',
  fontWeight: 600,
  '& .MuiChip-deleteIcon': {
    color: '#00B4D8'
  }
});

// ============================================================================
// TYPES & DATA
// ============================================================================

interface Discovery {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  date: string;
  category: string;
}

interface AstronomyEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  type: 'Live Watch' | 'Workshop' | 'Seminar' | 'Registration';
  icon: React.ReactNode;
}

const discoveries: Discovery[] = [
  {
    id: 1,
    title: 'Exoplanet Analysis',
    description: 'Discovery of a potentially habitable exoplanet in the Kepler-186 system with Earth-like conditions.',
    image: '/images/space1.jpg',
    icon: <Stars />,
    date: 'Mar 15, 2025',
    category: 'Exoplanets'
  },
  {
    id: 2,
    title: 'Quantum Propulsion',
    description: 'Breakthrough in quantum propulsion technology enabling faster interstellar travel capabilities.',
    image: '/images/space2.jpg',
    icon: <Science />,
    date: 'Apr 2, 2025',
    category: 'Technology'
  },
  {
    id: 3,
    title: 'Space Biology',
    description: 'New findings in microbial adaptation to space environments and cosmic radiation resistance.',
    image: '/images/space3.jpg',
    icon: <Biotech />,
    date: 'Apr 10, 2025',
    category: 'Biology'
  },
  {
    id: 4,
    title: 'Deep Space Signals',
    description: 'Detection of unusual radio signals from the Andromeda galaxy requiring further analysis.',
    image: '/images/photo-1446776811953-b23d57bd21aa.jpg',
    icon: <Radar />,
    date: 'Apr 15, 2025',
    category: 'Astronomy'
  }
];

const astronomyEvents: AstronomyEvent[] = [
  {
    id: 1,
    title: 'Lunar Eclipse Live Watch',
    description: 'Join us for a spectacular live observation of the total lunar eclipse with expert commentary.',
    date: 'May 5, 2025',
    time: '8:00 PM UTC',
    location: 'Virtual Observatory',
    attendees: 2543,
    type: 'Live Watch',
    icon: <VideoCall />
  },
  {
    id: 2,
    title: 'Astronomy Fundamentals Workshop',
    description: 'Learn the basics of astronomy, constellation identification, and telescope usage from experts.',
    date: 'May 12, 2025',
    time: '6:00 PM UTC',
    location: 'Online Classroom',
    attendees: 1205,
    type: 'Workshop',
    icon: <EventNote />
  },
  {
    id: 3,
    title: 'Meteor Shower Observation Event',
    description: 'Experience the Eta Aquariids meteor shower with live guidance and real-time observations.',
    date: 'May 20, 2025',
    time: '10:00 PM UTC',
    location: 'Global Virtual Event',
    attendees: 3891,
    type: 'Live Watch',
    icon: <Stars />
  },
  {
    id: 4,
    title: 'Advanced Astrophotography Seminar',
    description: 'Master techniques for capturing stunning astronomical photographs with professional equipment.',
    date: 'May 28, 2025',
    time: '7:00 PM UTC',
    location: 'Expert Session',
    attendees: 856,
    type: 'Seminar',
    icon: <Science />
  }
];

// ============================================================================
// COMPONENTS
// ============================================================================

const DiscoveryCardComponent: FC<{ discovery: Discovery }> = ({ discovery }) => {
  return (
    <DiscoveryCard>
      <DiscoveryImage style={{ backgroundImage: `url(${discovery.image})` }}>
        <DateBadge>{discovery.date}</DateBadge>
      </DiscoveryImage>
      <ContentContainer>
        <TitleContainer>
          <StyledIcon>{discovery.icon}</StyledIcon>
          <Box>
            <DiscoveryTitle>{discovery.title}</DiscoveryTitle>
            <CategoryChip label={discovery.category} size="small" />
          </Box>
        </TitleContainer>
        <DiscoveryDescription>{discovery.description}</DiscoveryDescription>
      </ContentContainer>
    </DiscoveryCard>
  );
};

const EventCardComponent: FC<{ event: AstronomyEvent; onRegister: () => void }> = ({ event, onRegister }) => {
  const iconStyle = { fontSize: '1rem' };

  return (
    <EventCard>
      <EventHeader>
        <EventIcon>{event.icon}</EventIcon>
        <Box>
          <EventTitle>{event.title}</EventTitle>
          <CategoryChip label={event.type} size="small" />
        </Box>
      </EventHeader>
      <EventDetail>
        <EventDetailIcon><CalendarToday sx={iconStyle} /></EventDetailIcon>
        {event.date} • {event.time}
      </EventDetail>
      <EventDetail>
        <EventDetailIcon><LocationOn sx={iconStyle} /></EventDetailIcon>
        {event.location}
      </EventDetail>
      <EventDetail>
        <EventDetailIcon><Group sx={iconStyle} /></EventDetailIcon>
        {event.attendees.toLocaleString()} registered
      </EventDetail>
      <EventDescription>{event.description}</EventDescription>
      <ActionButton
        fullWidth
        startIcon={<PersonAdd />}
        onClick={onRegister}
      >
        Register Now
      </ActionButton>
    </EventCard>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const SpaceScience: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AstronomyEvent | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegisterClick = (event: AstronomyEvent) => {
    setSelectedEvent(event);
    setOpenDialog(true);
    setRegistrationSuccess(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitRegistration = () => {
    if (formData.name && formData.email && formData.phone) {
      setRegistrationSuccess(true);
      setTimeout(() => {
        setOpenDialog(false);
        setFormData({ name: '', email: '', phone: '' });
      }, 2000);
    }
  };

  return (
    <PageBackground>
      <PageContainer maxWidth="xl">
        {/* Header */}
        <HeaderContainer>
          <GradientText variant="h3">
            Space Science & Astronomy
          </GradientText>
          <SubtitleText variant="body1">
            Explore the cosmos with cutting-edge discoveries, live astronomical events, and educational workshops
          </SubtitleText>
        </HeaderContainer>

        {/* Latest Discoveries Section */}
        <SectionTitle>Latest Discoveries</SectionTitle>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {discoveries.map(discovery => (
            <Grid item xs={12} sm={6} md={3} key={discovery.id}>
              <DiscoveryCardComponent discovery={discovery} />
            </Grid>
          ))}
        </Grid>

        {/* Astronomy Events Section */}
        <SectionTitle>Upcoming Astronomy Events</SectionTitle>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {astronomyEvents.map(event => (
            <Grid item xs={12} sm={6} md={3} key={event.id}>
              <EventCardComponent
                event={event}
                onRegister={() => handleRegisterClick(event)}
              />
            </Grid>
          ))}
        </Grid>

        {/* About Space Science */}
        <Box sx={{ mt: 8, mb: 4, p: 3, background: 'rgba(20, 30, 80, 0.4)', borderRadius: '16px', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
          <GradientText variant="h5">About Our Space Science Program</GradientText>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8 }} variant="body1">
            Kosmos Connect brings together astronomy enthusiasts, scientists, and space explorers from around the world. 
            Our platform provides real-time access to astronomical events, groundbreaking discoveries, and interactive learning opportunities. 
            Whether you're a seasoned astronomer or just beginning your journey into the cosmos, join our community to witness the wonders of space.
          </Typography>
        </Box>
      </PageContainer>

      {/* Registration Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', color: '#FFFFFF', fontWeight: 700 }}>
          Register for {selectedEvent?.title}
        </DialogTitle>
        <DialogContent sx={{ background: 'rgba(20, 30, 80, 0.8)', mt: 2 }}>
          {registrationSuccess ? (
            <Alert severity="success" sx={{ mt: 2 }}>
              Registration successful! Check your email for confirmation details.
            </Alert>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                sx={{
                  '& .MuiOutlinedInput-root': { color: '#FFFFFF' },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255, 255, 255, 0.5)' }
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                sx={{
                  '& .MuiOutlinedInput-root': { color: '#FFFFFF' },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255, 255, 255, 0.5)' }
                }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                sx={{
                  '& .MuiOutlinedInput-root': { color: '#FFFFFF' },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255, 255, 255, 0.5)' }
                }}
              />
              <ActionButton fullWidth onClick={handleSubmitRegistration}>
                Confirm Registration
              </ActionButton>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </PageBackground>
  );
};

export default SpaceScience;
