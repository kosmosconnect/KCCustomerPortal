import { FC } from 'react';
import { Box, Typography, Button, Grid, Container, Stack } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowForward } from '@mui/icons-material';

const shimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`;
const fadeUp = keyframes`0%{opacity:0;transform:translateY(28px)}100%{opacity:1;transform:translateY(0)}`;
const pulse = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(0,180,216,.4)}70%{box-shadow:0 0 0 10px rgba(0,180,216,0)}`;

const Root = styled(Box)({ background: 'transparent', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative', zIndex: 1 });
const GradText = styled('span')({ background: 'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 60%,#9D4EDD 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: `${shimmer} 4s linear infinite` });
const PrimaryBtn = styled(Button)({ background: '#2563EB', color: '#fff', padding: '13px 32px', borderRadius: '50px', textTransform: 'none', fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 8px 32px rgba(37,99,235,.4)', transition: 'all .3s', '&:hover': { background: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 12px 40px rgba(37,99,235,.55)' } });

type Tier = { title: string; price: string; period: string; desc: string; features: string[]; highlight: boolean; cta: string };
const tiers: Tier[] = [
  {
    title: 'Minute Packs',
    price: 'Flexible',
    period: 'pay-as-you-go',
    desc: 'Purchase observation minutes and use them whenever you need — perfect for individual researchers and enthusiasts.',
    features: ['Purchase observation time in blocks', 'Target-of-opportunity access', 'Real-time data delivery', 'Web & app dashboard access', 'Community support', 'Data export (FITS format)'],
    highlight: false,
    cta: 'Get Started',
  },
  {
    title: 'School Blocks',
    price: 'Custom',
    period: 'per semester',
    desc: 'Curriculum-aligned bulk observation hours with educator tools, teacher guides, and student assessment rubrics.',
    features: ['Bulk observation hours', 'Curriculum-aligned content', 'Teacher guides & materials', 'Student assessment tools', 'Regional language support', 'Dedicated education support'],
    highlight: true,
    cta: 'Contact Us',
  },
  {
    title: 'Annual Subscription',
    price: 'Enterprise',
    period: 'per year',
    desc: 'Unlimited access with dedicated support, custom integrations, and priority scheduling for institutions.',
    features: ['Unlimited observation hours', 'Priority scheduling', 'Dedicated account manager', 'Custom API integrations', 'Planetarium dome feeds', 'SLA-backed uptime'],
    highlight: false,
    cta: 'Contact Sales',
  },
  {
    title: 'Community Nights',
    price: 'Contact',
    period: 'per event',
    desc: 'Group observation events for public outreach, CSR initiatives, and science communication programs.',
    features: ['Group observation events', 'Live presenter support', 'Educational content packs', 'Public engagement tools', 'CSR partnership options', 'Media & press access'],
    highlight: false,
    cta: 'Enquire Now',
  },
];

type Customer = { emoji: string; title: string; desc: string };
const customers: Customer[] = [
  { emoji: '🏛️', title: 'National Planetariums', desc: 'Annual venue subscriptions with full dome integration and live-from-orbit content.' },
  { emoji: '🔬', title: 'Science Centres', desc: 'Interactive exhibits and public engagement programs powered by real orbital data.' },
  { emoji: '🚐', title: 'Mobile Domes', desc: 'Portable planetarium systems for outreach events, schools, and community programs.' },
  { emoji: '🎓', title: 'University Clubs', desc: 'Astronomy clubs and research programs with access to multi-spectral telescope data.' },
  { emoji: '🤝', title: 'CSR Sponsors', desc: 'Corporate social responsibility partnerships for science education and public outreach.' },
  { emoji: '👨‍🔬', title: 'Individual Enthusiasts', desc: 'Amateur astronomers and space watchers with pay-as-you-go observation access.' },
];

const Pricing: FC = () => {
  const navigate = useNavigate();

  return (
    <Root>
      {/* HERO */}
      <Box sx={{ position: 'relative', zIndex: 1, pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 }, textAlign: 'center', px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(0,180,216,.1)', border: '1px solid rgba(0,180,216,.3)', borderRadius: '50px', px: 2, py: 0.75, mb: 4, animation: `${fadeUp} 0.8s ease both` }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4D8', animation: `${pulse} 2s ease-in-out infinite` }} />
            <Typography sx={{ color: '#00B4D8', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px' }}>PRICING · PAY-AS-YOU-OBSERVE</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-2px', mb: 3, animation: `${fadeUp} 0.9s 0.1s ease both` }}>
            Flexible Plans for<br /><GradText>Every Explorer</GradText>
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: 'rgba(255,255,255,.65)', maxWidth: 620, mx: 'auto', mb: 5, lineHeight: 1.8, animation: `${fadeUp} 1s 0.2s ease both` }}>
            From individual enthusiasts to large institutions — book orbital telescope time the way you book a meeting room. Transparent, flexible, and accessible.
          </Typography>
        </Container>
      </Box>

      {/* PRICING TIERS */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {tiers.map((tier, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{
                  p: 3.5,
                  borderRadius: '24px',
                  background: tier.highlight
                    ? 'linear-gradient(135deg,rgba(157,78,221,.15),rgba(0,180,216,.12))'
                    : 'rgba(255,255,255,.03)',
                  border: tier.highlight ? '1px solid rgba(0,180,216,.4)' : '1px solid rgba(255,255,255,.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all .35s',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 24px 60px rgba(0,0,0,.5)', border: '1px solid rgba(0,180,216,.4)' },
                }}>
                  {tier.highlight && (
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#9D4EDD,#00B4D8)' }} />
                  )}
                  {tier.highlight && (
                    <Box sx={{ position: 'absolute', top: 16, right: 16, px: 1.5, py: 0.4, borderRadius: '20px', background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)' }}>
                      <Typography sx={{ color: '#fff', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px' }}>POPULAR</Typography>
                    </Box>
                  )}
                  <Typography sx={{ color: '#00B4D8', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '2px', mb: 1 }}>PLAN</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem', mb: 0.5 }}>{tier.title}</Typography>
                  <Typography sx={{ color: tier.highlight ? '#00B4D8' : '#9D4EDD', fontWeight: 700, fontSize: '1.4rem', mb: 0.25 }}>{tier.price}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: '0.75rem', mb: 2.5 }}>{tier.period}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: '0.85rem', lineHeight: 1.6, mb: 3 }}>{tier.desc}</Typography>
                  <Stack spacing={1.25} sx={{ mb: 3, flex: 1 }}>
                    {tier.features.map((f, j) => (
                      <Box key={j} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <CheckCircle sx={{ color: '#00B4D8', fontSize: '1rem', flexShrink: 0, mt: 0.2 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,.7)', fontSize: '0.83rem', lineHeight: 1.5 }}>{f}</Typography>
                      </Box>
                    ))}
                  </Stack>
                  <PrimaryBtn fullWidth onClick={() => navigate(tier.cta === 'Get Started' ? '/register' : '/contact')}>
                    {tier.cta}
                  </PrimaryBtn>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* WHO WE SERVE */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Who We Serve</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>For Every Audience</Typography>
          </Box>
          <Grid container spacing={3}>
            {customers.map((c, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box sx={{ p: 3, borderRadius: '16px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', textAlign: 'center', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.25)', background: 'rgba(0,180,216,.04)', transform: 'translateY(-4px)' } }}>
                  <Typography sx={{ fontSize: '2.2rem', mb: 1.5 }}>{c.emoji}</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 0.75 }}>{c.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>{c.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ASTRONOMY SCIENCE NOTE */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Science Access</Typography>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.2, mb: 3 }}>Real Astronomy. Real Data.</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, mb: 3 }}>
                Every observation window delivers calibrated FITS-format data — the same format used by professional observatories worldwide. Students and researchers get access to genuine scientific datasets, not simulations.
              </Typography>
              {['Calibrated FITS data files', 'Astrometry.net plate solving', 'Photometric light curves', 'Spectral energy distributions', 'Open data for education'].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.25 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)', flexShrink: 0 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,.7)', fontSize: '0.9rem' }}>{item}</Typography>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: '24px', background: 'linear-gradient(135deg,rgba(157,78,221,.08),rgba(0,180,216,.06))', border: '1px solid rgba(0,180,216,.2)' }}>
                <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', mb: 3 }}>WHAT YOU CAN OBSERVE</Typography>
                {[
                  { label: 'Near-Earth Asteroids', icon: '☄️' },
                  { label: 'Exoplanet Transits', icon: '🪐' },
                  { label: 'Variable Stars & Supernovae', icon: '⭐' },
                  { label: 'Gamma-Ray Burst Follow-up', icon: '💥' },
                  { label: 'Satellite & Debris Tracking', icon: '🛰️' },
                  { label: 'Solar System Objects', icon: '🌌' },
                ].map((obs, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1.25, borderBottom: i < 5 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
                    <Typography sx={{ fontSize: '1.2rem' }}>{obs.icon}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,.75)', fontSize: '0.9rem' }}>{obs.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ENTERPRISE CTA */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', p: { xs: 4, md: 8 }, borderRadius: '28px', background: 'linear-gradient(135deg,rgba(157,78,221,.12) 0%,rgba(0,180,216,.1) 100%)', border: '1px solid rgba(0,180,216,.2)', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(157,78,221,.15),transparent)', top: -100, right: -100, filter: 'blur(40px)', pointerEvents: 'none' }} />
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Enterprise</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 3 }}>
              Custom Solutions for<br /><GradText>Large Organizations</GradText>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', maxWidth: 520, mx: 'auto', mb: 5, lineHeight: 1.8 }}>
              Need a custom plan? Contact our team to discuss enterprise pricing, dedicated support, dome integration, and bespoke data pipelines.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <PrimaryBtn size="large" endIcon={<ArrowForward />} onClick={() => navigate('/contact')}>Contact Sales</PrimaryBtn>
              <Button onClick={() => navigate('/features')} sx={{ color: '#00B4D8', border: '2px solid rgba(0,180,216,.4)', borderRadius: '50px', px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, '&:hover': { border: '2px solid #00B4D8', background: 'rgba(0,180,216,.08)' } }}>View All Features</Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Root>
  );
};

export default Pricing;
