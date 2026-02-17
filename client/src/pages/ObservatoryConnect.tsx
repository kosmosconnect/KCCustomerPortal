import { FC } from 'react';
import { Box, Typography, Grid, Card, Stack, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Business, EventNote, TrendingUp, People } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 });
const DashboardSection = styled(Box)(({ theme }) => ({ marginBottom: theme.spacing(6) }));
const SectionTitle = styled(Typography)({ color: '#FFFFFF', fontWeight: 800, fontSize: '1.8rem', marginBottom: '24px' });
const DataCard = styled(Card)({ background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0, 180, 216, 0.2)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)' } });
const PrimaryButton = styled(Button)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', color: '#FFFFFF', fontWeight: 700, textTransform: 'none', borderRadius: '8px', '&:hover': { boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)' } });

const ObservatoryConnect: FC = () => {
  const welcomeSectionStyle = { mb: 4 };
  const venues = [
    { name: 'Observatory A', events: 45, revenue: '$12,500', occupancy: 85 },
    { name: 'Observatory B', events: 32, revenue: '$8,900', occupancy: 72 },
    { name: 'Observatory C', events: 28, revenue: '$7,200', occupancy: 65 }
  ];

  return (
    <PageBackground>
      <PageContainer>
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>Observatory Connect</GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Partner portal with white-label scheduler and event toolkit
            </Typography>
          </Box>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Venue Dashboard</SectionTitle>
          <Grid container spacing={3}>
            {venues.map((venue, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <DataCard>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Business sx={{ fontSize: '2rem', color: '#00B4D8' }} />
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 700, flex: 1 }}>{venue.name}</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Events: {venue.events}</Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>Revenue: {venue.revenue}</Typography>
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Occupancy</Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '0.85rem', fontWeight: 700 }}>{venue.occupancy}%</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={venue.occupancy} sx={{ height: '6px', borderRadius: '3px' }} />
                    </Box>
                    <PrimaryButton fullWidth>Manage Venue</PrimaryButton>
                  </Stack>
                </DataCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Event Toolkit</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <EventNote sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Event Posters</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Customizable templates</Typography>
                </Stack>
              </DataCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <People sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Sponsor Tags</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Branding options</Typography>
                </Stack>
              </DataCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <TrendingUp sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>P&L Calculator</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Per-show analytics</Typography>
                </Stack>
              </DataCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DataCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Business sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Bulk Bookings</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>School packages</Typography>
                </Stack>
              </DataCard>
            </Grid>
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>White-Label Scheduler</SectionTitle>
          <DataCard>
            <Box sx={{ height: '300px', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>📅 Calendar Scheduler Interface</Typography>
            </Box>
          </DataCard>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default ObservatoryConnect;
