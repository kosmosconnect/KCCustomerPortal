import { EventEmitter } from 'events';

export type CelestialType = 'star' | 'planet' | 'asteroid' | 'comet' | 'blackHole' | 'cluster';

export interface CelestialObject {
  id: string;
  name: string;
  type: CelestialType;
  position: {
    x: number;
    y: number;
    z: number;
  };
  properties: {
    mass?: number;
    radius?: number;
    temperature?: number;
    [key: string]: any;
  };
  size: number;
  lastUpdated: number; // timestamp in milliseconds
  createdAt: number; // timestamp in milliseconds
}

class CelestialDataService {
  private eventEmitter: EventEmitter;
  private updateInterval: ReturnType<typeof setInterval> | null;
  private data: CelestialObject[];

  constructor() {
    this.eventEmitter = new EventEmitter();
    this.updateInterval = null;
    this.data = [];
  }

  private generateMockData(count: number): CelestialObject[] {
    const types: CelestialObject['type'][] = ['star', 'planet', 'asteroid', 'comet', 'blackHole', 'cluster'];
    
    return Array.from({ length: count }, (_, i) => ({
      id: `obj-${i}`,
      name: `Celestial Object ${i}`,
      type: types[Math.floor(Math.random() * types.length)],
      position: {
        x: Math.random() * 1000 - 500,
        y: Math.random() * 1000 - 500,
        z: Math.random() * 1000 - 500,
      },
      properties: {
        mass: Math.random() * 1000,
        radius: Math.random() * 100,
        temperature: Math.random() * 10000,
      },
      size: Math.random() * 100,
      lastUpdated: Date.now(),
      createdAt: Date.now(),
    }));
  }

  async initData(): Promise<CelestialObject[]> {
    this.data = this.generateMockData(100);
    return this.data;
  }

  startRealTimeUpdates() {
    if (!this.updateInterval) {
      this.updateInterval = setInterval(() => {
        this.data = this.data.map(obj => ({
          ...obj,
          position: {
            x: obj.position.x + (Math.random() - 0.5) * 2,
            y: obj.position.y + (Math.random() - 0.5) * 2,
            z: obj.position.z + (Math.random() - 0.5) * 2,
          },
          lastUpdated: Date.now(),
        }));
        this.eventEmitter.emit('update', this.data);
      }, 1000);
    }
  }

  stopRealTimeUpdates() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  async refreshData(): Promise<CelestialObject[]> {
    this.data = this.generateMockData(100);
    return this.data;
  }

  onUpdate(callback: (data: CelestialObject[]) => void) {
    this.eventEmitter.on('update', callback);
    return () => this.eventEmitter.off('update', callback);
  }

  async exportData(format: 'csv' | 'json' | 'xml'): Promise<void> {
    const filename = `celestial-data-${new Date().toISOString()}`;
    let content: string;

    switch (format) {
      case 'json':
        content = JSON.stringify(this.data, null, 2);
        this.downloadFile(`${filename}.json`, content, 'application/json');
        break;
      case 'csv':
        content = this.convertToCSV(this.data);
        this.downloadFile(`${filename}.csv`, content, 'text/csv');
        break;
      case 'xml':
        content = this.convertToXML(this.data);
        this.downloadFile(`${filename}.xml`, content, 'application/xml');
        break;
    }
  }

  async shareVisualization(method: 'link' | 'report'): Promise<void> {
    // In a real implementation, this would generate shareable links or reports
    console.log(`Sharing visualization via ${method}`);
  }

  private downloadFile(filename: string, content: string, type: string) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  private convertToCSV(data: CelestialObject[]): string {
    const headers = ['id', 'name', 'type', 'x', 'y', 'z', 'mass', 'radius', 'temperature', 'size', 'lastUpdated', 'createdAt'];
    const rows = data.map(obj => [
      obj.id,
      obj.name,
      obj.type,
      obj.position.x,
      obj.position.y,
      obj.position.z,
      obj.properties.mass,
      obj.properties.radius,
      obj.properties.temperature,
      obj.size,
      obj.lastUpdated,
      obj.createdAt,
    ]);
    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  }

  private convertToXML(data: CelestialObject[]): string {
    const objects = data.map(obj => `
      <object>
        <id>${obj.id}</id>
        <name>${obj.name}</name>
        <type>${obj.type}</type>
        <position>
          <x>${obj.position.x}</x>
          <y>${obj.position.y}</y>
          <z>${obj.position.z}</z>
        </position>
        <properties>
          <mass>${obj.properties.mass}</mass>
          <radius>${obj.properties.radius}</radius>
          <temperature>${obj.properties.temperature}</temperature>
        </properties>
        <size>${obj.size}</size>
        <lastUpdated>${obj.lastUpdated}</lastUpdated>
        <createdAt>${obj.createdAt}</createdAt>
      </object>
    `).join('');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<celestialData>${objects}</celestialData>`;
  }
}

export const celestialDataService = new CelestialDataService();
