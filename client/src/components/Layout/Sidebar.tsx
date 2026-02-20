import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Home,
  Dashboard,
  DataUsage,
  RocketLaunch,
  Science,
  Subscriptions,
  SupportAgent,
  VrpanoOutlined,
  Description,
  Satellite,
  Language,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const DRAWER_WIDTH = 280;
const TOP_BAR_HEIGHT = '72px';

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    background: 'rgba(11, 19, 64, 0.95)',
    backdropFilter: 'blur(8px)',
    borderRight: '1px solid rgba(157, 78, 221, 0.2)',
    marginTop: TOP_BAR_HEIGHT,
    height: `calc(100vh - ${TOP_BAR_HEIGHT})`,
    position: 'fixed',
    top: 0,
    left: 0,
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(0, 0, 0, 0.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(157, 78, 221, 0.2)',
      borderRadius: '3px',
      '&:hover': {
        background: 'rgba(157, 78, 221, 0.3)',
      },
    },
  },
});

interface StyledListItemProps {
  active: boolean;
}

const StyledListItem = styled(ListItem)<StyledListItemProps>(({ active }) => ({
  margin: '8px 16px',
  borderRadius: '12px',
  backgroundColor: active ? 'rgba(157, 78, 221, 0.15)' : 'transparent',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: active ? 'rgba(157, 78, 221, 0.2)' : 'rgba(157, 78, 221, 0.1)',
    transform: 'translateX(4px)',
  },
  '& .MuiListItemIcon-root': {
    color: active ? '#00B4D8' : 'rgba(255, 255, 255, 0.7)',
    minWidth: '40px',
  },
  '& .MuiListItemText-primary': {
    color: active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
    fontWeight: active ? 600 : 400,
  },
}));

const menuItems = [
  { text: 'Home', icon: <Home />, path: '/' },
  { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  { text: 'Mission Control', icon: <RocketLaunch />, path: '/mission-control' },
  { text: 'Data Visualization', icon: <DataUsage />, path: '/data-visualization' },
  { text: 'Kosmos Connect Live 1.0', icon: <Language />, path: '/live', external: true, externalUrl: 'https://live.kosmosconnect.live/' },
  { text: 'Satellite Data', icon: <Satellite />, path: '/satellite-data' },
  { text: 'Space Science', icon: <Science />, path: '/space-science' },
  { text: 'VR Experience', icon: <VrpanoOutlined />, path: '/vr-experience' },
  { text: 'Documentation', icon: <Description />, path: '/documentation' },
  { text: 'Subscription', icon: <Subscriptions />, path: '/subscription' },
  { text: 'Support Center', icon: <SupportAgent />, path: '/support-center' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (item: any) => {
    if (item.external && item.externalUrl) {
      window.open(item.externalUrl, '_blank');
    } else {
      navigate(item.path);
    }
  };

  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiPaper-root': {
          border: 'none',
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <StyledListItem
            key={item.text}
            active={location.pathname === item.path}
            onClick={() => handleItemClick(item)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
