import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import PublicFooter from './PublicFooter';

const LayoutRoot = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
  background: '#020818',
});

const MainContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  flex: 1,
  overflow: 'auto',
  paddingTop: '0px',
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

const PublicLayout: React.FC = () => {
  return (
    <LayoutRoot>
      <PublicNavbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <PublicFooter />
    </LayoutRoot>
  );
};

export default PublicLayout;
