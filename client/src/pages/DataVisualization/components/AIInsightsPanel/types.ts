import { CelestialObject } from '../../../../services/celestialData';

export type InsightType = 'trend' | 'discovery' | 'analysis' | 'prediction';

export interface Insight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
}

export interface AIInsightsPanelProps {
  selectedObject?: CelestialObject;
}
