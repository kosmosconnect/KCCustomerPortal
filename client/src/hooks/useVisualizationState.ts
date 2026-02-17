import { useState, useCallback, useMemo } from 'react';
import { CelestialObject } from '../services/celestialData';

interface VisualizationState {
  selectedObject: CelestialObject | null;
  filters: {
    type: CelestialObject['type'] | 'all';
    searchQuery: string;
  };
  display: {
    showLabels: boolean;
    showGrid: boolean;
    opacity: number;
  };
}

export type CelestialType = 'star' | 'planet' | 'asteroid' | 'comet' | 'blackHole' | 'cluster';

const useVisualizationState = () => {
  const [state, setState] = useState<VisualizationState>({
    selectedObject: null,
    filters: {
      type: 'all',
      searchQuery: '',
    },
    display: {
      showLabels: true,
      showGrid: true,
      opacity: 1,
    },
  });

  const setSelectedObject = useCallback((object: CelestialObject | null) => {
    setState((prev) => ({
      ...prev,
      selectedObject: object,
    }));
  }, []);

  const setTypeFilter = useCallback((type: CelestialObject['type'] | 'all') => {
    setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        type,
      },
    }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        searchQuery: query,
      },
    }));
  }, []);

  const setDisplayOption = useCallback(
    (option: keyof VisualizationState['display'], value: boolean | number) => {
      setState((prev) => ({
        ...prev,
        display: {
          ...prev.display,
          [option]: value,
        },
      }));
    },
    []
  );

  const filterObjects = useCallback(
    (objects: CelestialObject[]) => {
      let filtered = objects;

      // Filter by type
      if (state.filters.type !== 'all') {
        filtered = filtered.filter((obj) => obj.type === state.filters.type);
      }

      // Filter by search query
      if (state.filters.searchQuery) {
        const query = state.filters.searchQuery.toLowerCase();
        filtered = filtered.filter((obj) =>
          obj.name.toLowerCase().includes(query)
        );
      }

      return filtered;
    },
    [state.filters]
  );

  const getInsights = useMemo(() => {
    return {
      getTypeDistribution: (objects: CelestialObject[]) => {
        const distribution: Record<CelestialType, number> = {
          star: 0,
          planet: 0,
          asteroid: 0,
          comet: 0,
          blackHole: 0,
          cluster: 0,
        };
        objects.forEach((obj) => {
          distribution[obj.type]++;
        });
        return distribution;
      },
      getAverageDistance: (objects: CelestialObject[]) => {
        const distances = objects
          .filter((obj) => obj.properties?.distance)
          .map((obj) => obj.properties!.distance!);
        if (distances.length === 0) return 0;
        return (
          distances.reduce((sum, distance) => sum + distance, 0) /
          distances.length
        );
      },
      getTemperatureRange: (objects: CelestialObject[]) => {
        const temperatures = objects
          .filter((obj) => obj.properties?.temperature)
          .map((obj) => obj.properties!.temperature!);
        if (temperatures.length === 0) return { min: 0, max: 0 };
        return {
          min: Math.min(...temperatures),
          max: Math.max(...temperatures),
        };
      },
      getAverageTemperature: (objects: CelestialObject[]) => {
        const averageTemperature =
          objects.reduce((sum, obj) => sum + (obj.properties.temperature || 0), 0) /
          objects.length;
        return averageTemperature;
      },
      getAverageMass: (objects: CelestialObject[]) => {
        const averageMass =
          objects.reduce((sum, obj) => sum + (obj.properties.mass || 0), 0) /
          objects.length;
        return averageMass;
      },
    };
  }, []);

  return {
    state,
    setSelectedObject,
    setTypeFilter,
    setSearchQuery,
    setDisplayOption,
    filterObjects,
    getInsights,
  };
};

export default useVisualizationState;
