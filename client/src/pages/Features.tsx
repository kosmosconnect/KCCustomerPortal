import { FC } from 'react';
import { Box, Typography, Button, Grid, Container, Stack } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Satellite, Shield, School, Visibility, Cloud, Radar, ArrowForward, FlashOn, BubbleChart, Biotech } from '@mui/icons-material';

const shimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`;
const fadeUp = keyframes`0%{opacity:0;transform:translateY(28px)}100%{opacity:1;transform:translateY(0)}`;
const pulse = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(0,180,216,.4)}70%{box-shadow:0 0 0 10px rgba(0,180,216,0)}`;
const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}`;

const Root = styled(Box)({ background: 'transparent', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative', zIndex: 1 });
const GradText = styled('span')({ background: 'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 60%,#9D4EDD 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: `${shimmer} 4s linear infinite` });
const PrimaryBtn = styled(Button)({ background: '#2563EB', color: '#fff', padding: '13px 32px', borderRadius: '50px', textTransform: 'none', fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 8px 32px rgba(37,99,235,.4)', transition: 'all .3s', '&:hover': { background: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 12px 40px rgba(37,99,235,.55)' } });

type PayloadSpec = { band: string; spec: string; color: string; desc: string };
const payloads: PayloadSpec[] = [
  { band: 'OPTICAL', spec: '120mm f/7.5 Refractor', color: '#00B4D8', desc: 'Scientific-grade optical imaging for asteroid tracking, satellite monitoring, and stellar photometry. Sub-arcsecond pointing accuracy.' },
  { band: 'UV / NIR', spec: 'Ultraviolet & Near-Infrared', color: '#9D4EDD', desc: 'UV and near-infrared channels reveal hot stellar populations, active galactic nuclei, and near-Earth object composition.' },
  { band: 'X-RAY', spec: 'Soft X-Ray Detector', color: '#F59E0B', desc: 'Detects X-ray transients, pulsar timing, and high-energy astrophysical events invisible to ground-based observatories.' },
  { band: 'GAMMA', spec: 'Gamma-Ray Burst Monitor', desc: 'Real-time GRB detection and localisation — enabling rapid follow-up observations within seconds of a burst trigger.', color: '#EF4444' },
];

type Feature = { icon: JSX.Element; title: string; desc: string; tags: string[] };
const aiFeatures: Feature[] = [
  { icon: <Radar />, title: 'Satellite & Debris Identification', desc: 'High-performance AI identifies resident space objects in noisy imagery, classifying by size, orbit, and threat level in real time.', tags: ['Computer Vision', 'LEO/MEO/GEO', 'Real-time'] },
  { icon: <FlashOn />, title: 'Image Reconstruction', desc: 'Reconstructs sharper visuals from raw sensor data without expensive hardware upgrades — maximising scientific yield per pass.', tags: ['Super-Resolution', 'Denoising', 'ML Pipeline'] },
  { icon: <BubbleChart />, title: 'Event Prediction & Alerts', desc: 'Predicts conjunction risks, solar flare impacts, and GRB windows. Pushes alerts to operators, educators, and researchers instantly.', tags: ['Predictive Analytics', 'Push Alerts', 'AWS Lambda'] },
  { icon: <Biotech />, title: 'Spectral Analysis', desc: 'Automated spectral classification of observed objects — enabling composition analysis of asteroids, comets, and exoplanet atmospheres.', tags: ['Spectroscopy', 'ML Classification', 'Open Data'] },
];

type BizModel = { title: string; price: string; desc: string; who: string };
const bizModels: BizModel[] = [
  { title: 'Minute Packs', price: 'Flexible', desc: 'Pay-as-you-observe. Purchase observation minutes and use them whenever you need — perfect for individual researchers and enthusiasts.', who: 'Researchers · Enthusiasts' },
  { title: 'School Blocks', price: 'Custom', desc: 'Bulk observation hours with curriculum-aligned content, teacher guides, and student assessment tools.', who: 'Schools · Universities' },
  { title: 'Annual Subscriptions', price: 'Enterprise', desc: 'Unlimited access with dedicated support, custom integrations, and priority scheduling for institutions.', who: 'Planetariums · Science Centres' },
  { title: 'Community Nights', price: 'Contact Us', desc: 'Group observation events for public outreach, CSR initiatives, and science communication programs.', who: 'CSR Partners · Public Events' },
];

const Features: FC = () => {
  const navigate = useNavigate();

  return (
    <Root>
      {/* HERO */}
      <Box sx={{ position: 'relative', zIndex: 1, pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 }, textAlign: 'center', px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(0,180,216,.1)', border: '1px solid rgba(0,180,216,.3)', borderRadius: '50px', px: 2, py: 0.75, mb: 4, animation: `${fadeUp} 0.8s ease both` }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4D8', animation: `${pulse} 2s ease-in-out infinite` }} />
            <Typography sx={{ color: '#00B4D8', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px' }}>KOSMOS CONNECT LIVE 1.0 · FEATURES</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-2px', mb: 3, animation: `${fadeUp} 0.9s 0.1s ease both` }}>
            A Complete<br /><GradText>Space Observatory</GradText><br />in Your Pocket
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: 'rgba(255,255,255,.65)', maxWidth: 660, mx: 'auto', mb: 5, lineHeight: 1.8, animation: `${fadeUp} 1s 0.2s ease both` }}>
            From a 6U–12U CubeSat with multi-spectral telescopes to AI-powered analytics and immersive delivery platforms — everything you need to explore the universe, live from orbit.
          </Typography>
          <PrimaryBtn endIcon={<ArrowForward />} onClick={() => navigate('/register')} sx={{ animation: `${fadeUp} 1s 0.3s ease both` }}>
            Reserve Observation Window
          </PrimaryBtn>
        </Container>
      </Box>

      {/* PAYLOAD SPECS */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>CubeSat Payload</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2 }}>6U–12U Multi-Spectral Observatory</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: '1rem', maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
              Four spectral channels in a single compact platform — seeing the universe in wavelengths invisible to the naked eye, 24/7 from low Earth orbit.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {payloads.map((p, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p: 3.5, borderRadius: '20px', background: 'rgba(255,255,255,.03)', border: `1px solid ${p.color}30`, height: '100%', transition: 'all .35s', position: 'relative', overflow: 'hidden', '&:hover': { border: `1px solid ${p.color}60`, background: `${p.color}08`, transform: 'translateY(-6px)', boxShadow: `0 20px 50px rgba(0,0,0,.4)` } }}>
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg,transparent,${p.color},transparent)` }} />
                  <Typography sx={{ color: p.color, fontWeight: 800, fontSize: '0.75rem', letterSpacing: '3px', mb: 1 }}>{p.band}</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 2 }}>{p.spec}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', lineHeight: 1.7 }}>{p.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Satellite visual */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(157,78,221,.2),rgba(0,180,216,.2))', border: '2px solid rgba(0,180,216,.3)', boxShadow: '0 0 60px rgba(0,180,216,.2)', animation: `${float} 5s ease-in-out infinite` }}>
              <Satellite sx={{ color: '#00B4D8', fontSize: '3.5rem' }} />
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: '0.8rem', mt: 2, letterSpacing: '2px' }}>KOSMOS CONNECT LIVE 1.0 · LEO ORBIT · ~550KM ALTITUDE</Typography>
          </Box>
        </Container>
      </Box>

      {/* AI FEATURES */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>AI & Analytics</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>Intelligence at the Speed of Light</Typography>
          </Box>
          <Grid container spacing={3}>
            {aiFeatures.map((f, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box sx={{ p: 3.5, borderRadius: '20px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', height: '100%', transition: 'all .3s', '&:hover': { border: '1px solid rgba(157,78,221,.3)', background: 'rgba(157,78,221,.05)', transform: 'translateY(-4px)' } }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: '14px', background: 'linear-gradient(135deg,rgba(157,78,221,.25),rgba(0,180,216,.2))', border: '1px solid rgba(157,78,221,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, color: '#00B4D8' }}>{f.icon}</Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', mb: 1.5 }}>{f.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.88rem', lineHeight: 1.7, mb: 2.5 }}>{f.desc}</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {f.tags.map((t, j) => (
                      <Box key={j} sx={{ px: 1.5, py: 0.4, borderRadius: '20px', background: 'rgba(0,180,216,.1)', border: '1px solid rgba(0,180,216,.2)' }}>
                        <Typography sx={{ color: '#00B4D8', fontSize: '0.72rem', fontWeight: 600 }}>{t}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SSA SECTION */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Space Situational Awareness</Typography>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.6rem' }, lineHeight: 1.2, mb: 3 }}>Planetary Defense & SSA Monitoring</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, mb: 4 }}>
                Kosmos Connect Live provides real-time Space Situational Awareness — tracking satellites, debris, near-Earth objects, and space weather events. Alerts are delivered within seconds of detection.
              </Typography>
              {[
                'Autonomous satellite & debris tracking',
                'Near-Earth Object (NEO) monitoring',
                'Gamma-Ray Burst (GRB) real-time alerts',
                'Coronal Mass Ejection (CME) warnings',
                'Solar flare impact predictions',
                'Conjunction risk assessments',
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)', flexShrink: 0 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,.75)', fontSize: '0.9rem' }}>{item}</Typography>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: '24px', background: 'linear-gradient(135deg,rgba(157,78,221,.08),rgba(0,180,216,.06))', border: '1px solid rgba(0,180,216,.2)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Shield sx={{ color: '#00B4D8', fontSize: '2rem' }} />
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>Live SSA Dashboard</Typography>
                </Box>
                {[
                  { label: 'Objects Tracked', value: '27,000+', color: '#00B4D8' },
                  { label: 'Alert Latency', value: '< 3 seconds', color: '#9D4EDD' },
                  { label: 'Coverage', value: '24/7 · 365 days', color: '#00B4D8' },
                  { label: 'Spectral Channels', value: '4 (Opt/UV/X/γ)', color: '#9D4EDD' },
                ].map((stat, i) => (
                  <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5, borderBottom: i < 3 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                    <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: '0.88rem' }}>{stat.label}</Typography>
                    <Typography sx={{ color: stat.color, fontWeight: 700, fontSize: '0.95rem' }}>{stat.value}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* DELIVERY PLATFORMS */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Delivery Platforms</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>Access Space from Anywhere</Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              { icon: <Visibility sx={{ fontSize: '2rem' }} />, title: 'Web & App Dashboard', desc: 'Real-time data streams, interactive sky maps, booking interface, and alert notifications — accessible from any browser or mobile device.', color: '#00B4D8' },
              { icon: <School sx={{ fontSize: '2rem' }} />, title: 'Free-Roam VR 360°', desc: 'Multi-user immersive VR sessions where students and audiences can explore live orbital data in a photorealistic space environment.', color: '#9D4EDD' },
              { icon: <Cloud sx={{ fontSize: '2rem' }} />, title: 'Planetarium Dome', desc: 'Full-dome 8K projection system delivering live-from-orbit content to science centres, universities, and mobile dome operators.', color: '#2563EB' },
            ].map((p, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{ p: 4, borderRadius: '20px', background: 'rgba(255,255,255,.025)', border: `1px solid ${p.color}25`, height: '100%', transition: 'all .3s', '&:hover': { border: `1px solid ${p.color}50`, background: `${p.color}06`, transform: 'translateY(-6px)' } }}>
                  <Box sx={{ width: 60, height: 60, borderRadius: '16px', background: `${p.color}20`, border: `1px solid ${p.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, color: p.color }}>{p.icon}</Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 1.5 }}>{p.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.88rem', lineHeight: 1.7 }}>{p.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* AWS INFRA */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Infrastructure</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>Built on AWS · Designed for Space</Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              { title: 'NOaaS Data Lake', desc: 'Nano Observatory-as-a-Service — all observation data stored, processed, and served from AWS S3 and Athena.' },
              { title: 'AWS Ground Station', desc: 'Global ground station network integration for real-time satellite downlink and command uplink.' },
              { title: 'Operation Centre', desc: 'Mission control dashboard built on AWS for satellite health monitoring, scheduling, and anomaly detection.' },
              { title: 'Edge Processing', desc: 'On-orbit edge compute for initial data processing, reducing downlink bandwidth by up to 70%.' },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box sx={{ display: 'flex', gap: 2.5, p: 3, borderRadius: '16px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.25)', background: 'rgba(0,180,216,.04)' } }}>
                  <Cloud sx={{ color: '#00B4D8', fontSize: '1.8rem', flexShrink: 0, mt: 0.5 }} />
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>{item.title}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BUSINESS MODEL */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Business Model</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>Flexible Access for Every User</Typography>
          </Box>
          <Grid container spacing={3}>
            {bizModels.map((b, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p: 3.5, borderRadius: '20px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', height: '100%', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.3)', background: 'rgba(0,180,216,.04)', transform: 'translateY(-4px)' } }}>
                  <Typography sx={{ color: '#00B4D8', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px', mb: 1 }}>PLAN</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem', mb: 0.5 }}>{b.title}</Typography>
                  <Typography sx={{ color: '#9D4EDD', fontWeight: 700, fontSize: '0.9rem', mb: 2 }}>{b.price}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', lineHeight: 1.7, mb: 2 }}>{b.desc}</Typography>
                  <Box sx={{ px: 1.5, py: 0.5, borderRadius: '20px', background: 'rgba(157,78,221,.1)', border: '1px solid rgba(157,78,221,.2)', display: 'inline-block' }}>
                    <Typography sx={{ color: '#9D4EDD', fontSize: '0.72rem', fontWeight: 600 }}>{b.who}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', p: { xs: 4, md: 8 }, borderRadius: '28px', background: 'linear-gradient(135deg,rgba(157,78,221,.12) 0%,rgba(0,180,216,.1) 100%)', border: '1px solid rgba(0,180,216,.2)' }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Ready to Explore?</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 3 }}>
              Start Your Space Journey<br /><GradText>Today</GradText>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', maxWidth: 500, mx: 'auto', mb: 5, lineHeight: 1.8 }}>
              Join researchers, educators, and space enthusiasts already on the waitlist for Kosmos Connect Live 1.0.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <PrimaryBtn size="large" onClick={() => navigate('/register')}>Get Early Access</PrimaryBtn>
              <Button onClick={() => navigate('/pricing')} sx={{ color: '#00B4D8', border: '2px solid rgba(0,180,216,.4)', borderRadius: '50px', px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, '&:hover': { border: '2px solid #00B4D8', background: 'rgba(0,180,216,.08)' } }}>View Pricing</Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Root>
  );
};

export default Features;
