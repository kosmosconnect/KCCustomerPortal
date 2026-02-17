import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from '../common/TopBar';

const DRAWER_WIDTH = 280;
const TOP_BAR_HEIGHT = '72px';

const LayoutRoot = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
  background: `linear-gradient(135deg, rgba(10, 17, 40, 0.95), rgba(10, 17, 40, 0.85))`,
});

const MainContent = styled(Box)({
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: `calc(100vh - ${TOP_BAR_HEIGHT})`,
  marginTop: TOP_BAR_HEIGHT,
});

const LayoutContent = styled(Box)({
  position: 'absolute',
  left: DRAWER_WIDTH,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(157, 78, 221, 0.2)',
    borderRadius: '4px',
    '&:hover': {
      background: 'rgba(157, 78, 221, 0.3)',
    },
  },
});

const Layout: React.FC = () => {
  return (
    <LayoutRoot>
      <TopBar />
      <MainContent>
        <Sidebar />
        <LayoutContent>
          <Outlet />
        </LayoutContent>
      </MainContent>
    </LayoutRoot>
  );
};

export default Layout;
