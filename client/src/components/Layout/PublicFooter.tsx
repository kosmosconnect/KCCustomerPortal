import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  styled,
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const FooterRoot = styled(Box)({
  background: 'rgba(2,8,24,0.6)',
  backdropFilter: 'blur(12px)',
  borderTop: '1px solid rgba(0,180,216,0.15)',
  marginTop: 'auto',
  padding: '64px 0 24px',
  color: 'rgba(255,255,255,0.8)',
  position: 'relative',
});

const FooterContent = styled(Container)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '40px',
  marginBottom: '40px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '30px',
  },
});

const FooterSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const FooterTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1rem',
  marginBottom: '8px',
});

const FooterLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.65)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#00B4D8',
  },
});

const SocialIcon = styled('a')({
  color: 'rgba(255, 255, 255, 0.6)',
  transition: 'all 0.3s ease',
  padding: '8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: '#00B4D8',
    transform: 'translateY(-2px)',
  },
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '12px',
});

const LogoText = styled(Typography)({
  background: 'linear-gradient(90deg,#fff,#00B4D8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  fontSize: '1.3rem',
});

const Tagline = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.9rem',
  lineHeight: 1.6,
  maxWidth: '280px',
});

const BottomBar = styled(Box)({
  borderTop: '1px solid rgba(255,255,255,0.06)',
  paddingTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
});

const Copyright = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.85rem',
});

const PublicFooter: React.FC = () => {
  return (
    <FooterRoot>
      <Container maxWidth="lg">
        <FooterContent>
          {/* Brand Section */}
          <FooterSection>
            <LogoContainer>
              <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(0,180,216,.4)' }}>
                <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '0.9rem', lineHeight: 1 }}>K</Typography>
              </Box>
              <LogoText>Kosmos Connect</LogoText>
            </LogoContainer>
            <Tagline>
              World's First Nano Observatory-as-a-Service. Live multi-spectral orbital telescope access for everyone.
            </Tagline>
            <Stack direction="row" spacing={1}>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <TwitterIcon sx={{ fontSize: '1.2rem' }} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LinkedInIcon sx={{ fontSize: '1.2rem' }} />
              </SocialIcon>
              <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <GitHubIcon sx={{ fontSize: '1.2rem' }} />
              </SocialIcon>
            </Stack>
          </FooterSection>

          {/* Product Section */}
          <FooterSection>
            <FooterTitle>Product</FooterTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/about">About</FooterLink>
          </FooterSection>

          {/* Resources Section */}
          <FooterSection>
            <FooterTitle>Resources</FooterTitle>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="https://kosmosconnect.space" target="_blank" rel="noopener noreferrer">
              Main Website
            </FooterLink>
            <FooterLink href="mailto:info@kosmosconnect.space">Email Support</FooterLink>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <Stack direction="row" alignItems="center" gap={1}>
              <EmailIcon sx={{ fontSize: '1.2rem', color: '#00B4D8' }} />
              <FooterLink href="mailto:info@kosmosconnect.space">
                info@kosmosconnect.space
              </FooterLink>
            </Stack>
            <FooterLink href="https://kosmosconnect.space" target="_blank" rel="noopener noreferrer">
              kosmosconnect.space
            </FooterLink>
          </FooterSection>
        </FooterContent>

        <BottomBar>
          <Copyright>
            © 2026 Kosmos Connect. All Rights Reserved.
          </Copyright>
          <Stack direction="row" spacing={2}>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </Stack>
        </BottomBar>
      </Container>
    </FooterRoot>
  );
};

export default PublicFooter;
