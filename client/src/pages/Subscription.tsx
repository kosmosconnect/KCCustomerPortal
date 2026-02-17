import { FC, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Check,
  Star,
  Rocket,
  Science,
  Close,
} from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #9D4EDD, #00B4D8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: 8,
  fontWeight: 700
});

const HeaderContainer = styled(Box)({
  marginBottom: 32
});

const SubtitleText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)'
});

const PageContent = styled(Box)({
  padding: '32px 0'
});

const PlanCard = styled(Card)({
  background: 'rgba(11, 19, 64, 0.7)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(157, 78, 221, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(157, 78, 221, 0.15)'
  }
});

const PlanName = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 8
});

const PlanPrice = styled(Typography)({
  color: '#9D4EDD',
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: 16
});

const PlanDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: 24
});

const FeatureList = styled(List)({
  padding: 0
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
  padding: '10px 24px',
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    background: 'linear-gradient(45deg, #8B44C4, #00A0C2)'
  }
});

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    background: 'rgba(11, 19, 64, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(157, 78, 221, 0.2)',
    borderRadius: '16px',
    color: '#FFFFFF'
  }
});

const DialogCloseButton = styled(IconButton)({
  position: 'absolute',
  right: 8,
  top: 8,
  color: 'rgba(255, 255, 255, 0.7)'
});

const BillingHistorySection = styled(Box)({
  marginTop: 32
});

const BillingHistoryTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 24
});

const BillingFieldLabel = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: 8
});

const BillingFieldValue = styled(Typography)({
  color: '#00B4D8'
});

const BillingGrid = styled(Grid)({
  marginTop: 16
});

const BillingFieldContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
});

interface BillingRecord {
  id: string;
  date: string;
  amount: number;
  status: string;
  plan: string;
}

const subscriptionPlans = [
  {
    id: 'basic',
    name: 'Basic Explorer',
    price: 9.99,
    description: 'Perfect for space enthusiasts starting their journey',
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
    name: 'Pro Navigator',
    price: 29.99,
    description: 'Advanced features for serious space researchers',
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
    name: 'Enterprise Mission',
    price: 99.99,
    description: 'Complete solution for organizations and institutions',
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

const billingHistory: BillingRecord[] = [
  {
    id: 'INV-001',
    date: '2025-01-01',
    amount: 29.99,
    status: 'Paid',
    plan: 'Pro Navigator'
  },
  {
    id: 'INV-002',
    date: '2024-12-01',
    amount: 29.99,
    status: 'Paid',
    plan: 'Pro Navigator'
  },
  {
    id: 'INV-003',
    date: '2024-11-01',
    amount: 9.99,
    status: 'Paid',
    plan: 'Basic Explorer'
  },
];

const Subscription: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [openDialog, setOpenDialog] = useState(false);

  const handlePlanChange = (planId: string) => {
    setSelectedPlan(planId);
    setOpenDialog(true);
  };

  const handleConfirmPlanChange = () => {
    setOpenDialog(false);
  };

  const selectedPlanDetails = subscriptionPlans.find(p => p.id === selectedPlan);

  return (
    <PageBackground>
      <PageContainer>
        <PageContent>
          <HeaderContainer>
            <GradientText variant="h4">
              Subscription Management
            </GradientText>
            <SubtitleText variant="subtitle1">
              Choose the perfect plan for your cosmic journey
            </SubtitleText>
          </HeaderContainer>

          <Grid container spacing={4}>
            {subscriptionPlans.map((plan) => (
              <Grid item xs={12} md={4} key={plan.id}>
                <PlanCard>
                  <PlanName variant="h5">
                    {plan.name}
                  </PlanName>
                  <PlanPrice variant="h3">
                    ${plan.price}
                  </PlanPrice>
                  <PlanDescription variant="body1">
                    {plan.description}
                  </PlanDescription>
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
                    onClick={() => handlePlanChange(plan.id)}
                    disabled={plan.id === selectedPlan}
                  >
                    {plan.id === selectedPlan ? 'Current Plan' : 'Select Plan'}
                  </SelectButton>
                </PlanCard>
              </Grid>
            ))}
          </Grid>

          <BillingHistorySection>
            <BillingHistoryTitle variant="h6">
              Billing History
            </BillingHistoryTitle>
            <PlanCard>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <BillingFieldContainer>
                    <BillingFieldLabel variant="subtitle2">
                      Invoice ID
                    </BillingFieldLabel>
                    <BillingFieldValue variant="body1">
                      {billingHistory[0].id}
                    </BillingFieldValue>
                  </BillingFieldContainer>
                </Grid>
                <Grid item xs={12} md={4}>
                  <BillingFieldContainer>
                    <BillingFieldLabel variant="subtitle2">
                      Date
                    </BillingFieldLabel>
                    <BillingFieldValue variant="body1">
                      {billingHistory[0].date}
                    </BillingFieldValue>
                  </BillingFieldContainer>
                </Grid>
                <Grid item xs={12} md={4}>
                  <BillingFieldContainer>
                    <BillingFieldLabel variant="subtitle2">
                      Plan
                    </BillingFieldLabel>
                    <BillingFieldValue variant="body1">
                      {billingHistory[0].plan}
                    </BillingFieldValue>
                  </BillingFieldContainer>
                </Grid>
              </Grid>
              <BillingGrid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <BillingFieldContainer>
                    <BillingFieldLabel variant="subtitle2">
                      Amount
                    </BillingFieldLabel>
                    <BillingFieldValue variant="body1">
                      ${billingHistory[0].amount}
                    </BillingFieldValue>
                  </BillingFieldContainer>
                </Grid>
                <Grid item xs={12} md={4}>
                  <BillingFieldContainer>
                    <BillingFieldLabel variant="subtitle2">
                      Status
                    </BillingFieldLabel>
                    <BillingFieldValue variant="body1">
                      {billingHistory[0].status}
                    </BillingFieldValue>
                  </BillingFieldContainer>
                </Grid>
              </BillingGrid>
            </PlanCard>
          </BillingHistorySection>
        </PageContent>

        <StyledDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            Confirm Plan Change
            <DialogCloseButton onClick={() => setOpenDialog(false)}>
              <Close />
            </DialogCloseButton>
          </DialogTitle>
          <DialogContent>
            {selectedPlanDetails && (
              <Typography variant="body1">
                You are about to change your subscription plan to {selectedPlanDetails.name}.
                Would you like to proceed with the plan change?
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <SelectButton onClick={handleConfirmPlanChange}>
              Confirm Plan Change
            </SelectButton>
          </DialogActions>
        </StyledDialog>
      </PageContainer>
    </PageBackground>
  );
};

export default Subscription;
