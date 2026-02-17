import { FC } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PageBackground, PageContainer } from '../components/common/PageContainer';
import DashboardBookings from '../components/Dashboard/DashboardBookings';
import DashboardBilling from '../components/Dashboard/DashboardBilling';
import DashboardData from '../components/Dashboard/DashboardData';
import DashboardAlerts from '../components/Dashboard/DashboardAlerts';
import DashboardAPI from '../components/Dashboard/DashboardAPI';

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

const StatCard = styled(Box)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.15) 0%, rgba(0, 180, 216, 0.1) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center'
});

const StatValue = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 800,
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '8px'
});

const StatLabel = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '0.9rem',
  fontWeight: 600
});

const Dashboard: FC = () => {
  const welcomeSectionStyle = { mb: 4 };

  return (
    <PageBackground>
      <PageContainer>
        {/* Welcome Section */}
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>
              Welcome Back, Observer
            </GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Your personal command center for telescope bookings, data management, and billing
            </Typography>
          </Box>
        </DashboardSection>

        {/* Quick Stats */}
        <DashboardSection>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <StatValue>3</StatValue>
                <StatLabel>Active Bookings</StatLabel>
              </StatCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <StatValue>156/500</StatValue>
                <StatLabel>Minutes Used</StatLabel>
              </StatCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <StatValue>$2,450</StatValue>
                <StatLabel>Account Balance</StatLabel>
              </StatCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <StatValue>5</StatValue>
                <StatLabel>Recent Datasets</StatLabel>
              </StatCard>
            </Grid>
          </Grid>
        </DashboardSection>

        {/* My Bookings */}
        <DashboardBookings />

        {/* Minutes & Billing */}
        <DashboardBilling />

        {/* Recent Data */}
        <DashboardData />

        {/* Alerts Feed */}
        <DashboardAlerts />

        {/* API & Keys */}
        <DashboardAPI />
      </PageContainer>
    </PageBackground>
  );
};

export default Dashboard;
