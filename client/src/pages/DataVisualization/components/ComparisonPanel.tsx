import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CelestialObject } from '../../../services/celestialData';

interface ComparisonPanelProps {
  selectedObjects?: CelestialObject[];
}

interface ComparisonProperty<T = any> {
  key: keyof Pick<CelestialObject, 'name' | 'type' | 'size'> | 'temperature' | 'mass';
  label: string;
  format: (value: T) => string;
  getValue: (obj: CelestialObject) => T;
}

const COMPARISON_PROPERTIES: ComparisonProperty[] = [
  {
    key: 'name',
    label: 'Name',
    format: (value: string) => value,
    getValue: (obj: CelestialObject) => obj.name
  },
  {
    key: 'type',
    label: 'Type',
    format: (value: string) => value,
    getValue: (obj: CelestialObject) => obj.type
  },
  {
    key: 'size',
    label: 'Size',
    format: (value: number) => value.toFixed(2),
    getValue: (obj: CelestialObject) => obj.size
  },
  {
    key: 'temperature',
    label: 'Temperature',
    format: (value: number | undefined) => value ? `${value.toFixed(2)}K` : 'N/A',
    getValue: (obj: CelestialObject) => obj.properties?.temperature
  },
  {
    key: 'mass',
    label: 'Mass',
    format: (value: number | undefined) => value ? `${value.toFixed(2)} kg` : 'N/A',
    getValue: (obj: CelestialObject) => obj.properties?.mass
  }
];

const StyledTableContainer = styled(TableContainer)({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  '& .MuiTableCell-root': {
    color: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& .MuiTableHead-root .MuiTableCell-root': {
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const ComparisonPanel: React.FC<ComparisonPanelProps> = ({ selectedObjects = [] }) => {
  if (selectedObjects.length === 0) {
    return (
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No objects selected for comparison</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </StyledTableContainer>
    );
  }

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            {selectedObjects.map((obj) => (
              <TableCell key={obj.id}>{obj.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {COMPARISON_PROPERTIES.map(({ key, label, format, getValue }) => (
            <TableRow key={key}>
              <TableCell>{label}</TableCell>
              {selectedObjects.map((obj) => (
                <TableCell key={`${obj.id}-${key}`}>
                  {format(getValue(obj))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ComparisonPanel;
