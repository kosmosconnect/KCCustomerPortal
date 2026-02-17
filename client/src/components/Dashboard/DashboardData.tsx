import { FC } from 'react';
import { Box, Typography, Grid, Card, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, Download } from '@mui/icons-material';

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '1.8rem',
  marginBottom: '24px'
});

const DashboardSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6)
}));

const DashboardCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const DatasetThumbnail = styled(Box)({
  width: '100%',
  height: '120px',
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2) 0%, rgba(0, 180, 216, 0.15) 100%)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '12px',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  color: '#00B4D8',
  fontSize: '2rem'
});

const DatasetName = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '0.95rem',
  marginBottom: '4px'
});

const DatasetMeta = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.8rem'
});

const SecondaryButton = styled(Button)({
  color: '#00B4D8',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)'
  }
});

const mockRecentDatasets = [
  { id: 'DS001', name: 'Gaia DR3 Subset', bands: '4 bands', size: '2.3 GB', date: '2024-12-10', icon: '📊' },
  { id: 'DS002', name: 'TESS Sector 67', bands: '2 bands', size: '1.8 GB', date: '2024-12-09', icon: '⭐' },
  { id: 'DS003', name: 'Solar Flare Event', bands: '8 bands', size: '4.1 GB', date: '2024-12-08', icon: '☀️' },
  { id: 'DS004', name: 'Exoplanet Transit', bands: '3 bands', size: '890 MB', date: '2024-12-07', icon: '🪐' },
  { id: 'DS005', name: 'Asteroid Spectrum', bands: '5 bands', size: '1.2 GB', date: '2024-12-06', icon: '🌑' }
];

const DashboardData: FC = () => {
  return (
    <DashboardSection>
      <SectionTitle>Recent Data</SectionTitle>
      <Grid container spacing={3}>
        {mockRecentDatasets.map((dataset) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={dataset.id}>
            <DashboardCard>
              <DatasetThumbnail>{dataset.icon}</DatasetThumbnail>
              <Box sx={{ flex: 1, mb: 1 }}>
                <DatasetName>{dataset.name}</DatasetName>
                <DatasetMeta>{dataset.bands}</DatasetMeta>
                <DatasetMeta>{dataset.size}</DatasetMeta>
                <DatasetMeta>{dataset.date}</DatasetMeta>
              </Box>
              <Stack direction="row" spacing={1}>
                <SecondaryButton size="small" fullWidth startIcon={<Visibility />}>
                  View
                </SecondaryButton>
                <SecondaryButton size="small" fullWidth startIcon={<Download />}>
                  Get
                </SecondaryButton>
              </Stack>
            </DashboardCard>
          </Grid>
        ))}
      </Grid>
    </DashboardSection>
  );
};

export default DashboardData;
