import { FC } from 'react';
import { Box, Typography, Grid, Card, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TrendingUp, CheckCircle, Warning } from '@mui/icons-material';

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
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const AlertItem = styled(Box)({
  background: 'rgba(0, 180, 216, 0.05)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '8px',
  padding: '12px',
  marginBottom: '12px',
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-start'
});

const AlertIcon = styled(Box)({
  color: '#00B4D8',
  fontSize: '1.2rem',
  flexShrink: 0
});

const AlertContent = styled(Box)({
  flex: 1
});

const AlertTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '0.9rem',
  marginBottom: '2px'
});

const AlertDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.85rem'
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

const mockAlerts = [
  { id: 'ALT001', type: 'ToO Invite', title: 'Gamma-Ray Burst Alert', description: 'High-priority observation window for GRB 2024-12-10', time: '2 hours ago' },
  { id: 'ALT002', type: 'Webhook', title: 'Dataset Ready', description: 'Your recent observation has been processed', time: '5 hours ago' },
  { id: 'ALT003', type: 'SLA Credit', title: 'Service Credit Applied', description: '50 minutes credit added to your account', time: '1 day ago' }
];

const DashboardAlerts: FC = () => {
  return (
    <DashboardSection>
      <SectionTitle>Alerts Feed</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <DashboardCard>
            <GradientText variant="h6" sx={{ mb: 2 }}>
              Recent Activity
            </GradientText>
            {mockAlerts.map((alert) => (
              <AlertItem key={alert.id}>
                <AlertIcon>
                  {alert.type === 'ToO Invite' && <Warning />}
                  {alert.type === 'Webhook' && <CheckCircle />}
                  {alert.type === 'SLA Credit' && <TrendingUp />}
                </AlertIcon>
                <AlertContent>
                  <AlertTitle>{alert.title}</AlertTitle>
                  <AlertDescription>{alert.description}</AlertDescription>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', mt: 0.5 }}>
                    {alert.time}
                  </Typography>
                </AlertContent>
              </AlertItem>
            ))}
          </DashboardCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard>
            <GradientText variant="h6" sx={{ mb: 2 }}>
              Alert Settings
            </GradientText>
            <Stack spacing={1.5}>
              <Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 0.5 }}>
                  📧 Email Notifications
                </Typography>
                <Chip label="Enabled" color="success" size="small" />
              </Box>
              <Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 0.5 }}>
                  🔔 Webhook Alerts
                </Typography>
                <Chip label="Configured" color="success" size="small" />
              </Box>
              <Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 0.5 }}>
                  ⚡ ToO Invites
                </Typography>
                <Chip label="Active" color="success" size="small" />
              </Box>
              <SecondaryButton fullWidth sx={{ mt: 2 }}>
                Configure Alerts
              </SecondaryButton>
            </Stack>
          </DashboardCard>
        </Grid>
      </Grid>
    </DashboardSection>
  );
};

export default DashboardAlerts;
