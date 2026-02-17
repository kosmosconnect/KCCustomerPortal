import { FC, useState } from 'react';
import { Box, Typography, Grid, Card, Stack, Chip, LinearProgress, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Cloud, Bolt, Warning, TrendingUp, Settings } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

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

const DataCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)'
  }
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

const AlertItem = styled(Box)({
  background: 'rgba(244, 67, 54, 0.1)',
  border: '1px solid rgba(244, 67, 54, 0.3)',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const SpaceWeatherWall: FC = () => {
  const [webhookEnabled] = useState(true);
  const welcomeSectionStyle = { mb: 4 };

  const alerts = [
    { title: 'Solar Flare Alert', severity: 'High', time: '2024-12-15 10:30 UTC' },
    { title: 'Geomagnetic Storm Warning', severity: 'Medium', time: '2024-12-15 08:15 UTC' },
    { title: 'Radio Burst Detection', severity: 'Low', time: '2024-12-15 06:45 UTC' }
  ];

  return (
    <PageBackground>
      <PageContainer>
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>
              Space Weather Wall
            </GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Live space weather monitoring, solar data, and webhook management
            </Typography>
          </Box>
        </DashboardSection>

        {/* Live Map & Status */}
        <DashboardSection>
          <SectionTitle>Live Space Weather Map</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <DataCard>
                <Box sx={{ height: '400px', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    🌍 GEO Watchlist Map (Real-time visualization)
                  </Typography>
                </Box>
              </DataCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <DataCard>
                <GradientText variant="h6" sx={{ mb: 2 }}>
                  Current Status
                </GradientText>
                <Stack spacing={2}>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                      Solar Wind Speed
                    </Typography>
                    <Typography sx={{ color: '#00B4D8', fontSize: '1.5rem', fontWeight: 800 }}>
                      425 km/s
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                      Kp Index
                    </Typography>
                    <Typography sx={{ color: '#FFC107', fontSize: '1.5rem', fontWeight: 800 }}>
                      5.2
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                      Feed Latency
                    </Typography>
                    <Typography sx={{ color: '#4CAF50', fontSize: '1.5rem', fontWeight: 800 }}>
                      2.3s
                    </Typography>
                  </Box>
                </Stack>
              </DataCard>
            </Grid>
          </Grid>
        </DashboardSection>

        {/* Solar Data */}
        <DashboardSection>
          <SectionTitle>Solar & Radio Data</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Cloud sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Solar Flux
                  </Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '1.8rem', fontWeight: 800 }}>
                    145 sfu
                  </Typography>
                </Stack>
              </DataCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Bolt sx={{ fontSize: '2.5rem', color: '#FFC107', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Flare Activity
                  </Typography>
                  <Typography sx={{ color: '#FFC107', fontSize: '1.8rem', fontWeight: 800 }}>
                    M2.1
                  </Typography>
                </Stack>
              </DataCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <TrendingUp sx={{ fontSize: '2.5rem', color: '#9D4EDD', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Radio Burst
                  </Typography>
                  <Typography sx={{ color: '#9D4EDD', fontSize: '1.8rem', fontWeight: 800 }}>
                    3 events
                  </Typography>
                </Stack>
              </DataCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Warning sx={{ fontSize: '2.5rem', color: '#F44336', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Alerts
                  </Typography>
                  <Typography sx={{ color: '#F44336', fontSize: '1.8rem', fontWeight: 800 }}>
                    2 active
                  </Typography>
                </Stack>
              </DataCard>
            </Grid>
          </Grid>
        </DashboardSection>

        {/* Alerts */}
        <DashboardSection>
          <SectionTitle>Active Alerts</SectionTitle>
          <DataCard>
            {alerts.map((alert, idx) => (
              <AlertItem key={idx}>
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, mb: 0.5 }}>
                    {alert.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                    {alert.time}
                  </Typography>
                </Box>
                <Chip label={alert.severity} sx={{ background: 'rgba(244, 67, 54, 0.2)', color: '#F44336' }} />
              </AlertItem>
            ))}
          </DataCard>
        </DashboardSection>

        {/* Webhook Manager */}
        <DashboardSection>
          <SectionTitle>Webhook Manager</SectionTitle>
          <DataCard>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, mb: 0.5 }}>
                    Webhook Status
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                    {webhookEnabled ? '✓ Active' : '✗ Inactive'}
                  </Typography>
                </Box>
                <Chip label={webhookEnabled ? 'Enabled' : 'Disabled'} sx={{ background: webhookEnabled ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)', color: webhookEnabled ? '#4CAF50' : '#F44336' }} />
              </Box>
              <Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                  Alert Thresholds
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', mb: 0.5 }}>
                    Kp Index: 5.0+
                  </Typography>
                  <LinearProgress variant="determinate" value={60} sx={{ height: '6px', borderRadius: '3px' }} />
                </Box>
                <Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', mb: 0.5 }}>
                    Solar Flux: 150+ sfu
                  </Typography>
                  <LinearProgress variant="determinate" value={97} sx={{ height: '6px', borderRadius: '3px' }} />
                </Box>
              </Box>
              <PrimaryButton fullWidth startIcon={<Settings />}>
                Configure Webhooks
              </PrimaryButton>
            </Stack>
          </DataCard>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default SpaceWeatherWall;
