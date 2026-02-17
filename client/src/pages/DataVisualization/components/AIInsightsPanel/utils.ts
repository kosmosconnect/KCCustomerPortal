import { CelestialObject } from '../../../../services/celestialData';
import { Insight } from './types';

export const generateInsights = (object: CelestialObject): Insight[] => [
  {
    id: '1',
    type: 'trend',
    title: 'Movement Pattern',
    description: `${object.name} shows a consistent orbital pattern with periodic variations.`,
  },
  {
    id: '2',
    type: 'discovery',
    title: 'Unique Characteristics',
    description: `Notable features include its ${object.type}-typical properties.`,
  },
  {
    id: '3',
    type: 'analysis',
    title: 'Composition Analysis',
    description: 'Spectral analysis reveals common celestial materials.',
  },
  {
    id: '4',
    type: 'prediction',
    title: 'Future Trajectory',
    description: 'Predicted to maintain current orbit with minimal deviation.',
  },
];
