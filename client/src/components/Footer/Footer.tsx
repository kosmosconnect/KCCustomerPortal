import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  background: 'rgba(4, 7, 32, 0.8)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(6, 0),
  marginTop: 'auto'
}));

const FooterContainer = styled(Container)({
  position: 'relative'
});

const LogoTypography = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  marginBottom: theme.spacing(3)
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  marginBottom: theme.spacing(2)
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.primary.main
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.2s ease',
  marginRight: theme.spacing(1),
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)'
  }
}));

const SocialLink = styled('a')({
  display: 'inline-block',
  textDecoration: 'none'
});

const ContactItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: 'rgba(255, 255, 255, 0.7)',
  '& svg': {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main
  }
}));

const CopyrightSection = styled('div')(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(4),
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)'
}));

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FacebookIcon />, url: '#' },
    { icon: <TwitterIcon />, url: '#' },
    { icon: <InstagramIcon />, url: '#' },
    { icon: <LinkedInIcon />, url: '#' }
  ];

  const contactInfo: ContactInfo[] = [
    { icon: <Email />, text: 'contact@kosmosconnect.com' },
    { icon: <Phone />, text: '+1 (555) 123-4567' },
    { icon: <LocationOn />, text: 'Silicon Valley, CA' }
  ];

  return (
    <StyledFooter>
      <FooterContainer maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <LogoTypography variant="h6">
              KOSMOS CONNECT
            </LogoTypography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
              Revolutionizing space exploration through cutting-edge virtual reality technology.
            </Typography>
            <div>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIconButton>
                    {social.icon}
                  </SocialIconButton>
                </SocialLink>
              ))}
            </div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <SectionTitle variant="h6">
              Quick Links
            </SectionTitle>
            <Grid container>
              <Grid item xs={6}>
                <FooterLink href="/about">About Us</FooterLink>
              </Grid>
              <Grid item xs={6}>
                <FooterLink href="/services">Services</FooterLink>
              </Grid>
              <Grid item xs={6}>
                <FooterLink href="/pricing">Pricing</FooterLink>
              </Grid>
              <Grid item xs={6}>
                <FooterLink href="/contact">Contact</FooterLink>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <SectionTitle variant="h6">
              Contact Us
            </SectionTitle>
            {contactInfo.map((contact, index) => (
              <ContactItem key={index}>
                {contact.icon}
                <Typography variant="body2">
                  {contact.text}
                </Typography>
              </ContactItem>
            ))}
          </Grid>
        </Grid>

        {/* Copyright */}
        <CopyrightSection>
          <Typography variant="body2">
            {new Date().getFullYear()} Kosmos Connect. All rights reserved.
          </Typography>
        </CopyrightSection>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
