import { FC } from 'react';
import { Box, Typography, Grid, Card, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ViewInAr, Visibility, Public, Science } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const HeaderContainer = styled(Box)({
  marginBottom: 32
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: 8,
  fontWeight: 700
});

const SubtitleText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)'
});

const ExperienceCard = styled(Card)({
  background: 'rgba(11, 19, 64, 0.7)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  padding: '32px',
  border: '1px solid rgba(157, 78, 221, 0.2)',
  boxShadow: '0 8px 32px rgba(157, 78, 221, 0.1)',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: '1px solid rgba(157, 78, 221, 0.3)',
    boxShadow: '0 12px 40px rgba(157, 78, 221, 0.2)',
    transform: 'translateY(-4px)'
  }
});

const CardTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 16
});

const CardDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: 24
});

const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16,
  '& svg': {
    fontSize: 32,
    marginRight: 12,
    color: '#9D4EDD'
  }
});

const ExploreButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, rgba(0, 180, 216, 0.8) 100%)',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '12px',
  fontSize: '0.9rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 20px rgba(157, 78, 221, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    background: 'linear-gradient(135deg, #9D4EDD 20%, rgba(0, 180, 216, 0.9) 100%)',
    boxShadow: '0 6px 24px rgba(157, 78, 221, 0.6)',
    transform: 'translateY(-2px)'
  }
});

interface VRExperienceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const experiences: VRExperienceItem[] = [
  {
    title: 'Space Station Tour',
    description: 'Take a guided tour through a virtual International Space Station. Experience life in zero gravity and learn about daily astronaut routines.',
    icon: <ViewInAr />
  },
  {
    title: 'Solar System Explorer',
    description: 'Navigate through our solar system in VR. Visit planets, moons, and asteroids while learning about their unique characteristics.',
    icon: <Public />
  },
  {
    title: 'Satellite Operations',
    description: 'Experience hands-on satellite operations in virtual reality. Learn about orbital mechanics and satellite control systems.',
    icon: <Science />
  },
  {
    title: 'Deep Space Missions',
    description: 'Join virtual deep space missions to explore distant galaxies and cosmic phenomena. Perfect for astronomy enthusiasts.',
    icon: <Visibility />
  }
];

const VRExperience: FC = () => {
  return (
    <PageBackground>
      <PageContainer maxWidth="xl">
        <HeaderContainer>
          <GradientText variant="h4">
            Virtual Reality Experiences
          </GradientText>
          <SubtitleText variant="subtitle1">
            Immerse yourself in space exploration through VR
          </SubtitleText>
        </HeaderContainer>

        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ExperienceCard>
                <IconContainer>
                  {experience.icon}
                  <CardTitle variant="h6">
                    {experience.title}
                  </CardTitle>
                </IconContainer>
                <CardDescription>
                  {experience.description}
                </CardDescription>
                <ExploreButton fullWidth>
                  Start Experience
                </ExploreButton>
              </ExperienceCard>
            </Grid>
          ))}
        </Grid>
      </PageContainer>
    </PageBackground>
  );
};

export default VRExperience;
