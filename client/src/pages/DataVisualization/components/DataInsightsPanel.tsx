import React from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CelestialObject } from '../../../services/celestialData';

interface DataInsightsPanelProps {
  selectedObject: CelestialObject | null;
  data: CelestialObject[];
}

const PanelContainer = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const SectionTitle = styled(Typography)({
  color: '#fff',
  marginBottom: '16px',
  fontSize: '1.1rem',
  fontWeight: 500,
});

const InsightCard = styled(Box)({
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  marginBottom: '16px',
  '&:last-child': {
    marginBottom: 0,
  },
});

const StyledList = styled(List)({
  padding: 0,
  '& .MuiListItem-root': {
    padding: '8px 0',
  },
});

const StyledListItem = styled(ListItem)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '8px 0',
});

const ItemTitle = styled(Typography)({
  color: '#fff',
  fontWeight: 500,
  marginBottom: '4px',
});

const ItemDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.875rem',
});

const StyledDivider = styled(Divider)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: '8px 0',
});

const DataInsightsPanel: React.FC<DataInsightsPanelProps> = ({
  selectedObject,
  data,
}) => {
  // Calculate insights
  const totalObjects = data.length;
  const objectTypes = [...new Set(data.map(obj => obj.type))];
  const typeDistribution = objectTypes.map(type => ({
    type,
    count: data.filter(obj => obj.type === type).length,
  }));

  // Find nearest objects to the selected object
  const getNearestObjects = (object: CelestialObject, count: number = 3) => {
    if (!object) return [];
    
    return data
      .filter(obj => obj.id !== object.id)
      .map(obj => ({
        ...obj,
        distance: Math.sqrt(
          Math.pow(obj.position.x - object.position.x, 2) +
          Math.pow(obj.position.y - object.position.y, 2) +
          Math.pow(obj.position.z - object.position.z, 2)
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, count);
  };

  const nearestObjects = selectedObject ? getNearestObjects(selectedObject) : [];

  return (
    <PanelContainer>
      <SectionTitle variant="h6">Data Insights</SectionTitle>

      <InsightCard>
        <Typography variant="subtitle2" color="#fff" gutterBottom>
          Overview
        </Typography>
        <StyledList>
          <StyledListItem>
            <ItemTitle>Total Objects</ItemTitle>
            <ItemDescription>{totalObjects} celestial objects</ItemDescription>
          </StyledListItem>
          <StyledDivider />
          <StyledListItem>
            <ItemTitle>Type Distribution</ItemTitle>
            {typeDistribution.map(({ type, count }) => (
              <ItemDescription key={type}>
                {type}: {count} ({((count / totalObjects) * 100).toFixed(1)}%)
              </ItemDescription>
            ))}
          </StyledListItem>
        </StyledList>
      </InsightCard>

      {selectedObject && nearestObjects.length > 0 && (
        <InsightCard>
          <Typography variant="subtitle2" color="#fff" gutterBottom>
            Proximity Analysis
          </Typography>
          <StyledList>
            {nearestObjects.map((obj) => (
              <React.Fragment key={obj.id}>
                <StyledListItem>
                  <ItemTitle>{obj.name}</ItemTitle>
                  <ItemDescription>
                    Type: {obj.type}
                    <br />
                    Distance: {obj.distance.toFixed(2)} units
                  </ItemDescription>
                </StyledListItem>
                <StyledDivider />
              </React.Fragment>
            ))}
          </StyledList>
        </InsightCard>
      )}

      {selectedObject && (
        <InsightCard>
          <Typography variant="subtitle2" color="#fff" gutterBottom>
            Selected Object Details
          </Typography>
          <StyledList>
            <StyledListItem>
              <ItemTitle>Position Analysis</ItemTitle>
              <ItemDescription>
                X: {selectedObject.position.x.toFixed(2)}
                <br />
                Y: {selectedObject.position.y.toFixed(2)}
                <br />
                Z: {selectedObject.position.z.toFixed(2)}
              </ItemDescription>
            </StyledListItem>
            <StyledDivider />
            <StyledListItem>
              <ItemTitle>Size Comparison</ItemTitle>
              <ItemDescription>
                Relative size: {selectedObject.size}x
                <br />
                {selectedObject.size > 1
                  ? `${selectedObject.size}x larger than average`
                  : `${(1 / selectedObject.size).toFixed(1)}x smaller than average`}
              </ItemDescription>
            </StyledListItem>
          </StyledList>
        </InsightCard>
      )}
    </PanelContainer>
  );
};

export default DataInsightsPanel;
