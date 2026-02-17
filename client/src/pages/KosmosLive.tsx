import { FC } from 'react';
import { Box, Typography, Grid, Card, Stack, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlayArrow, Archive, Visibility } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700
});

const DashboardSection = styled(Box)(({ theme }) => ({ marginBottom: theme.spacing(6) }));
const SectionTitle = styled(Typography)({ color: '#FFFFFF', fontWeight: 800, fontSize: '1.8rem', marginBottom: '24px' });
const DataCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)' }
});

const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': { boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)' }
});

const KosmosLive: FC = () => {
  const welcomeSectionStyle = { mb: 4 };
  const liveStreams: Array<{ title: string; status: string; viewers: number }> = [
    { title: 'Live Observation Feed', status: 'Live', viewers: 1250 },
    { title: 'Telescope Control Panel', status: 'Active', viewers: 890 },
    { title: 'Data Processing Pipeline', status: 'Active', viewers: 450 }
  ];

  return (
    <PageBackground>
      <PageContainer>
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>Kosmos Connect Live 1.0</GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Real-time observation streaming, first light archive, and live data feeds
            </Typography>
          </Box>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Live Streams</SectionTitle>
          <Grid container spacing={3}>
            {liveStreams.map((stream, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <DataCard>
                  <Stack spacing={2}>
                    <Box sx={{ height: '200px', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <PlayArrow sx={{ fontSize: '3rem', color: '#00B4D8', opacity: 0.7 }} />
                    </Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>{stream.title}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label={stream.status} sx={{ background: 'rgba(76, 175, 80, 0.2)', color: '#4CAF50' }} />
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>{stream.viewers} viewers</Typography>
                    </Box>
                    <PrimaryButton fullWidth startIcon={<PlayArrow />}>Watch Live</PrimaryButton>
                  </Stack>
                </DataCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>First Light Archive</SectionTitle>
          <DataCard>
            <Stack spacing={2}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box key={i} sx={{ background: 'rgba(0, 180, 216, 0.1)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <Archive sx={{ fontSize: '2rem', color: '#00B4D8', mb: 1 }} />
                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700 }}>Archive {i}</Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem' }}>2024-12-{10 + i}</Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </DataCard>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>What's in FOV</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DataCard>
                <Box sx={{ height: '300px', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>🔭 Field of View Visualization</Typography>
                </Box>
              </DataCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <DataCard>
                <Stack spacing={2}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>Current Observation</Typography>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Target: M31 Galaxy</Typography>
                    <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>RA: 00h42m44s, Dec: +41°16'09"</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Exposure: 300s</Typography>
                    <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>Band: V-band (Optical)</Typography>
                  </Box>
                  <PrimaryButton fullWidth startIcon={<Visibility />}>Request Target</PrimaryButton>
                </Stack>
              </DataCard>
            </Grid>
          </Grid>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default KosmosLive;
