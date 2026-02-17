import React from 'react';
import { Slider, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlayArrow, Pause, FastRewind, FastForward } from '@mui/icons-material';

interface TimelineControlsProps {
  timeRange: {
    start: number;
    end: number;
  };
  onTimeRangeChange: (range: { start: number; end: number }) => void;
}

const ControlsContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.shape.borderRadius,
  width: '400px'
}));

const TimelineSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiSlider-thumb': {
    width: 16,
    height: 16,
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0 0 0 8px ${theme.palette.primary.main}26`
    }
  }
}));

const ControlsRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8
});

const StyledTypography = styled(Typography)({
  color: 'white',
  marginRight: 16
});

const TimelineControls: React.FC<TimelineControlsProps> = ({
  timeRange,
  onTimeRangeChange,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playbackSpeed, setPlaybackSpeed] = React.useState(1);

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (multiplier: number) => {
    setPlaybackSpeed(multiplier);
  };

  return (
    <ControlsContainer>
      <ControlsRow>
        <StyledTypography variant="subtitle2">
          Timeline Controls
        </StyledTypography>
        <IconButton size="small" onClick={() => handleSpeedChange(0.5)}>
          <FastRewind />
        </IconButton>
        <IconButton size="small" onClick={handlePlayPause}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton size="small" onClick={() => handleSpeedChange(2)}>
          <FastForward />
        </IconButton>
        <StyledTypography variant="caption">
          {playbackSpeed}x
        </StyledTypography>
      </ControlsRow>

      <TimelineSlider
        value={[timeRange.start, timeRange.end]}
        onChange={(_, newValue) => {
          if (Array.isArray(newValue)) {
            onTimeRangeChange({
              start: newValue[0],
              end: newValue[1]
            });
          }
        }}
        valueLabelDisplay="auto"
        valueLabelFormat={formatTime}
        min={Date.now() - 7 * 24 * 60 * 60 * 1000} // 1 week ago
        max={Date.now()}
      />

      <ControlsRow>
        <StyledTypography variant="caption">
          {formatTime(timeRange.start)}
        </StyledTypography>
        <StyledTypography variant="caption">
          {formatTime(timeRange.end)}
        </StyledTypography>
      </ControlsRow>
    </ControlsContainer>
  );
};

export default TimelineControls;
