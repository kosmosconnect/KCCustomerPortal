import { FC } from 'react';
import { Box, Typography, Button, Grid, Card, Stack, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
  Satellite,
  Shield,
  Radar,
  TrendingUp,
  ArrowForward,
  Public,
  Speed,
  CheckCircle,
  ExpandMore,
  Email,
  Phone,
  LocationOn,
  Star,
  Rocket,
  Lightbulb,
  Group
} from '@mui/icons-material';

// ============================================================================
// ROOT BACKGROUND
// ============================================================================

const RootBackground = styled(Box)({
  background: 'linear-gradient(135deg, rgba(10, 17, 40, 0.95), rgba(10, 17, 40, 0.85))',
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none'
  }
});

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const HeroSection = styled(Box)({
  paddingTop: '80px',
  paddingBottom: '80px',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1
});

const HeroTitle = styled(Typography)({
  fontSize: '3.5rem',
  fontWeight: 800,
  color: '#FFFFFF',
  marginBottom: '24px',
  lineHeight: 1.2,
  '@media (max-width: 960px)': {
    fontSize: '2.5rem'
  }
});

const HeroSubtitle = styled(Typography)({
  fontSize: '1.2rem',
  color: 'rgba(255, 255, 255, 0.8)',
  marginBottom: '48px',
  maxWidth: '700px',
  margin: '0 auto 48px',
  lineHeight: 1.6
});

const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  padding: '14px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)',
  '&:hover': {
    boxShadow: '0 12px 32px rgba(157, 78, 221, 0.4)',
    transform: 'translateY(-2px)'
  }
});

const SecondaryButton = styled(Button)({
  color: '#00B4D8',
  borderColor: '#00B4D8',
  padding: '12px 28px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  border: '2px solid',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)',
    borderColor: '#00B4D8'
  }
});

const SectionContainer = styled(Container)({
  paddingTop: '80px',
  paddingBottom: '80px',
  position: 'relative',
  zIndex: 1
});

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '2.5rem',
  marginBottom: '48px',
  textAlign: 'center',
  '@media (max-width: 960px)': {
    fontSize: '2rem'
  }
});

const FeatureCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  padding: '32px',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(0, 180, 216, 0.2)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const FeatureIcon = styled(Box)({
  width: '64px',
  height: '64px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  fontSize: '2rem',
  marginBottom: '16px'
});

const FeatureTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1.3rem',
  marginBottom: '12px'
});

const FeatureDescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.75)',
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: '16px',
  flex: 1
});

const TestimonialCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, rgba(157, 78, 221, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '24px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 180, 216, 0.15)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const FAQItem = styled(Accordion)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  marginBottom: '12px',
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const FAQSummary = styled(AccordionSummary)({
  color: '#FFFFFF',
  fontWeight: 600,
  '& .MuiAccordionSummary-content': {
    margin: '16px 0'
  }
});

const FAQDetails = styled(AccordionDetails)({
  color: 'rgba(255, 255, 255, 0.8)',
  borderTop: '1px solid rgba(0, 180, 216, 0.2)',
  lineHeight: 1.8
});

const CTASection = styled(Box)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2) 0%, rgba(0, 180, 216, 0.15) 100%)',
  border: '2px solid rgba(0, 180, 216, 0.3)',
  borderRadius: '16px',
  padding: '64px 48px',
  textAlign: 'center',
  marginTop: '80px',
  marginBottom: '80px'
});

const CTATitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '2rem',
  marginBottom: '16px'
});

const CTADescription = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '1.1rem',
  marginBottom: '32px',
  maxWidth: '600px',
  margin: '0 auto 32px'
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const Home: FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Satellite />,
      title: 'Real-Time Monitoring',
      description: 'Access live satellite data and orbital tracking for comprehensive space situational awareness'
    },
    {
      icon: <Shield />,
      title: 'Planetary Defense',
      description: 'Advanced threat detection and early warning systems for near-Earth objects'
    },
    {
      icon: <Radar />,
      title: 'Telescope Access',
      description: 'Democratized access to professional-grade telescopes globally'
    },
    {
      icon: <TrendingUp />,
      title: 'Data Analytics',
      description: 'Powerful analytics tools to process and visualize space observation datasets'
    },
    {
      icon: <Speed />,
      title: 'Real-Time Alerts',
      description: 'Instant notifications for critical space events and potential threats'
    },
    {
      icon: <Public />,
      title: 'Global Coverage',
      description: 'Worldwide network of observation stations providing 24/7 surveillance'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Kosmos Connect?',
      answer: 'Simply sign up for an account, choose your subscription plan, and you\'ll have immediate access to our platform. You can start monitoring celestial objects, booking telescopes, and receiving alerts within minutes.'
    },
    {
      question: 'What subscription plans do you offer?',
      answer: 'We offer three main plans: Starter (basic monitoring and alerts), Professional (advanced analytics and telescope access), and Enterprise (dedicated support and custom solutions).'
    },
    {
      question: 'Can I control telescopes remotely?',
      answer: 'Yes! Our telescope-as-a-service platform allows you to control professional-grade telescopes from anywhere in the world. Simply book a telescope, and you can start observing immediately.'
    },
    {
      question: 'How accurate are your threat assessments?',
      answer: 'Our AI-powered system analyzes data from 150+ observation stations worldwide and provides threat assessments with 99.2% accuracy.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for new users. No credit card required. You can explore all features and see if Kosmos Connect is right for you.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support via email, chat, and phone. Enterprise customers also get dedicated account managers and priority support.'
    }
  ];

  return (
    <RootBackground>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <HeroTitle>
            Strengthen Humanity's Shield Against Cosmic Threats
          </HeroTitle>
          <HeroSubtitle>
            Kosmos Connect provides real-time planetary defense monitoring, telescope-as-a-service access, and global space surveillance to protect Earth and advance our understanding of the cosmos.
          </HeroSubtitle>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <PrimaryButton
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/register')}
            >
              Get Started
            </PrimaryButton>
            <SecondaryButton
              size="large"
              variant="outlined"
              onClick={() => navigate('/login')}
            >
              Login
            </SecondaryButton>
          </Stack>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <SectionContainer maxWidth="lg">
        <SectionTitle>Our Capabilities</SectionTitle>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Mission Section */}
      <SectionContainer maxWidth="lg">
        <SectionTitle>Our Mission</SectionTitle>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            At Kosmos Connect, we believe that planetary defense and space exploration should be accessible to everyone. We're democratizing access to space situational awareness, advanced telescopes, and real-time threat detection systems to create a safer, more informed world.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ color: '#00B4D8', fontSize: '2.5rem', mb: 1 }}><Rocket /></Box>
              <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>Innovation</Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Cutting-edge technology</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ color: '#00B4D8', fontSize: '2.5rem', mb: 1 }}><Lightbulb /></Box>
              <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>Insight</Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>AI-powered analysis</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ color: '#00B4D8', fontSize: '2.5rem', mb: 1 }}><Group /></Box>
              <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>Community</Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Global collaboration</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ color: '#00B4D8', fontSize: '2.5rem', mb: 1 }}><CheckCircle /></Box>
              <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>Reliability</Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>99.2% accuracy</Typography>
            </Box>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer maxWidth="lg">
        <SectionTitle>What Our Users Say</SectionTitle>
        <Grid container spacing={3}>
          {(
            [
              { text: 'Kosmos Connect revolutionized how we monitor near-Earth objects.', author: 'Dr. Sarah Chen', role: 'Planetary Scientist, NASA' },
              { text: 'The telescope-as-a-service platform is incredible and accessible.', author: 'Prof. James Mitchell', role: 'Oxford University' },
              { text: 'Professional-grade equipment I could never afford. Highly recommended!', author: 'Emma Rodriguez', role: 'Amateur Astronomer' },
              { text: 'AI-powered insights helped us identify patterns we missed before.', author: 'Dr. Michael Zhang', role: 'Research Director, ESA' }
            ] as const
          ).map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TestimonialCard>
                <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} sx={{ color: '#00B4D8', fontSize: '1rem' }} />
                  ))}
                </Stack>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', mb: 2, fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </Typography>
                <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>
                  {testimonial.author}
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                  {testimonial.role}
                </Typography>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer maxWidth="lg">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ fontWeight: 600, color: '#FFFFFF' }}>
                {faq.question}
              </Typography>
            </FAQSummary>
            <FAQDetails>
              <Typography>{faq.answer}</Typography>
            </FAQDetails>
          </FAQItem>
        ))}
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer maxWidth="lg">
        <CTASection>
          <Shield sx={{ fontSize: '3rem', color: '#00B4D8', mb: 2 }} />
          <CTATitle>Join the Planetary Defense Initiative</CTATitle>
          <CTADescription>
            Become part of humanity's collective effort to monitor and protect our planet from cosmic threats while advancing space science and exploration.
          </CTADescription>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <PrimaryButton size="large" onClick={() => navigate('/register')}>
              Get Started Today
            </PrimaryButton>
            <SecondaryButton size="large" variant="outlined" onClick={() => navigate('/subscription')}>
              View Pricing
            </SecondaryButton>
          </Stack>
        </CTASection>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer maxWidth="lg">
        <SectionTitle>Get In Touch</SectionTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {[
              { icon: <Email />, label: 'Email', values: ['support@kosmosconnect.com', 'business@kosmosconnect.com'] },
              { icon: <Phone />, label: 'Phone', values: ['+1 (555) 123-4567', 'Available 24/7'] },
              { icon: <LocationOn />, label: 'Headquarters', values: ['San Francisco, California', 'United States'] }
            ].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Box sx={{ color: '#00B4D8', fontSize: '1.5rem', display: 'flex', alignItems: 'flex-start', mt: 0.5 }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>
                    {item.label}
                  </Typography>
                  {item.values.map((val, i) => (
                    <Typography key={i} sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                      {val}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: 1.8, mb: 3 }}>
              Have questions? Our team is here to help. Whether you're interested in our services, need technical support, or want to discuss enterprise solutions, don't hesitate to reach out.
            </Typography>
            <PrimaryButton size="large" onClick={() => navigate('/support')}>
              Contact Support
            </PrimaryButton>
          </Grid>
        </Grid>
      </SectionContainer>
    </RootBackground>
  );
};

export default Home;
