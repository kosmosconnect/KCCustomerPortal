import { FC } from 'react';
import { Box, Typography, Button, Grid, Container, Stack } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ArrowForward, Satellite, Shield, School, Public } from '@mui/icons-material';

const shimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`;
const fadeUp = keyframes`0%{opacity:0;transform:translateY(28px)}100%{opacity:1;transform:translateY(0)}`;
const pulse = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(0,180,216,.4)}70%{box-shadow:0 0 0 10px rgba(0,180,216,0)}`;

const Root = styled(Box)({ background: 'transparent', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative', zIndex: 1 });
const GradText = styled('span')({ background: 'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 60%,#9D4EDD 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: `${shimmer} 4s linear infinite` });
const PrimaryBtn = styled(Button)({ background: '#2563EB', color: '#fff', padding: '13px 32px', borderRadius: '50px', textTransform: 'none', fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 8px 32px rgba(37,99,235,.4)', transition: 'all .3s', '&:hover': { background: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 12px 40px rgba(37,99,235,.55)' } });

type TimelineItem = { year: string; title: string; desc: string };
const timeline: TimelineItem[] = [
  { year: '2023', title: 'Founded', desc: 'Kosmos Connect was founded with a mission to democratise space situational awareness and make real orbital data accessible to everyone.' },
  { year: '2024', title: 'AIC T-Hub ORBIT Cohort 2', desc: 'Selected for India\'s premier deep-tech incubator at T-Hub, Hyderabad — validating our technology and business model with expert mentorship.' },
  { year: '2024', title: 'AWS Space Accelerator APJ', desc: 'Accepted into the AWS Space Accelerator for Asia-Pacific & Japan — gaining cloud credits, technical support, and global network access.' },
  { year: '2025', title: 'India / Australia / Japan Programme', desc: 'Selected for the trilateral space innovation programme, expanding our international partnerships and market reach across three continents.' },
  { year: '2025', title: 'Pre-seed Round', desc: 'Raising pre-seed funding to complete MVP development, secure MoUs with planetariums and schools, and begin first subscriptions.' },
  { year: '2027–28', title: 'First Light', desc: 'Planned launch of Kosmos Connect Live 1.0 — a 12U CubeSat multi-spectral observatory entering commercial operations in Q1 2028.' },
];

type Value = { icon: JSX.Element; title: string; desc: string };
const values: Value[] = [
  { icon: <Satellite />, title: 'Innovation', desc: 'Pushing the boundaries of what\'s possible with nano-satellite technology, AI, and immersive delivery platforms.' },
  { icon: <Public />, title: 'Accessibility', desc: 'Making space science available to everyone — from rural schools in India to science centres in Australia and Japan.' },
  { icon: <Shield />, title: 'Science First', desc: 'Every feature, every decision is grounded in real astronomy and space science. We deliver genuine data, not simulations.' },
  { icon: <School />, title: 'Education', desc: 'Empowering the next generation of astronomers, engineers, and space scientists through hands-on access to orbital telescopes.' },
];

const About: FC = () => {
  const navigate = useNavigate();

  return (
    <Root>
      {/* HERO */}
      <Box sx={{ position: 'relative', zIndex: 1, pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 }, textAlign: 'center', px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(0,180,216,.1)', border: '1px solid rgba(0,180,216,.3)', borderRadius: '50px', px: 2, py: 0.75, mb: 4, animation: `${fadeUp} 0.8s ease both` }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4D8', animation: `${pulse} 2s ease-in-out infinite` }} />
            <Typography sx={{ color: '#00B4D8', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px' }}>ABOUT KOSMOS CONNECT</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-2px', mb: 3, animation: `${fadeUp} 0.9s 0.1s ease both` }}>
            Transforming How<br /><GradText>Humanity Explores Space</GradText>
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: 'rgba(255,255,255,.65)', maxWidth: 680, mx: 'auto', mb: 5, lineHeight: 1.8, animation: `${fadeUp} 1s 0.2s ease both` }}>
            We are building the world's first Nano Observatory-as-a-Service — making real orbital telescope access as simple as booking a meeting room, for everyone from schoolchildren to space agencies.
          </Typography>
        </Container>
      </Box>

      {/* ASTRONAUT IMAGE STRIP */}
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', height: { xs: 240, md: 380 }, overflow: 'hidden' }}>
        <Box component="img" src="/assets/images/deep-space.jpg" alt="Astronaut floating above Earth" sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(2,8,24,0.55) 0%,rgba(2,8,24,0.1) 40%,rgba(2,8,24,0.1) 60%,rgba(2,8,24,0.7) 100%)' }} />
        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 2 }}>
          <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '1.6rem', md: '2.8rem' }, lineHeight: 1.15, textShadow: '0 2px 20px rgba(0,0,0,0.9)', mb: 1.5 }}>Democratising Space<br /><span style={{ color: '#00B4D8' }}>One Orbit at a Time</span></Typography>
          <Typography sx={{ color: 'rgba(255,255,255,.75)', fontSize: { xs: '0.85rem', md: '1rem' }, maxWidth: 500, lineHeight: 1.7, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>Founded in 2023 · Hyderabad, India · Building the world's first Nano Observatory-as-a-Service</Typography>
        </Box>
      </Box>

      {/* MISSION & VISION */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: '24px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(0,180,216,.2)', height: '100%' }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(0,180,216,.1)', border: '1px solid rgba(0,180,216,.3)', borderRadius: '50px', px: 2, py: 0.5, mb: 3 }}>
                  <Typography sx={{ color: '#00B4D8', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px' }}>OUR MISSION</Typography>
                </Box>
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1.2, mb: 2.5 }}>
                  Democratise Space for a Billion Learners
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8 }}>
                  Democratise space situational awareness and planetary-defence understanding for a billion learners — making real orbital data accessible, interactive, and curriculum-aligned for schools, science centres, and researchers worldwide.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: '24px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(157,78,221,.2)', height: '100%' }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(157,78,221,.1)', border: '1px solid rgba(157,78,221,.3)', borderRadius: '50px', px: 2, py: 0.5, mb: 3 }}>
                  <Typography sx={{ color: '#9D4EDD', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px' }}>OUR VISION</Typography>
                </Box>
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1.2, mb: 2.5 }}>
                  A Virtual Surveillance Observatory for Earth
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8 }}>
                  In the age of AI and computing, we are transforming how humanity explores space — monetising access to cosmic events through a network of multispectral ground and in-orbit telescopes with accurate AI models, accessible to researchers, students, and space asset operators worldwide.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* THE PRODUCT */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>The Product</Typography>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.6rem' }, lineHeight: 1.2, mb: 3 }}>
                Kosmos Connect Live 1.0
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, mb: 4 }}>
                A 6U–12U CubeSat carrying a 120mm scientific-grade optical telescope, UV/NIR imager, X-ray detector, and gamma-ray burst monitor. Fully autonomous, cloud-connected, and accessible from any device.
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, mb: 4 }}>
                Observation windows are bookable like a conference room — individuals, schools, and institutions can reserve time on our orbital telescope and receive calibrated data within minutes of observation.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                {['6U–12U CubeSat', 'LEO ~550km', 'Multi-Spectral', 'AWS-Powered', 'Q1 2028 Launch'].map((tag, i) => (
                  <Box key={i} sx={{ px: 2, py: 0.6, borderRadius: '20px', background: 'rgba(0,180,216,.08)', border: '1px solid rgba(0,180,216,.2)' }}>
                    <Typography sx={{ color: '#00B4D8', fontSize: '0.78rem', fontWeight: 600 }}>{tag}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: '24px', background: 'linear-gradient(135deg,rgba(157,78,221,.08),rgba(0,180,216,.06))', border: '1px solid rgba(0,180,216,.2)', textAlign: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: 140,
                    height: 140,
                    mx: 'auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 0 80px rgba(0,180,216,.35), 0 0 60px rgba(0,180,216,.15)',
                    border: '1px solid rgba(0,180,216,.3)',
                    background: 'radial-gradient(circle at 30% 30%, rgba(0,180,216,.08), rgba(2,8,24,.9))',
                    mb: 3,
                  }}
                >
                  <Box component="img" src="/assets/images/Rotating_earth_animated_transparent.gif" alt="Rotating Earth" sx={{ width: '100%', height: '100%', objectFit: 'contain', background: 'transparent', position: 'relative', zIndex: 2 }} />
                  <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,0,0,0) 45%, rgba(0,8,24,0.35) 80%, rgba(0,8,24,0.7) 100%)', zIndex: 1 }} />
                </Box>
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 2 }}>Astronomy Science Capabilities</Typography>
                {[
                  { label: 'Asteroid & NEO Tracking', color: '#00B4D8' },
                  { label: 'Exoplanet Transit Photometry', color: '#9D4EDD' },
                  { label: 'Variable Star Monitoring', color: '#00B4D8' },
                  { label: 'GRB Detection & Localisation', color: '#9D4EDD' },
                  { label: 'Space Debris Cataloguing', color: '#00B4D8' },
                  { label: 'Solar System Object Imaging', color: '#9D4EDD' },
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1, borderBottom: i < 5 ? '1px solid rgba(255,255,255,.05)' : 'none', textAlign: 'left' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,.7)', fontSize: '0.88rem' }}>{item.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TIMELINE */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Our Journey</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>From Idea to Orbit</Typography>
          </Box>
          <Box sx={{ position: 'relative' }}>
            {/* Vertical line */}
            <Box sx={{ position: 'absolute', left: { xs: 20, md: '50%' }, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(180deg,transparent,rgba(0,180,216,.4),rgba(157,78,221,.4),transparent)', display: { xs: 'none', md: 'block' } }} />
            {timeline.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: i % 2 === 0 ? 'flex-end' : 'flex-start' }, mb: 4, position: 'relative' }}>
                {/* Center dot */}
                <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 14, height: 14, borderRadius: '50%', background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)', boxShadow: '0 0 16px rgba(0,180,216,.5)', zIndex: 1 }} />
                <Box sx={{ width: { xs: '100%', md: '45%' }, p: 3, borderRadius: '16px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.25)', background: 'rgba(0,180,216,.04)' } }}>
                  <Typography sx={{ color: '#00B4D8', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', mb: 0.75 }}>{item.year}</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* VALUES */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Our Values</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>What Drives Us</Typography>
          </Box>
          <Grid container spacing={3}>
            {values.map((v, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p: 3.5, borderRadius: '20px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', textAlign: 'center', height: '100%', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.3)', background: 'rgba(0,180,216,.04)', transform: 'translateY(-6px)' } }}>
                  <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(157,78,221,.2),rgba(0,180,216,.2))', border: '1px solid rgba(0,180,216,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2.5, color: '#00B4D8' }}>{v.icon}</Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', mb: 1.5 }}>{v.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', lineHeight: 1.7 }}>{v.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PARTNERS */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Partners & Backers</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>Supported by the Best</Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center" flexWrap="wrap" useFlexGap>
            {[
              { name: 'AIC T-Hub ORBIT Cohort 2', sub: 'Deep-Tech Incubator · Hyderabad, India' },
              { name: 'AWS Space Accelerator APJ', sub: 'Amazon Web Services · Asia-Pacific & Japan' },
              { name: 'India / Australia / Japan', sub: 'Trilateral Space Innovation Programme' },
            ].map((p, i) => (
              <Box key={i} sx={{ p: 3, borderRadius: '16px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(0,180,216,.2)', textAlign: 'center', minWidth: 220, transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.4)', background: 'rgba(0,180,216,.05)', transform: 'translateY(-4px)' } }}>
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>{p.name}</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.45)', fontSize: '0.78rem' }}>{p.sub}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', p: { xs: 4, md: 8 }, borderRadius: '28px', background: 'linear-gradient(135deg,rgba(157,78,221,.12) 0%,rgba(0,180,216,.1) 100%)', border: '1px solid rgba(0,180,216,.2)' }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Join the Mission</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 3 }}>
              Be Part of the<br /><GradText>Space Revolution</GradText>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', maxWidth: 500, mx: 'auto', mb: 5, lineHeight: 1.8 }}>
              Whether you're a researcher, educator, investor, or space enthusiast — there's a place for you in the Kosmos Connect ecosystem.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <PrimaryBtn size="large" endIcon={<ArrowForward />} onClick={() => navigate('/register')}>Get Early Access</PrimaryBtn>
              <Button onClick={() => navigate('/contact')} sx={{ color: '#00B4D8', border: '2px solid rgba(0,180,216,.4)', borderRadius: '50px', px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, '&:hover': { border: '2px solid #00B4D8', background: 'rgba(0,180,216,.08)' } }}>Contact Us</Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Root>
  );
};

export default About;
