import { io, Socket } from 'socket.io-client';
import { store } from '../store';
import { addNotification } from '../store/slices/notificationSlice';
import { updateCelestialData } from '../store/slices/celestialDataSlice';
import { updateVRScene } from '../store/slices/vrExperienceSlice';

interface ServerToClientEvents {
  notification: (data: { type: string; message: string }) => void;
  celestialDataUpdate: (data: any) => void;
  vrSceneUpdate: (data: any) => void;
  supportTicketUpdate: (data: any) => void;
}

interface ClientToServerEvents {
  subscribe: (channel: string) => void;
  unsubscribe: (channel: string) => void;
  joinVRScene: (sceneId: string) => void;
  leaveVRScene: (sceneId: string) => void;
}

class WebSocketService {
  private static instance: WebSocketService;
  private socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;

  private constructor() {
    this.initializeSocket();
  }

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  private initializeSocket() {
    try {
      const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';
      this.socket = io(socketUrl, {
        transports: ['websocket'],
        auth: {
          token: localStorage.getItem('token'),
        },
        reconnection: true,
        reconnectionAttempts: this.maxReconnectAttempts,
        reconnectionDelay: this.reconnectDelay,
      });
  
      this.setupEventListeners();
    } catch (error) {
      console.error('WebSocket initialization failed:', error);
    }
  }

  private setupEventListeners() {
    if (!this.socket) return;

    // Connection events
    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.reconnectAttempts = 0;
    });

    this.socket.on('disconnect', (reason) => {
      console.log('WebSocket disconnected:', reason);
    });

    this.socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
      this.handleReconnect();
    });

    // Business events
    this.socket.on('notification', (data) => {
      store.dispatch(addNotification(data));
    });

    this.socket.on('celestialDataUpdate', (data) => {
      store.dispatch(updateCelestialData(data));
    });

    this.socket.on('vrSceneUpdate', (data) => {
      store.dispatch(updateVRScene(data));
    });

    this.socket.on('supportTicketUpdate', (data) => {
      // Handle support ticket updates
      console.log('Support ticket update:', data);
    });
  }

  private handleReconnect() {
    this.reconnectAttempts++;
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        this.initializeSocket();
      }, this.reconnectDelay * this.reconnectAttempts);
    }
  }

  public subscribeToChannel(channel: string) {
    this.socket?.emit('subscribe', channel);
  }

  public unsubscribeFromChannel(channel: string) {
    this.socket?.emit('unsubscribe', channel);
  }

  public joinVRScene(sceneId: string) {
    this.socket?.emit('joinVRScene', sceneId);
  }

  public leaveVRScene(sceneId: string) {
    this.socket?.emit('leaveVRScene', sceneId);
  }

  public disconnect() {
    this.socket?.disconnect();
  }

  public reconnect() {
    if (!this.socket?.connected) {
      this.initializeSocket();
    }
  }

  public isConnected(): boolean {
    return this.socket?.connected || false;
  }
}

export const websocketService = WebSocketService.getInstance();
