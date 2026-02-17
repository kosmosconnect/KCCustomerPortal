import { FC, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  ZoomIn,
  ZoomOut,
  Refresh,
  Download,
  ImageSearch,
  Timeline,
  CompareArrows,
  ArrowForward
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

const ViewerCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  overflow: 'hidden',
  height: '500px',
  position: 'relative'
});

const ViewerCanvas = styled(Box)({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(0, 180, 216, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 3s ease-in-out infinite'
  },
  '@keyframes pulse': {
    '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.5 },
    '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 0.8 }
  }
});

const ToolbarBox = styled(Box)({
  display: 'flex',
  gap: '12px',
  padding: '16px',
  background: 'rgba(0, 180, 216, 0.05)',
  borderRadius: '12px',
  marginBottom: '16px',
  flexWrap: 'wrap'
});

const ControlButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)'
  }
});

const InfoCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15) 0%, rgba(157, 78, 221, 0.1) 100%)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px'
});

const TimeSeriesChart = styled(Box)({
  width: '100%',
  height: '250px',
  background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, rgba(157, 78, 221, 0.05) 100%)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '4px',
  overflow: 'hidden'
});

const ComparisonGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '16px'
});

const ComparisonItem = styled(Card)({
  background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, rgba(157, 78, 221, 0.05) 100%)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  textAlign: 'center'
});

const TabHeaderContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
  marginBottom: '40px'
});

const TabHeader = styled(Card)(() => ({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.15) 0%, rgba(0, 180, 216, 0.1) 100%)',
  border: '2px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '16px',
  padding: '28px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(0, 180, 216, 0.3)',
    borderColor: '#00B4D8',
    background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.25) 0%, rgba(0, 180, 216, 0.15) 100%)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #9D4EDD, #00B4D8)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  '&:hover::before': {
    opacity: 1
  }
}));

const TabHeaderIcon = styled(Box)({
  fontSize: '2.5rem',
  color: '#00B4D8',
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const TabHeaderTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '1.3rem',
  marginBottom: '8px'
});

const TabHeaderDesc = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.9rem',
  marginBottom: '16px',
  lineHeight: '1.5'
});

const TabHeaderAction = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#00B4D8',
  fontWeight: 700,
  fontSize: '0.95rem'
});

// Mock Data
const mockFitsData = {
  filename: 'M31_2024-12-15_optical.fits',
  size: '45.2 MB',
  resolution: '4096 × 4096',
  band: 'Optical (V-band)',
  exposure: '300s',
  date: '2024-12-15 14:32:15 UTC',
  telescope: 'Kosmos-1 Phase-0',
  wcs: 'RA: 00h42m44.3s, Dec: +41°16\'09"'
};

const mockTimeSeries = [
  { time: '00:00', magnitude: 3.2 },
  { time: '04:00', magnitude: 3.5 },
  { time: '08:00', magnitude: 3.8 },
  { time: '12:00', magnitude: 3.6 },
  { time: '16:00', magnitude: 3.3 },
  { time: '20:00', magnitude: 3.1 }
];

const mockComparisonData = [
  { label: 'Optical', value: 3.4, band: 'V-band' },
  { label: 'Infrared', value: 2.8, band: 'J-band' },
  { label: 'UV', value: 4.1, band: 'NUV' }
];

const DataVisualization: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);
  const welcomeSectionStyle = { mb: 4 };
  const gradientTextStyle = { mb: 1 };
  const sectionTitleStyle = { mb: 3 };

  return (
    <PageBackground>
      <PageContainer>
        {/* Welcome Section */}
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={gradientTextStyle}>
              Data Visualization
            </GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Explore FITS data, analyze time-series, and compare multi-band observations
            </Typography>
          </Box>
        </DashboardSection>

        {/* Prominent Tab Headers */}
        <DashboardSection>
          <SectionTitle sx={sectionTitleStyle}>Choose Your Visualization</SectionTitle>
          <TabHeaderContainer>
            <TabHeader onClick={() => setActiveTab(0)}>
              <TabHeaderIcon>
                <ImageSearch sx={{ fontSize: '2.5rem' }} />
              </TabHeaderIcon>
              <TabHeaderTitle>FITS Viewer</TabHeaderTitle>
              <TabHeaderDesc>
                Explore FITS image data with zoom controls, WCS metadata, and detailed image information
              </TabHeaderDesc>
              <TabHeaderAction>
                View <ArrowForward sx={{ fontSize: '1rem' }} />
              </TabHeaderAction>
            </TabHeader>

            <TabHeader onClick={() => setActiveTab(1)}>
              <TabHeaderIcon>
                <Timeline sx={{ fontSize: '2.5rem' }} />
              </TabHeaderIcon>
              <TabHeaderTitle>Time-Series Analysis</TabHeaderTitle>
              <TabHeaderDesc>
                Analyze light curves and temporal variations in your astronomical data
              </TabHeaderDesc>
              <TabHeaderAction>
                Analyze <ArrowForward sx={{ fontSize: '1rem' }} />
              </TabHeaderAction>
            </TabHeader>

            <TabHeader onClick={() => setActiveTab(2)}>
              <TabHeaderIcon>
                <CompareArrows sx={{ fontSize: '2.5rem' }} />
              </TabHeaderIcon>
              <TabHeaderTitle>Compare Mode</TabHeaderTitle>
              <TabHeaderDesc>
                Compare multi-band observations side-by-side (Optical, Infrared, UV)
              </TabHeaderDesc>
              <TabHeaderAction>
                Compare <ArrowForward sx={{ fontSize: '1rem' }} />
              </TabHeaderAction>
            </TabHeader>
          </TabHeaderContainer>
        </DashboardSection>

        {/* FITS Viewer Tab */}
        {activeTab === 0 && (
          <DashboardSection>
            <SectionTitle>FITS Image Viewer</SectionTitle>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <ViewerCard>
                  <ViewerCanvas>
                    <Box sx={{ position: 'absolute', zIndex: 10, textAlign: 'center' }}>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700, mb: 1 }}>
                        FITS Image Preview
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                        {mockFitsData.filename}
                      </Typography>
                    </Box>
                  </ViewerCanvas>
                </ViewerCard>
                <ToolbarBox>
                  <ControlButton size="small" startIcon={<ZoomIn />} onClick={() => setZoomLevel(z => Math.min(z + 10, 200))}>
                    Zoom In
                  </ControlButton>
                  <ControlButton size="small" startIcon={<ZoomOut />} onClick={() => setZoomLevel(z => Math.max(z - 10, 50))}>
                    Zoom Out
                  </ControlButton>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', ml: 'auto', alignSelf: 'center' }}>
                    Zoom: {zoomLevel}%
                  </Typography>
                  <ControlButton size="small" startIcon={<Refresh />}>
                    Reset
                  </ControlButton>
                  <ControlButton size="small" startIcon={<Download />}>
                    Export
                  </ControlButton>
                </ToolbarBox>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InfoCard>
                  <GradientText variant="h6" sx={{ mb: 2 }}>
                    FITS Metadata
                  </GradientText>
                  <Stack spacing={1.5}>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        Filename
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {mockFitsData.filename}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        Resolution
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {mockFitsData.resolution}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        Observation Band
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {mockFitsData.band}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        Exposure Time
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {mockFitsData.exposure}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        Observation Date
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {mockFitsData.date}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        WCS Coordinates
                      </Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 600, fontSize: '0.9rem' }}>
                        {mockFitsData.wcs}
                      </Typography>
                    </Box>
                  </Stack>
                </InfoCard>
              </Grid>
            </Grid>
          </DashboardSection>
        )}

        {/* Time-Series Tab */}
        {activeTab === 1 && (
          <DashboardSection>
            <SectionTitle>Time-Series Analysis</SectionTitle>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InfoCard>
                  <GradientText variant="h6" sx={{ mb: 2 }}>
                    Light Curve: M31 Nucleus (24h)
                  </GradientText>
                  <TimeSeriesChart>
                    {mockTimeSeries.map((point, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          flex: 1,
                          height: `${(point.magnitude / 5) * 100}%`,
                          background: 'linear-gradient(180deg, #00B4D8 0%, #9D4EDD 100%)',
                          borderRadius: '4px 4px 0 0',
                          cursor: 'pointer',
                          '&:hover': { opacity: 0.8 }
                        }}
                        title={`${point.time}: ${point.magnitude}m`}
                      />
                    ))}
                  </TimeSeriesChart>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {mockTimeSeries.map((point, idx) => (
                      <Typography key={idx} sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                        {point.time}
                      </Typography>
                    ))}
                  </Box>
                </InfoCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InfoCard>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                    Mean Magnitude
                  </Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '2rem', fontWeight: 800 }}>
                    3.42m
                  </Typography>
                </InfoCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InfoCard>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                    Amplitude
                  </Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '2rem', fontWeight: 800 }}>
                    0.7m
                  </Typography>
                </InfoCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InfoCard>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                    Period
                  </Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '2rem', fontWeight: 800 }}>
                    12.4h
                  </Typography>
                </InfoCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InfoCard>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                    Data Points
                  </Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '2rem', fontWeight: 800 }}>
                    2,847
                  </Typography>
                </InfoCard>
              </Grid>
            </Grid>
          </DashboardSection>
        )}

        {/* Compare Mode Tab */}
        {activeTab === 2 && (
          <DashboardSection>
            <SectionTitle>Multi-Band Comparison</SectionTitle>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InfoCard>
                  <GradientText variant="h6" sx={{ mb: 3 }}>
                    Compare Observations Across Bands
                  </GradientText>
                  <ComparisonGrid>
                    {mockComparisonData.map((item, idx) => (
                      <ComparisonItem key={idx}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', mb: 1 }}>
                          {item.label}
                        </Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '2rem', fontWeight: 800, mb: 1 }}>
                          {item.value}m
                        </Typography>
                        <Chip
                          label={item.band}
                          size="small"
                          sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }}
                        />
                        <Box sx={{ mt: 2, height: '150px', background: 'rgba(0, 180, 216, 0.05)', borderRadius: '8px' }} />
                      </ComparisonItem>
                    ))}
                  </ComparisonGrid>
                </InfoCard>
              </Grid>
              <Grid item xs={12}>
                <InfoCard>
                  <GradientText variant="h6" sx={{ mb: 2 }}>
                    Analysis Results
                  </GradientText>
                  <Stack spacing={1.5}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Color Index (V-J)
                      </Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>
                        0.6 ± 0.1
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Spectral Type
                      </Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>
                        G2V (Solar-like)
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Extinction (Av)
                      </Typography>
                      <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>
                        0.12 mag
                      </Typography>
                    </Box>
                  </Stack>
                </InfoCard>
              </Grid>
            </Grid>
          </DashboardSection>
        )}
      </PageContainer>
    </PageBackground>
  );
};

export default DataVisualization;
