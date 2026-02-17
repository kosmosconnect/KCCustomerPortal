import { FC } from 'react';
import { Box, Typography, Grid, Card, Stack, Button, Slider, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FilterList, Bolt } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 });
const DashboardSection = styled(Box)(({ theme }) => ({ marginBottom: theme.spacing(6) }));
const SectionTitle = styled(Typography)({ color: '#FFFFFF', fontWeight: 800, fontSize: '1.8rem', marginBottom: '24px' });
const FeatureCard = styled(Card)({ background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0, 180, 216, 0.2)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)' } });
const PrimaryButton = styled(Button)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', color: '#FFFFFF', fontWeight: 700, textTransform: 'none', borderRadius: '8px', '&:hover': { boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)' } });

const EnhancedFeatures: FC = () => {
  const welcomeSectionStyle = { mb: 4 };

  return (
    <PageBackground>
      <PageContainer>
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>Phase-Next Enhancements</GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Advanced filtering, real-time updates, and performance optimizations
            </Typography>
          </Box>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Advanced Filtering</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FeatureCard>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FilterList sx={{ fontSize: '2rem', color: '#00B4D8' }} />
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, flex: 1 }}>Multi-Criteria Filter</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>Filter by Category</Typography>
                    <Select fullWidth size="small" defaultValue="all" sx={{ color: '#FFFFFF', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 180, 216, 0.3)' } }}>
                      <MenuItem value="all">All Categories</MenuItem>
                      <MenuItem value="telescope">Telescopes</MenuItem>
                      <MenuItem value="data">Datasets</MenuItem>
                      <MenuItem value="service">Services</MenuItem>
                    </Select>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>Price Range</Typography>
                    <Slider defaultValue={[1000, 50000]} min={0} max={100000} sx={{ color: '#00B4D8' }} />
                  </Box>
                </Stack>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureCard>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Bolt sx={{ fontSize: '2rem', color: '#00B4D8' }} />
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, flex: 1 }}>Smart Recommendations</Typography>
                  </Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    AI-powered suggestions based on your usage patterns and preferences
                  </Typography>
                  <Box sx={{ padding: '12px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '8px' }}>
                    <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.9rem' }}>✓ Recommended for you</Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Based on 15 similar users</Typography>
                  </Box>
                  <PrimaryButton fullWidth>View Recommendations</PrimaryButton>
                </Stack>
              </FeatureCard>
            </Grid>
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Real-Time Updates</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Live Notifications</Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '1.5rem', fontWeight: 800 }}>✓ Active</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>WebSocket connected</Typography>
                </Stack>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Data Sync</Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '1.5rem', fontWeight: 800 }}>2.3s</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Average latency</Typography>
                </Stack>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Cache Status</Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '1.5rem', fontWeight: 800 }}>✓ Optimized</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>67% hit rate</Typography>
                </Stack>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Sync Frequency</Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '1.5rem', fontWeight: 800 }}>5s</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Configurable</Typography>
                </Stack>
              </FeatureCard>
            </Grid>
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Performance Metrics</SectionTitle>
          <FeatureCard>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>Page Load Time</Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '1.8rem', fontWeight: 800 }}>1.2s</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>API Response</Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '1.8rem', fontWeight: 800 }}>142ms</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>Memory Usage</Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '1.8rem', fontWeight: 800 }}>45MB</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>Uptime</Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '1.8rem', fontWeight: 800 }}>99.98%</Typography>
                </Box>
              </Grid>
            </Grid>
          </FeatureCard>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default EnhancedFeatures;
