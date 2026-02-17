import React, { useRef, useMemo, FC } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Stars,
  Html,
  PerspectiveCamera,
} from '@react-three/drei';
import { styled } from '@mui/material/styles';
import { CelestialObject } from '../../../services/celestialData';
import { PerspectiveCamera as ThreePerspectiveCamera, Vector3 } from 'three';

interface TimeRange {
  start: number;
  end: number;
}

interface CelestialMapProps {
  data: CelestialObject[];
  selectedObject: CelestialObject | null;
  onObjectSelect: (object: CelestialObject | null) => void;
  showLabels: boolean;
  showGrid: boolean;
  timeRange: TimeRange;
  isComparisonMode: boolean;
}

const MapContainer = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  background: '#000',
  borderRadius: '12px',
});

const ObjectLabel = styled('div')({
  color: '#fff',
  padding: '4px 8px',
  background: 'rgba(0, 0, 0, 0.7)',
  borderRadius: '4px',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  userSelect: 'none',
});

const CelestialObject3D: React.FC<{
  object: CelestialObject;
  selected: boolean;
  showLabel: boolean;
  onClick: () => void;
}> = ({ object, selected, showLabel, onClick }) => {
  const getObjectColor = (type: CelestialObject['type']) => {
    switch (type) {
      case 'star':
        return '#FFD700';
      case 'planet':
        return '#4CAF50';
      case 'asteroid':
        return '#FF9800';
      case 'comet':
        return '#00BCD4';
      case 'blackHole':
        return '#9C27B0';
      case 'cluster':
        return '#795548';
      default:
        return '#757575';
    }
  };

  const color = getObjectColor(object.type);
  const scale = object.size;
  const position = new Vector3(object.position.x, object.position.y, object.position.z);

  return (
    <group position={position}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[scale, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={selected ? 1 : 0.5}
        />
      </mesh>
      {showLabel && (
        <Html distanceFactor={10}>
          <ObjectLabel>
            {object.name}
            <br />
            {object.type}
          </ObjectLabel>
        </Html>
      )}
    </group>
  );
};

const CelestialMap: FC<CelestialMapProps> = ({
  data,
  selectedObject,
  onObjectSelect,
  showLabels,
  showGrid,
  timeRange,
  isComparisonMode,
}) => {
  const cameraRef = useRef<ThreePerspectiveCamera>(null);

  // Filter objects based on time range
  const visibleObjects = useMemo(() => {
    return data.filter(object => {
      const objectTime = object.lastUpdated;
      return objectTime >= timeRange.start && objectTime <= timeRange.end;
    });
  }, [data, timeRange]);

  const handleObjectClick = (clickedObject: CelestialObject) => {
    if (isComparisonMode) {
      // In comparison mode, add to selection if not already selected
      if (!selectedObject || selectedObject.id !== clickedObject.id) {
        onObjectSelect(clickedObject);
      }
    } else {
      // In normal mode, toggle selection
      onObjectSelect(selectedObject?.id === clickedObject.id ? null : clickedObject);
    }
  };

  return (
    <MapContainer>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 100]}
          ref={cameraRef}
        />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        
        {/* Render celestial objects */}
        {visibleObjects.map((object) => (
          <CelestialObject3D
            key={object.id}
            object={object}
            selected={selectedObject?.id === object.id}
            showLabel={showLabels}
            onClick={() => handleObjectClick(object)}
          />
        ))}

        {/* Render grid if enabled */}
        {showGrid && (
          <gridHelper args={[1000, 100]} position={[0, -50, 0]} />
        )}
      </Canvas>
    </MapContainer>
  );
};

export default CelestialMap;
