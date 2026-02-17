import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, Waves, FlareSharp } from '@mui/icons-material';

interface SpectralControlsProps {
  currentLayer: 'visible' | 'infrared' | 'uv';
  onLayerChange: (layer: 'visible' | 'infrared' | 'uv') => void;
}

const ControlsContainer = styled(Box)({
  padding: '8px 16px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  '& .MuiToggleButton-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    '&.Mui-selected': {
      color: '#7C4DFF',
      backgroundColor: 'rgba(124, 77, 255, 0.1)',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },
});

const SpectralControls: React.FC<SpectralControlsProps> = ({
  currentLayer,
  onLayerChange,
}) => {
  return (
    <ControlsContainer>
      <Typography variant="subtitle2" sx={{ color: 'white', mb: 1 }}>
        Spectral View
      </Typography>
      <StyledToggleButtonGroup
        value={currentLayer}
        exclusive
        onChange={(_, value) => value && onLayerChange(value)}
        size="small"
      >
        <ToggleButton value="visible">
          <Visibility sx={{ mr: 1 }} />
          Visible
        </ToggleButton>
        <ToggleButton value="infrared">
          <Waves sx={{ mr: 1 }} />
          Infrared
        </ToggleButton>
        <ToggleButton value="uv">
          <FlareSharp sx={{ mr: 1 }} />
          UV
        </ToggleButton>
      </StyledToggleButtonGroup>
    </ControlsContainer>
  );
};

export default SpectralControls;
