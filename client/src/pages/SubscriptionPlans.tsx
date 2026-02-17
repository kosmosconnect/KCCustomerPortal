import { FC, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Check, Star, Rocket, Science } from '@mui/icons-material';

const BackgroundBox = styled(Box)({
  background: 'linear-gradient(135deg, #0B1340 0%, #1A237E 100%)',
  minHeight: '100vh',
  padding: '64px 0'
});

const HeaderContainer = styled(Box)({
  textAlign: 'center',
  marginBottom: 48
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #9D4EDD, #00B4D8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: 16,
  fontWeight: 700
});

const SubtitleText = styled(Typography)({
  color: 'white',
  opacity: 0.8
});

const PlanCard = styled(Card)({
  background: 'rgba(11, 19, 64, 0.7)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(157, 78, 221, 0.2)',
  borderRadius: '16px',
  padding: '32px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(157, 78, 221, 0.15)'
  }
});

const PlanHeader = styled(Box)({
  textAlign: 'center',
  marginBottom: 24
});

const PlanTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 8
});

const PlanPrice = styled(Typography)({
  color: '#9D4EDD',
  fontWeight: 700,
  fontSize: '2.5rem',
  marginBottom: 8
});

const PlanPeriod = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: 24
});

const FeatureList = styled(List)({
  padding: 0,
  marginBottom: 24
});

const FeatureItem = styled(ListItem)({
  padding: '8px 0'
});

const FeatureIcon = styled(ListItemIcon)({
  minWidth: 36,
  color: '#9D4EDD'
});

const FeatureText = styled(ListItemText)({
  '& .MuiListItemText-primary': {
    color: 'rgba(255, 255, 255, 0.9)'
  }
});

const SelectButton = styled(Button)({
  background: 'linear-gradient(45deg, #9D4EDD, #00B4D8)',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    background: 'linear-gradient(45deg, #8B44C4, #00A0C2)'
  }
});

const GridBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 32,
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
}));

const GridItem = styled(Box)({
  width: '100%'
});

interface Plan {
  id: string;
  title: string;
  price: number;
  period: string;
  features: string[];
  icon: React.ReactNode;
}

const plans: Plan[] = [
  {
    id: 'basic',
    title: 'Basic Explorer',
    price: 9.99,
    period: 'per month',
    features: [
      'Basic satellite data access',
      'Standard resolution imagery',
      'Daily updates',
      'Email support'
    ],
    icon: <Star />
  },
  {
    id: 'pro',
    title: 'Pro Navigator',
    price: 29.99,
    period: 'per month',
    features: [
      'Advanced satellite data access',
      'High resolution imagery',
      'Real-time updates',
      'Priority support',
      'Custom data exports'
    ],
    icon: <Rocket />
  },
  {
    id: 'enterprise',
    title: 'Enterprise Mission',
    price: 99.99,
    period: 'per month',
    features: [
      'Full satellite data access',
      'Ultra-high resolution imagery',
      'Real-time updates with alerts',
      '24/7 dedicated support',
      'Custom data exports',
      'API access',
      'Team collaboration tools'
    ],
    icon: <Science />
  }
];

const SubscriptionPlans: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <BackgroundBox>
      <Container maxWidth="lg">
        <HeaderContainer>
          <GradientText variant="h3">
            Choose Your Journey
          </GradientText>
          <SubtitleText variant="h6">
            Select the perfect plan for your space exploration needs
          </SubtitleText>
        </HeaderContainer>

        <GridBox>
          {plans.map((plan) => (
            <GridItem key={plan.id}>
              <PlanCard>
                <PlanHeader>
                  {plan.icon}
                  <PlanTitle variant="h5">
                    {plan.title}
                  </PlanTitle>
                  <PlanPrice variant="h3">
                    ${plan.price}
                  </PlanPrice>
                  <PlanPeriod variant="subtitle1">
                    {plan.period}
                  </PlanPeriod>
                </PlanHeader>

                <FeatureList>
                  {plan.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <FeatureIcon>
                        <Check />
                      </FeatureIcon>
                      <FeatureText primary={feature} />
                    </FeatureItem>
                  ))}
                </FeatureList>

                <SelectButton
                  fullWidth
                  onClick={() => handleSelectPlan(plan.id)}
                  disabled={plan.id === selectedPlan}
                >
                  {plan.id === selectedPlan ? 'Current Plan' : 'Select Plan'}
                </SelectButton>
              </PlanCard>
            </GridItem>
          ))}
        </GridBox>
      </Container>
    </BackgroundBox>
  );
};

export default SubscriptionPlans;
