import { FC } from 'react';
import { Box, Typography, Grid, Card, Button, Stack, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Download } from '@mui/icons-material';

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

const SecondaryButton = styled(Button)({
  color: '#00B4D8',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)'
  }
});

const mockBillingData = {
  balance: '$2,450.00',
  monthlyUsage: 156,
  monthlyLimit: 500,
  usagePercent: 31
};

const DashboardBilling: FC = () => {
  return (
    <DashboardSection>
      <SectionTitle>Minutes & Billing</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DashboardCard>
            <GradientText variant="h6" sx={{ mb: 2 }}>
              Account Balance
            </GradientText>
            <Box sx={{ mb: 3, p: 2, background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15) 0%, rgba(157, 78, 221, 0.1) 100%)', borderRadius: '12px' }}>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', mb: 1 }}>
                Current Balance
              </Typography>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#00B4D8' }}>
                {mockBillingData.balance}
              </Typography>
            </Box>
            <Stack spacing={1}>
              <SecondaryButton fullWidth>Add Funds</SecondaryButton>
              <SecondaryButton fullWidth>View Purchase History</SecondaryButton>
            </Stack>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <DashboardCard>
            <GradientText variant="h6" sx={{ mb: 2 }}>
              Usage This Month
            </GradientText>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                  Minutes Used
                </Typography>
                <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>
                  {mockBillingData.usagePercent}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={mockBillingData.usagePercent}
                sx={{
                  height: '10px',
                  borderRadius: '5px',
                  background: 'rgba(0, 180, 216, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #9D4EDD 0%, #00B4D8 100%)',
                    borderRadius: '5px'
                  }
                }}
              />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', mt: 1 }}>
                {mockBillingData.monthlyUsage} of {mockBillingData.monthlyLimit} minutes
              </Typography>
            </Box>
            <Stack spacing={1}>
              <SecondaryButton fullWidth startIcon={<Download />}>
                Download Invoice (GST)
              </SecondaryButton>
              <SecondaryButton fullWidth>Upgrade Plan</SecondaryButton>
            </Stack>
          </DashboardCard>
        </Grid>
      </Grid>
    </DashboardSection>
  );
};

export default DashboardBilling;
