import { FC, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
  TextField,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Add,
  Info,
  CheckCircle
} from '@mui/icons-material';
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

const ConstraintItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px',
  background: 'rgba(0, 180, 216, 0.05)',
  borderRadius: '8px',
  marginBottom: '8px'
});

const ConstraintIcon = styled(Box)({
  color: '#00B4D8',
  fontSize: '1.2rem',
  flexShrink: 0
});

const ConstraintText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '0.9rem'
});

const QueueItem = styled(Box)({
  background: 'rgba(0, 180, 216, 0.05)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '12px'
});

const QueueTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1rem',
  marginBottom: '4px'
});

const QueueMeta = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.85rem'
});

const SlewPanel = styled(Box)({
  background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15) 0%, rgba(157, 78, 221, 0.1) 100%)',
  border: '1px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '16px'
});

const SlewValue = styled(Typography)({
  color: '#00B4D8',
  fontSize: '1.5rem',
  fontWeight: 800,
  marginBottom: '4px'
});

const SlewLabel = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.85rem'
});

// Mock Data
const mockQueue = [
  { id: 'Q001', target: 'Asteroid 2024 XY', priority: 'High', eta: '2h 15m', tier: 'Researcher', price: '$45' },
  { id: 'Q002', target: 'Exoplanet WASP-12b', priority: 'Normal', eta: '4h 30m', tier: 'Creator', price: '$30' },
  { id: 'Q003', target: 'M31 Galaxy', priority: 'Low', eta: '6h 45m', tier: 'Starter', price: '$20' }
];

const mockPolicies = [
  { title: 'ToO Escalation', description: 'Priority boost: +50% cost for urgent observations' },
  { title: 'Cancellation', description: 'Free cancellation up to 24 hours before window' },
  { title: 'Credits', description: 'SLA credits issued for >30min downtime' }
];

const MissionControl: FC = () => {
  const [selectedTarget, setSelectedTarget] = useState('');
  const welcomeSectionStyle = { mb: 4 };
  const gradientTextStyle = { mb: 1 };

  return (
    <PageBackground>
      <PageContainer>
        {/* Welcome Section */}
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={gradientTextStyle}>
              Mission Control
            </GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Book observations, manage queue, and monitor telescope state in real-time
            </Typography>
          </Box>
        </DashboardSection>

        {/* Booking Wizard */}
        <DashboardSection>
          <SectionTitle>Booking Wizard</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DashboardCard>
                <GradientText variant="h6" sx={{ mb: 2 }}>
                  Create New Observation
                </GradientText>
                <Stack spacing={2}>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 1 }}>
                      Target Selection
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Search catalog or enter coordinates..."
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#FFFFFF',
                          '& fieldset': { borderColor: 'rgba(0, 180, 216, 0.3)' }
                        }
                      }}
                      value={selectedTarget}
                      onChange={(e) => setSelectedTarget(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 1 }}>
                      Observation Band
                    </Typography>
                    <Select
                      fullWidth
                      defaultValue="optical"
                      size="small"
                      sx={{
                        color: '#FFFFFF',
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 180, 216, 0.3)' }
                      }}
                    >
                      <MenuItem value="optical">Optical (400-700nm)</MenuItem>
                      <MenuItem value="infrared">Infrared (700nm-1mm)</MenuItem>
                      <MenuItem value="uv">Ultraviolet (10-400nm)</MenuItem>
                      <MenuItem value="radio">Radio (1mm-1m)</MenuItem>
                    </Select>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 1 }}>
                      Exposure Recipe
                    </Typography>
                    <Select
                      fullWidth
                      defaultValue="standard"
                      size="small"
                      sx={{
                        color: '#FFFFFF',
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 180, 216, 0.3)' }
                      }}
                    >
                      <MenuItem value="standard">Standard (30s exposure)</MenuItem>
                      <MenuItem value="burst">Burst (10 × 5s)</MenuItem>
                      <MenuItem value="long">Long (5min exposure)</MenuItem>
                      <MenuItem value="custom">Custom Recipe</MenuItem>
                    </Select>
                  </Box>
                  <PrimaryButton fullWidth startIcon={<Add />}>
                    Submit Observation Request
                  </PrimaryButton>
                </Stack>
              </DashboardCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <DashboardCard>
                <GradientText variant="h6" sx={{ mb: 2 }}>
                  Constraint Checks
                </GradientText>
                <ConstraintItem>
                  <ConstraintIcon><CheckCircle /></ConstraintIcon>
                  <ConstraintText>✓ Sun avoidance: 45° separation OK</ConstraintText>
                </ConstraintItem>
                <ConstraintItem>
                  <ConstraintIcon><CheckCircle /></ConstraintIcon>
                  <ConstraintText>✓ Moon avoidance: 30° separation OK</ConstraintText>
                </ConstraintItem>
                <ConstraintItem>
                  <ConstraintIcon><CheckCircle /></ConstraintIcon>
                  <ConstraintText>✓ ADCS tilt: Within ±5° limits</ConstraintText>
                </ConstraintItem>
                <ConstraintItem>
                  <ConstraintIcon><CheckCircle /></ConstraintIcon>
                  <ConstraintText>✓ Ground pass: 2024-12-15 14:30-15:15 UTC</ConstraintText>
                </ConstraintItem>
                <ConstraintItem>
                  <ConstraintIcon><Info /></ConstraintIcon>
                  <ConstraintText>ℹ Estimated cost: $45 (Researcher tier)</ConstraintText>
                </ConstraintItem>
              </DashboardCard>
            </Grid>
          </Grid>
        </DashboardSection>

        {/* Queue & Conflicts */}
        <DashboardSection>
          <SectionTitle>Queue & Scheduling</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <DashboardCard>
                <GradientText variant="h6" sx={{ mb: 2 }}>
                  Fair-Share Queue (Next 24 Hours)
                </GradientText>
                {mockQueue.map((item) => (
                  <QueueItem key={item.id}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box sx={{ flex: 1 }}>
                        <QueueTitle>{item.target}</QueueTitle>
                        <QueueMeta>Priority: {item.priority} • ETA: {item.eta}</QueueMeta>
                        <QueueMeta>Tier: {item.tier}</QueueMeta>
                      </Box>
                      <Chip label={item.price} sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }} />
                    </Box>
                  </QueueItem>
                ))}
              </DashboardCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <DashboardCard>
                <GradientText variant="h6" sx={{ mb: 2 }}>
                  Policies & Pricing
                </GradientText>
                {mockPolicies.map((policy, idx) => (
                  <Box key={idx} sx={{ mb: 2 }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>
                      {policy.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>
                      {policy.description}
                    </Typography>
                  </Box>
                ))}
              </DashboardCard>
            </Grid>
          </Grid>
        </DashboardSection>

        {/* Slew & State Panel */}
        <DashboardSection>
          <SectionTitle>Slew & State Panel</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <SlewPanel>
                <SlewLabel>Current ADCS State</SlewLabel>
                <SlewValue>Tracking</SlewValue>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                  Attitude: Stable • Rate: &lt;0.1°/s
                </Typography>
              </SlewPanel>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SlewPanel>
                <SlewLabel>Slew ETA</SlewLabel>
                <SlewValue>2m 34s</SlewValue>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                  Target: Asteroid 2024 XY
                </Typography>
              </SlewPanel>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SlewPanel>
                <SlewLabel>Pointing Error</SlewLabel>
                <SlewValue>0.23°</SlewValue>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                  Within tolerance (&lt;0.5°)
                </Typography>
              </SlewPanel>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SlewPanel>
                <SlewLabel>Next Downlink</SlewLabel>
                <SlewValue>14:32 UTC</SlewValue>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                  Data backlog: 2.3 GB
                </Typography>
              </SlewPanel>
            </Grid>
          </Grid>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default MissionControl;
