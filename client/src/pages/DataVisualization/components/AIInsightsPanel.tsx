import { Typography, CardContent } from '@mui/material';
import { StyledCard } from './AIInsightsPanel/styles';
import { InsightsList } from './AIInsightsPanel/InsightComponents';
import { AIInsightsPanelProps } from './AIInsightsPanel/types';
import { generateInsights } from './AIInsightsPanel/utils';

const EmptyState = () => (
  <StyledCard>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        AI Insights
      </Typography>
      <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
        Select a celestial object to view AI-generated insights
      </Typography>
    </CardContent>
  </StyledCard>
);

const FilledState = ({ name, insights }: { name: string; insights: ReturnType<typeof generateInsights> }) => (
  <StyledCard>
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
        AI Insights for {name}
      </Typography>
      <InsightsList insights={insights} />
    </CardContent>
  </StyledCard>
);

const AIInsightsPanel = ({ selectedObject }: AIInsightsPanelProps) => {
  if (!selectedObject) {
    return <EmptyState />;
  }
  
  return (
    <FilledState 
      name={selectedObject.name}
      insights={generateInsights(selectedObject)}
    />
  );
};

export default AIInsightsPanel;
