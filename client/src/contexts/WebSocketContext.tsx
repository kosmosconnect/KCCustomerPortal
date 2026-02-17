import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { websocketService } from '../services/websocket';

interface WebSocketContextType {
  isConnected: boolean;
  subscribeToChannel: (channel: string) => void;
  unsubscribeFromChannel: (channel: string) => void;
  joinVRScene: (sceneId: string) => void;
  leaveVRScene: (sceneId: string) => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const { user, token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user && token) {
      websocketService.reconnect();
      setIsConnected(websocketService.isConnected());

      const intervalId = setInterval(() => {
        setIsConnected(websocketService.isConnected());
      }, 5000);

      return () => {
        clearInterval(intervalId);
        websocketService.disconnect();
      };
    } else {
      websocketService.disconnect();
      setIsConnected(false);
    }
  }, [user, token]);

  const value = {
    isConnected,
    subscribeToChannel: websocketService.subscribeToChannel.bind(websocketService),
    unsubscribeFromChannel: websocketService.unsubscribeFromChannel.bind(websocketService),
    joinVRScene: websocketService.joinVRScene.bind(websocketService),
    leaveVRScene: websocketService.leaveVRScene.bind(websocketService),
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
