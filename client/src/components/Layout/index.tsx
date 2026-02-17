import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../Navbar';
import { styled } from '@mui/material/styles';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: 'linear-gradient(180deg, rgba(4, 7, 32, 0.95) 0%, rgba(4, 7, 32, 0.85) 100%)',
  backgroundAttachment: 'fixed'
});

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4, 0),
  position: 'relative',
  zIndex: 1
}));

const StyledContainer = styled(Container)({
  height: '100%'
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutRoot>
      <Navbar />
      <Main>
        <StyledContainer>
          {children}
        </StyledContainer>
      </Main>
    </LayoutRoot>
  );
};

export default Layout;
