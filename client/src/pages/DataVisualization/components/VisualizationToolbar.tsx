import {
  Toolbar,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  Label as LabelIcon,
  GridOn as GridIcon,
  Compare as CompareIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { CelestialObject } from '../../../services/celestialData';
import type { FC } from 'react';

type CelestialType = CelestialObject['type'] | 'all';

interface VisualizationToolbarProps {
  typeFilter: CelestialType;
  searchQuery: string;
  showLabels: boolean;
  showGrid: boolean;
  onTypeFilterChange: (type: CelestialType) => void;
  onSearchQueryChange: (query: string) => void;
  onToggleLabels: () => void;
  onToggleGrid: () => void;
  onRefresh: () => void;
  onToggleComparison: () => void;
}

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  gap: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  margin: '0',
  padding: '8px 16px',
  minHeight: '64px',
});

const StyledSelect = styled(Select)({
  color: '#fff',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#7C4DFF',
  },
  '& .MuiSelect-icon': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

const SearchField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7C4DFF',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

const StyledIconButton = styled(IconButton)({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.active': {
    backgroundColor: 'rgba(124, 77, 255, 0.2)',
    color: '#7C4DFF',
  },
});

const TypeSelect: FC<{
  value: CelestialType;
  onChange: (value: CelestialType) => void;
}> = ({ value, onChange }) => (
  <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
    <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Type</InputLabel>
    <StyledSelect
      value={value}
      onChange={(e) => onChange(e.target.value as CelestialType)}
      label="Type"
      inputProps={{ 'aria-label': 'Select celestial object type' }}
    >
      <MenuItem value="all">All Types</MenuItem>
      <MenuItem value="star">Stars</MenuItem>
      <MenuItem value="planet">Planets</MenuItem>
      <MenuItem value="moon">Moons</MenuItem>
      <MenuItem value="asteroid">Asteroids</MenuItem>
      <MenuItem value="comet">Comets</MenuItem>
    </StyledSelect>
  </FormControl>
);

interface ActionButtonsProps {
  showLabels: boolean;
  showGrid: boolean;
  onToggleLabels: () => void;
  onToggleGrid: () => void;
  onToggleComparison: () => void;
  onRefresh: () => void;
}

const ActionButton = ({ title, onClick, isActive, children }: {
  title: string;
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
}) => (
  <Tooltip title={title}>
    <StyledIconButton
      onClick={onClick}
      className={isActive ? 'active' : ''}
    >
      {children}
    </StyledIconButton>
  </Tooltip>
);

const ActionButtonsContainer = styled('div')({
  marginLeft: 'auto',
  display: 'flex',
  gap: '8px'
});

const ActionButtons = ({
  showLabels,
  showGrid,
  onToggleLabels,
  onToggleGrid,
  onToggleComparison,
  onRefresh,
}: ActionButtonsProps): JSX.Element => (
  <ActionButtonsContainer>
    <ActionButton
      title="Toggle Labels"
      onClick={onToggleLabels}
      isActive={showLabels}
    >
      <LabelIcon />
    </ActionButton>

    <ActionButton
      title="Toggle Grid"
      onClick={onToggleGrid}
      isActive={showGrid}
    >
      <GridIcon />
    </ActionButton>

    <ActionButton
      title="Compare Objects"
      onClick={onToggleComparison}
    >
      <CompareIcon />
    </ActionButton>

    <ActionButton
      title="Refresh Data"
      onClick={onRefresh}
    >
      <RefreshIcon />
    </ActionButton>
  </ActionButtonsContainer>
);

const VisualizationToolbar: FC<VisualizationToolbarProps> = ({
  typeFilter,
  searchQuery,
  showLabels,
  showGrid,
  onTypeFilterChange,
  onSearchQueryChange,
  onToggleLabels,
  onToggleGrid,
  onRefresh,
  onToggleComparison,
}) => {
  return (
    <StyledToolbar>
      <TypeSelect value={typeFilter} onChange={onTypeFilterChange} />

      <SearchField
        size="small"
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => onSearchQueryChange(e.target.value)}
      />

      <ActionButtons
        showLabels={showLabels}
        showGrid={showGrid}
        onToggleLabels={onToggleLabels}
        onToggleGrid={onToggleGrid}
        onToggleComparison={onToggleComparison}
        onRefresh={onRefresh}
      />
    </StyledToolbar>
  );
};

export default VisualizationToolbar;
