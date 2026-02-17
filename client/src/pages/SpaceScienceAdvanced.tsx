import { FC } from 'react';
import { Box, Typography, Grid, Card, Stack, Button, LinearProgress, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { School, EmojiEvents } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 });
const DashboardSection = styled(Box)(({ theme }) => ({ marginBottom: theme.spacing(6) }));
const SectionTitle = styled(Typography)({ color: '#FFFFFF', fontWeight: 800, fontSize: '1.8rem', marginBottom: '24px' });
const DataCard = styled(Card)({ background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0, 180, 216, 0.2)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)' } });
const PrimaryButton = styled(Button)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', color: '#FFFFFF', fontWeight: 700, textTransform: 'none', borderRadius: '8px', '&:hover': { boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)' } });

const SpaceScienceAdvanced: FC = () => {
  const welcomeSectionStyle = { mb: 4 };
  const lessons = [
    { title: 'Exoplanet Transit Method', progress: 75, students: 1250 },
    { title: 'Variable Star Classification', progress: 60, students: 890 },
    { title: 'Galaxy Morphology', progress: 45, students: 650 }
  ];

  return (
    <PageBackground>
      <PageContainer>
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>Space Science Phase-Next</GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>Lesson kits, citizen-science, and educational programs</Typography>
          </Box>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Lesson Kits</SectionTitle>
          <Grid container spacing={3}>
            {lessons.map((lesson, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <DataCard>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <School sx={{ fontSize: '2rem', color: '#00B4D8' }} />
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 700, flex: 1 }}>{lesson.title}</Typography>
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Progress</Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '0.85rem', fontWeight: 700 }}>{lesson.progress}%</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={lesson.progress} sx={{ height: '6px', borderRadius: '3px' }} />
                    </Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>{lesson.students} students enrolled</Typography>
                    <PrimaryButton fullWidth>Start Lesson</PrimaryButton>
                  </Stack>
                </DataCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Citizen-Science Leaderboard</SectionTitle>
          <DataCard>
            <Stack spacing={2}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(0, 180, 216, 0.05)', borderRadius: '8px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmojiEvents sx={{ fontSize: '1.5rem', color: i === 1 ? '#FFD700' : i === 2 ? '#C0C0C0' : '#CD7F32' }} />
                    <Box>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Observer #{i}</Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Classifications: {5000 - i * 500}</Typography>
                    </Box>
                  </Box>
                  <Chip label={`${2500 - i * 250} points`} sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }} />
                </Box>
              ))}
            </Stack>
          </DataCard>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default SpaceScienceAdvanced;
