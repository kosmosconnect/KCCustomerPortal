import { CelestialObject } from './celestialData';

export const getCelestialData = async (): Promise<CelestialObject[]> => {
  // TODO: Replace with actual API call
  return [
    {
      id: '1',
      name: 'Sun',
      type: 'star',
      position: { x: 0, y: 0, z: 0 },
      properties: {
        mass: 1.989e30,
        radius: 696340,
        temperature: 5778,
      },
      size: 696340,
      lastUpdated: Date.now(),
      createdAt: Date.now()
    },
    // Add more mock data as needed
  ];
};
