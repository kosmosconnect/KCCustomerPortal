import { memo } from 'react';
import { ListItemText, List } from '@mui/material';
import { TrendingUp, Stars, Science, Timeline } from '@mui/icons-material';
import { StyledListItem, StyledListItemIcon } from './styles';
import { InsightType, Insight } from './types';

const InsightIcons: Record<InsightType, typeof TrendingUp> = {
  trend: TrendingUp,
  discovery: Stars,
  analysis: Science,
  prediction: Timeline,
};

export const InsightIcon = memo<{ type: InsightType }>(({ type }) => {
  const Icon = InsightIcons[type];
  return (
    <StyledListItemIcon>
      <Icon />
    </StyledListItemIcon>
  );
});
InsightIcon.displayName = 'InsightIcon';

export const InsightContent = memo<{ title: string; description: string }>(
  ({ title, description }) => (
    <ListItemText
      primary={title}
      secondary={description}
      secondaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.7)' } }}
    />
  )
);
InsightContent.displayName = 'InsightContent';

export const InsightListItem = memo<{ insight: Insight }>(({ insight }) => (
  <StyledListItem>
    <InsightIcon type={insight.type} />
    <InsightContent title={insight.title} description={insight.description} />
  </StyledListItem>
));
InsightListItem.displayName = 'InsightListItem';

export const InsightsList = memo<{ insights: Insight[] }>(({ insights }) => (
  <List>
    {insights.map(insight => (
      <InsightListItem key={insight.id} insight={insight} />
    ))}
  </List>
));
InsightsList.displayName = 'InsightsList';
