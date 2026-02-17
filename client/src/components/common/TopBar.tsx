import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, styled } from '@mui/material';
import {
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import UserMenu from './UserMenu';

const TOP_BAR_HEIGHT = '72px';

const StyledAppBar = styled(AppBar)({
  height: TOP_BAR_HEIGHT,
  background: 'rgba(11, 19, 64, 0.95)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid rgba(157, 78, 221, 0.2)',
  boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 24px',
});

const LogoSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

const CenterSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

const RightSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

const SocialIcon = styled(IconButton)({
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.3s ease',
  padding: '8px',
  '&:hover': {
    color: '#00B4D8',
    transform: 'translateY(-2px)',
  },
});

const NotificationBadge = styled(Box)({
  position: 'relative',
  '& .MuiSvgIcon-root': {
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    backgroundColor: '#00B4D8',
    borderRadius: '50%',
    border: '2px solid rgba(11, 19, 64, 0.95)',
  },
});

const TopBar: React.FC = () => {
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <LogoSection>
          <img src="/logo.png" alt="Logo" height="40" />
          <Typography
            variant="h6"
            sx={{
              background: 'linear-gradient(90deg, #9D4EDD, #00B4D8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
            }}
          >
            Kosmos Connect
          </Typography>
        </LogoSection>

        <CenterSection>
          <Box
            component="div"
            sx={{
              backgroundColor: 'rgba(157, 78, 221, 0.1)',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              gap: '8px',
            } as const}
          >
            <Typography
              variant="body1"
              sx={{ color: '#00B4D8', fontSize: '16px' }}
            >
              🚀 New Feature:
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}
            >
              Experience space in VR! Try our latest virtual reality missions with Kosmos Connect
            </Typography>
          </Box>
        </CenterSection>

        <RightSection>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon>
            <GitHubIcon />
          </SocialIcon>
          <IconButton sx={{ padding: '8px' }}>
            <NotificationBadge>
              <NotificationsIcon />
            </NotificationBadge>
          </IconButton>
          <UserMenu />
        </RightSection>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default TopBar;
