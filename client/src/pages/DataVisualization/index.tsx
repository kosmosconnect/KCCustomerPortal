import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CelestialMap from './components/CelestialMap';
import DataInsightsPanel from './components/DataInsightsPanel';
import { CelestialObject } from '../../services/celestialData';
import { getCelestialData } from '../../services/api';

const PageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: '16px',
  padding: '24px',
  background: 'linear-gradient(180deg, #0B1340 0%, #1A237E 100%)',
});

const ContentContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  flex: 1,
  minHeight: 0,
});

const MainSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
  minHeight: 0,
  padding: '16px',
});

const SidePanel = styled(Box)(({ theme }) => ({
  width: 320,
  padding: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.shape.borderRadius,
}));

const DataVisualization: React.FC = () => {
  const [data, setData] = useState<CelestialObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<CelestialObject | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const celestialData = await getCelestialData();
        setData(celestialData);
      } catch (error) {
        console.error('Failed to load celestial data:', error);
      }
    };
    loadData();
  }, []);

  // Simplified props for CelestialMap
  const mapProps = {
    data,
    selectedObject,
    onObjectSelect: setSelectedObject,
    showLabels: true,
    showGrid: true,
    timeRange: {
      start: Date.now() - 24 * 60 * 60 * 1000,
      end: Date.now()
    },
    isComparisonMode: false as const
  };

  return (
    <PageContainer>
      <ContentContainer>
        <MainSection>
          <CelestialMap {...mapProps} />
        </MainSection>
        <SidePanel>
          <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
            Display Settings
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Labels and grid are enabled by default
          </Typography>
         
          <DataInsightsPanel
            selectedObject={selectedObject}
            data={data}
          />
        </SidePanel>
      </ContentContainer>
    </PageContainer>
  );
};

export default DataVisualization;
