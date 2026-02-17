import { FC } from 'react';
import { Box, Typography, Grid, Card, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Schedule, TrendingUp, CheckCircle, Warning, CreditCard } from '@mui/icons-material';
import { LinearProgress } from '@mui/material';

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700
});

const DashboardSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6)
}));

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '1.8rem',
  marginBottom: '24px'
});

const DashboardCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const BookingCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, rgba(157, 78, 221, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0, 180, 216, 0.15)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const CountdownBox = styled(Box)({
  background: 'rgba(0, 180, 216, 0.1)',
  border: '2px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '8px',
  padding: '12px',
  textAlign: 'center',
  marginTop: '8px'
});

const CountdownTime = styled(Typography)({
  color: '#00B4D8',
  fontSize: '1.3rem',
  fontWeight: 800
});

const BookingTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1rem',
  marginBottom: '4px'
});

const BookingMeta = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.85rem',
  marginBottom: '8px'
});

const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)'
  }
});

const SecondaryButton = styled(Button)({
  color: '#00B4D8',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)'
  }
});

const mockBookings = [
  {
    id: 'BK001',
    target: 'Asteroid 2024 XY',
    telescope: 'Keck Observatory',
    date: '2024-12-15',
    time: '14:30 UTC',
    duration: '45 minutes',
    state: 'queued',
    countdown: '2d 3h 15m'
  },
  {
    id: 'BK002',
    target: 'Exoplanet WASP-12b',
    telescope: 'VLT Unit 1',
    date: '2024-12-16',
    time: '22:00 UTC',
    duration: '30 minutes',
    state: 'slewing',
    countdown: '3d 8h 45m'
  },
  {
    id: 'BK003',
    target: 'M31 Galaxy',
    telescope: 'Subaru Telescope',
    date: '2024-12-17',
    time: '18:45 UTC',
    duration: '60 minutes',
    state: 'capturing',
    countdown: '4d 5h 30m'
  }
];

const mockBillingData = {
  balance: '$2,450.00',
  monthlyUsage: 156,
  monthlyLimit: 500,
  usagePercent: 31,
  nextBillingDate: '2024-12-31'
};

const getStateColor = (state: string): 'success' | 'info' | 'warning' | 'error' => {
  switch (state) {
    case 'queued': return 'info';
    case 'slewing': return 'warning';
    case 'capturing': return 'success';
    default: return 'error' as any;
  }
};

const getStateIcon = (state: string) => {
  switch (state) {
    case 'queued': return <Schedule sx={{ fontSize: '1rem' }} />;
    case 'slewing': return <TrendingUp sx={{ fontSize: '1rem' }} />;
    case 'capturing': return <CheckCircle sx={{ fontSize: '1rem' }} />;
    default: return <Warning sx={{ fontSize: '1rem' }} />;
  }
};

const DashboardBookings: FC = () => {
  return (
    <DashboardSection>
      <SectionTitle>My Bookings</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <DashboardCard>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <GradientText variant="h6">Upcoming Windows</GradientText>
              <PrimaryButton size="small" startIcon={<Add />}>
                New Booking
              </PrimaryButton>
            </div>
            {mockBookings.map((booking) => (
              <BookingCard key={booking.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <BookingTitle>{booking.target}</BookingTitle>
                    <BookingMeta>📡 {booking.telescope}</BookingMeta>
                    <BookingMeta>📅 {booking.date} at {booking.time}</BookingMeta>
                    <BookingMeta>⏱️ Duration: {booking.duration}</BookingMeta>
                    <Chip
                      icon={getStateIcon(booking.state)}
                      label={booking.state.charAt(0).toUpperCase() + booking.state.slice(1)}
                      color={getStateColor(booking.state)}
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </div>
                  <CountdownBox>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', mb: 0.5 }}>
                      Starts in
                    </Typography>
                    <CountdownTime>{booking.countdown}</CountdownTime>
                  </CountdownBox>
                </div>
              </BookingCard>
            ))}
          </DashboardCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard>
            <GradientText variant="h6" sx={{ mb: 2 }}>
              Booking Summary
            </GradientText>
            <div style={{ marginBottom: '16px' }}>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 1 }}>
                This Month
              </Typography>
              <LinearProgress
                variant="determinate"
                value={mockBillingData.usagePercent}
                sx={{
                  height: '8px',
                  borderRadius: '4px',
                  background: 'rgba(0, 180, 216, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #9D4EDD 0%, #00B4D8 100%)',
                    borderRadius: '4px'
                  }
                }}
              />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', mt: 1 }}>
                {mockBillingData.monthlyUsage} / {mockBillingData.monthlyLimit} minutes
              </Typography>
            </div>
            <div style={{ marginBottom: '16px', padding: '12px', background: 'rgba(0, 180, 216, 0.05)', borderRadius: '8px' }}>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 0.5 }}>
                Next Billing
              </Typography>
              <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>
                {mockBillingData.nextBillingDate}
              </Typography>
            </div>
            <SecondaryButton fullWidth startIcon={<CreditCard />}>
              View Billing Details
            </SecondaryButton>
          </DashboardCard>
        </Grid>
      </Grid>
    </DashboardSection>
  );
};

export default DashboardBookings;
