import { FC } from 'react';
import { Box, Typography, Grid, Card, Chip, LinearProgress, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Satellite, SignalCellular4Bar, Storage, Speed, GetApp } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const StyledCard = styled(Card)({
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

const IconContainer = styled(Box)({
  background: 'linear-gradient(45deg, #7B2CBF, #00B4D8)',
  borderRadius: '50%',
  padding: '16px',
  marginBottom: '16px',
  width: 60,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: 30,
    color: '#FFFFFF'
  }
});

const MetricValue = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  fontSize: '2rem',
  marginBottom: '8px'
});

const MetricLabel = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.875rem'
});

const CustomTooltip = styled(Box)({
  background: 'rgba(11, 19, 64, 0.95)',
  border: '1px solid rgba(157, 78, 221, 0.3)',
  borderRadius: '12px',
  padding: '12px',
  boxShadow: '0 8px 32px rgba(157, 78, 221, 0.2)',
  backdropFilter: 'blur(10px)',
});

const ChartTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 24
});

const ChartContainer = styled(Box)({
  height: 400
});

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '1.5rem',
  marginBottom: '20px',
  marginTop: '32px'
});

const HealthCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '12px'
});

const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': { boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)' }
});

const data = [
  { name: '00:00', signal: 65 },
  { name: '04:00', signal: 78 },
  { name: '08:00', signal: 88 },
  { name: '12:00', signal: 82 },
  { name: '16:00', signal: 85 },
  { name: '20:00', signal: 75 },
  { name: '24:00', signal: 70 },
];

const satelliteFleet = [
  { name: 'Kosmos-1', status: 'healthy', power: 85, thermal: 42, adcs: 'nominal', memory: 78, lastContact: '2 min ago' },
  { name: 'Kosmos-2', status: 'healthy', power: 92, thermal: 38, adcs: 'nominal', memory: 65, lastContact: '5 min ago' },
  { name: 'Kosmos-3', status: 'warning', power: 45, thermal: 58, adcs: 'degraded', memory: 88, lastContact: '12 min ago' },
  { name: 'Kosmos-4', status: 'healthy', power: 88, thermal: 40, adcs: 'nominal', memory: 72, lastContact: '3 min ago' }
];

const downlinkStats = [
  { session: 'X-band Session #1', throughput: '2.4 Mbps', duration: '8m 32s', dataSize: '1.2 GB', timestamp: '2024-12-15 14:30' },
  { session: 'X-band Session #2', throughput: '2.1 Mbps', duration: '6m 15s', dataSize: '0.8 GB', timestamp: '2024-12-15 10:15' },
  { session: 'X-band Session #3', throughput: '2.3 Mbps', duration: '7m 45s', dataSize: '1.1 GB', timestamp: '2024-12-14 22:00' }
];

const SatelliteData: FC = () => {
  const healthCardBoxStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 };
  const downlinkBoxStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
  
  return (
    <PageBackground>
      <PageContainer maxWidth="xl">
        <HeaderContainer>
          <GradientText variant="h4">
            Satellite Data Analytics
          </GradientText>
          <SubtitleText variant="subtitle1">
            Monitor and analyze your satellite performance metrics
          </SubtitleText>
        </HeaderContainer>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <StyledCard>
              <IconContainer>
                <Satellite />
              </IconContainer>
              <MetricValue variant="h4">
                4
              </MetricValue>
              <MetricLabel variant="body2">
                Active Satellites
              </MetricLabel>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledCard>
              <IconContainer>
                <SignalCellular4Bar />
              </IconContainer>
              <MetricValue variant="h4">
                98.5%
              </MetricValue>
              <MetricLabel variant="body2">
                Signal Strength
              </MetricLabel>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledCard>
              <IconContainer>
                <Storage />
              </IconContainer>
              <MetricValue variant="h4">
                1.2 TB
              </MetricValue>
              <MetricLabel variant="body2">
                Data Transfer
              </MetricLabel>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledCard>
              <IconContainer>
                <Speed />
              </IconContainer>
              <MetricValue variant="h4">
                45ms
              </MetricValue>
              <MetricLabel variant="body2">
                Latency
              </MetricLabel>
            </StyledCard>
          </Grid>

          {/* Fleet & Health Section */}
          <Grid item xs={12}>
            <SectionTitle>Satellite Fleet & Health Monitoring</SectionTitle>
          </Grid>

          {satelliteFleet.map((sat, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <HealthCard>
                <Box sx={healthCardBoxStyle}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>
                    {sat.name}
                  </Typography>
                  <Chip 
                    label={sat.status === 'healthy' ? '✓ Healthy' : '⚠ Warning'} 
                    sx={{ background: sat.status === 'healthy' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 193, 7, 0.2)', color: sat.status === 'healthy' ? '#4CAF50' : '#FFC107' }} 
                  />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={3}>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', mb: 0.5 }}>Power</Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>{sat.power}%</Typography>
                      <LinearProgress variant="determinate" value={sat.power} sx={{ height: '4px', borderRadius: '2px', mt: 0.5 }} />
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', mb: 0.5 }}>Thermal</Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>{sat.thermal}°C</Typography>
                      <LinearProgress variant="determinate" value={Math.min(sat.thermal, 100)} sx={{ height: '4px', borderRadius: '2px', mt: 0.5 }} />
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', mb: 0.5 }}>ADCS</Typography>
                      <Typography sx={{ color: sat.adcs === 'nominal' ? '#4CAF50' : '#FFC107', fontWeight: 700, fontSize: '0.85rem' }}>{sat.adcs}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', mb: 0.5 }}>Memory</Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>{sat.memory}%</Typography>
                      <LinearProgress variant="determinate" value={sat.memory} sx={{ height: '4px', borderRadius: '2px', mt: 0.5 }} />
                    </Box>
                  </Grid>
                </Grid>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', mt: 2 }}>
                  Last Contact: {sat.lastContact}
                </Typography>
              </HealthCard>
            </Grid>
          ))}

          {/* Downlink Stats Section */}
          <Grid item xs={12}>
            <SectionTitle>X-Band Downlink Sessions</SectionTitle>
          </Grid>

          {downlinkStats.map((session, idx) => (
            <Grid item xs={12} key={idx}>
              <HealthCard>
                <Box sx={downlinkBoxStyle}>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, mb: 0.5 }}>{session.session}</Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Throughput: {session.throughput}</Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Duration: {session.duration}</Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Data: {session.dataSize}</Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>{session.timestamp}</Typography>
                    </Box>
                  </Box>
                  <PrimaryButton size="small" startIcon={<GetApp />} sx={{ ml: 2 }}>Export</PrimaryButton>
                </Box>
              </HealthCard>
            </Grid>
          ))}

          <Grid item xs={12}>
            <StyledCard>
              <ChartTitle variant="h6">
                Signal Strength Over Time
              </ChartTitle>
              <ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(157, 78, 221, 0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.7)" />
                    <YAxis stroke="rgba(255, 255, 255, 0.7)" />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <CustomTooltip>
                              <Typography sx={{ color: '#FFFFFF', mb: 1 }}>
                                {label}
                              </Typography>
                              <Typography sx={{ color: '#00B4D8' }}>
                                Signal: {payload[0].value}%
                              </Typography>
                            </CustomTooltip>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="signal" 
                      stroke="url(#colorGradient)"
                      strokeWidth={3}
                      dot={{ 
                        fill: '#9D4EDD',
                        stroke: '#FFFFFF',
                        strokeWidth: 2,
                        r: 6,
                      }}
                      activeDot={{
                        fill: '#00B4D8',
                        stroke: '#FFFFFF',
                        strokeWidth: 2,
                        r: 8,
                      }}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#9D4EDD" />
                        <stop offset="100%" stopColor="#00B4D8" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </StyledCard>
          </Grid>
        </Grid>
      </PageContainer>
    </PageBackground>
  );
};

export default SatelliteData;
