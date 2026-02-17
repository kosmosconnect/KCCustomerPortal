import { FC } from 'react';
import { Box, Typography, Button, Grid, Container, Stack } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ArrowForward, Shield, Radar, School, Visibility, Cloud, Speed, Public } from '@mui/icons-material';

const pulse = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(0,180,216,.5)}70%{box-shadow:0 0 0 10px rgba(0,180,216,0)}`;
const shimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`;
const twinkle = keyframes`0%,100%{opacity:.15}50%{opacity:1}`;
const fadeUp = keyframes`0%{opacity:0;transform:translateY(32px)}100%{opacity:1;transform:translateY(0)}`;
const orbitSpin = keyframes`0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}`;
const scanAnim = keyframes`0%{top:-2px}100%{top:100%}`;

const Root = styled(Box)({ background: 'transparent', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative', zIndex: 1 });
const GradText = styled('span')({ background: 'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 60%,#9D4EDD 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: `${shimmer} 4s linear infinite` });
const GlassCard = styled(Box)({
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
  padding: '28px',
  transition: 'all 0.4s ease',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '2px',
    background: 'linear-gradient(90deg,transparent,rgba(157,78,221,.8),rgba(0,180,216,.8),transparent)',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
} as any);
const PrimaryBtn = styled(Button)({ background: '#2563EB', color: '#fff', padding: '14px 36px', borderRadius: '50px', textTransform: 'none', fontWeight: 700, fontSize: '1rem', boxShadow: '0 8px 32px rgba(37,99,235,.4)', transition: 'all .3s', '&:hover': { background: '#1d4ed8', boxShadow: '0 12px 40px rgba(37,99,235,.55)', transform: 'translateY(-2px)' } });
const OutlineBtn = styled(Button)({ color: '#00B4D8', border: '2px solid rgba(0,180,216,.5)', padding: '12px 32px', borderRadius: '50px', textTransform: 'none', fontWeight: 600, fontSize: '1rem', transition: 'all .3s', '&:hover': { border: '2px solid #00B4D8', background: 'rgba(0,180,216,.1)', transform: 'translateY(-2px)' } });

type Telescope = { band: string; spec: string; color: string; icon: JSX.Element; desc: string; science: string[] };
const telescopes: Telescope[] = [
  { band: 'OPTICAL', spec: '120mm f/7.5 Refractor', color: '#00B4D8', icon: <Visibility />, desc: 'Scientific-grade optical imaging for asteroid tracking, satellite monitoring, and stellar photometry. Sub-arcsecond pointing accuracy.', science: ['Asteroid & NEO Tracking', 'Stellar Photometry', 'Satellite Monitoring', 'Exoplanet Transits'] },
  { band: 'UV / NIR', spec: 'Ultraviolet & Near-Infrared', color: '#9D4EDD', icon: <Radar />, desc: 'UV and near-infrared channels reveal hot stellar populations, active galactic nuclei, and near-Earth object composition.', science: ['Hot Stellar Populations', 'Active Galactic Nuclei', 'NEO Composition', 'Star-Forming Regions'] },
  { band: 'X-RAY', spec: 'Soft X-Ray Detector', color: '#F59E0B', icon: <Speed />, desc: 'Detects X-ray transients, pulsar timing, and high-energy astrophysical events invisible to ground-based observatories.', science: ['X-Ray Transients', 'Pulsar Timing', 'Black Hole Activity', 'Neutron Star Events'] },
  { band: 'GAMMA', spec: 'Gamma-Ray Burst Monitor', color: '#EF4444', icon: <Shield />, desc: 'Real-time GRB detection and localisation — enabling rapid follow-up observations within seconds of a burst trigger.', science: ['GRB Detection', 'Rapid Localisation', 'Afterglow Monitoring', 'Cosmological Events'] },
];

type Cap = { icon: JSX.Element; title: string; desc: string };
const capabilities: Cap[] = [
  { icon: <Shield />, title: 'SSA & Planetary Defense', desc: 'Autonomous tracking of satellites, debris, fast-movers, and anomalies. Real-time GRB, CME, and solar-flare alerts.' },
  { icon: <Radar />, title: 'AI Detection & Enhancement', desc: 'High-performance AI identifies resident space objects in noisy imagery, then reconstructs sharper visuals for maximum scientific yield.' },
  { icon: <School />, title: 'Education & Outreach', desc: 'Every school can access a live telescope in space. Curriculum-aligned, teacher-guided, assessment-ready for STEM programs.' },
  { icon: <Visibility />, title: 'Multi-Platform Delivery', desc: 'Web/App Dashboard · Free-Roam VR 360° · Immersive Planetarium Dome — one satellite, every screen.' },
  { icon: <Cloud />, title: 'AWS-Powered Infrastructure', desc: 'Operation Centre on AWS · NOaaS data lake · Global Ground Station Network for real-time downlink.' },
  { icon: <Public />, title: 'Open Science Data', desc: 'Calibrated FITS data delivered to researchers, students, and institutions within minutes of each observation pass.' },
];

type Problem = { num: string; title: string; desc: string };
const problems: Problem[] = [
  { num: '01', title: 'Weather & Ground Limits', desc: 'Clouds, light pollution, and day/night cycles block ground-based observation. You can\'t predict when conditions will cooperate.' },
  { num: '02', title: 'Fragmented Systems', desc: 'Today\'s space-watching tools don\'t interoperate — causing delays, lower quality, and missed discoveries.' },
  { num: '03', title: 'Access Inequality', desc: 'Most people lack telescopes, mentors, or dark-sky access. Optical telescopes are limited to nighttime and clear weather.' },
  { num: '04', title: 'Slow Science', desc: 'Researchers wait days or weeks for observation windows. Target-of-opportunity events are missed by minutes.' },
  { num: '05', title: 'SSA Visibility Gaps', desc: 'Limited transparent SSA data restricts nations from independently monitoring debris, conjunctions, and on-orbit activities.' },
  { num: '06', title: 'Sovereignty & Trust', desc: 'Many countries rely on foreign observatories, creating policy, security, and trust concerns for national space programs.' },
];

type Stat = { value: string; label: string };
const stats: Stat[] = [
  { value: '25M+', label: 'Active Sky Watchers' },
  { value: '8,700', label: 'Planetariums Worldwide' },
  { value: '42K', label: 'Astronomy Schools' },
  { value: '$10B+', label: 'Total Addressable Market' },
];

type RoadmapStep = { phase: string; label: string; period: string; items: string[] };
const roadmap: RoadmapStep[] = [
  { phase: '1', label: 'Pre-seed Execution', period: 'Dec 2025 – Apr 2026', items: ['App Development', 'MVP Platform', 'MoUs & CSR Partners', 'First Subscriptions'] },
  { phase: '2', label: 'Series A Build', period: 'May 2026 – Mar 2027', items: ['VR/Web Engineering', 'Qualification Tracks', 'Ops Console', 'Booking Integration'] },
  { phase: '3', label: 'Launch (12U Demo)', period: 'Q4 2027 – Q1 2028', items: ['Full Commissioning', 'Quicklook Pipeline', 'Ground Infrastructure', 'International Onboarding'] },
  { phase: '4', label: 'Commercial "Live from Orbit"', period: 'Q1–Q2 2028', items: ['Minute Booking Windows', 'Target-of-Opportunity Shows', 'First-Light Events', 'Full Commercial Ops'] },
];

const Home: FC = () => {
  const navigate = useNavigate();
  const stars = Array.from({ length: 80 }, (_, i) => ({ id: i, size: Math.random() * 2.5 + 0.5, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, delay: `${Math.random() * 5}s` }));

  return (
    <Root>
      {/* Starfield twinkle overlay */}
      <Box style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {stars.map(s => (
          <Box key={s.id} style={{ position: 'absolute', width: s.size, height: s.size, borderRadius: '50%', background: '#fff', top: s.top, left: s.left, animation: `${twinkle} 3s ${s.delay} ease-in-out infinite` }} />
        ))}
      </Box>

      {/* HERO */}
      <Box sx={{ position: 'relative', zIndex: 1, pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 }, textAlign: 'center', px: 2 }}>
        <Box sx={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,180,216,.4),transparent)', animation: `${scanAnim} 6s linear infinite`, pointerEvents: 'none' }} />
        <Container maxWidth="lg">
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(0,180,216,.1)', border: '1px solid rgba(0,180,216,.35)', borderRadius: '50px', px: 2, py: 0.75, mb: 4, animation: `${fadeUp} 0.8s ease both` }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4D8', animation: `${pulse} 2s ease-in-out infinite` }} />
            <Typography sx={{ color: '#00B4D8', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px' }}>KOSMOS CONNECT LIVE · FIRST LIGHT 2027</Typography>
          </Box>

          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' }, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-2px', mb: 3, animation: `${fadeUp} 0.9s 0.1s ease both` }}>
            THE UNIVERSE<br /><GradText>LIVE FROM ORBIT</GradText>
          </Typography>

          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: 'rgba(255,255,255,.7)', maxWidth: 720, mx: 'auto', mb: 5, lineHeight: 1.8, animation: `${fadeUp} 1s 0.2s ease both` }}>
            World's first <strong style={{ color: '#00B4D8' }}>Nano Observatory-as-a-Service</strong> — eight orbital telescopes circling Earth (Optical, UV/NIR, X-Ray, Gamma) bookable like a calendar slot, accessible from any screen.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" sx={{ animation: `${fadeUp} 1s 0.3s ease both` }}>
            <PrimaryBtn size="large" endIcon={<ArrowForward />} onClick={() => navigate('/register')}>Reserve Observation Window</PrimaryBtn>
            <OutlineBtn size="large" onClick={() => navigate('/features')}>Explore Features</OutlineBtn>
          </Stack>

          {/* Orbital visualization: Earth */}
          <Box sx={{ position: 'relative', width: { xs: 250, md: 320 }, height: { xs: 250, md: 320 }, mx: 'auto', mt: 8, animation: `${fadeUp} 1s 0.4s ease both`, overflow: 'visible' }}>
            {/* rings */}
            {[0, 1, 2].map((ring) => (
              <Box
                key={ring}
                sx={{
                  position: 'absolute',
                  inset: `${ring * 10}px`,
                  borderRadius: '50%',
                  border: `1px solid rgba(0,180,216,${0.16 - ring * 0.03})`,
                  backdropFilter: 'blur(3px)',
                  animation: `${orbitSpin} ${22 - ring * 4}s linear infinite`,
                  animationDirection: ring % 2 ? 'reverse' : 'normal',
                  opacity: 0.7,
                }}
              />
            ))}

            {/* Earth center */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: { xs: 190, md: 240 },
                height: { xs: 190, md: 240 },
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 0 60px rgba(0,180,216,.35), 0 0 90px rgba(0,180,216,.2)',
                border: '1px solid rgba(0,180,216,.3)',
              }}
            >
              <Box
                component="img"
                src="/assets/images/Rotating_earth_animated_transparent.gif"
                alt="Rotating Earth"
                sx={{ width: '100%', height: '100%', objectFit: 'contain', background: 'transparent', position: 'relative', zIndex: 2 }}
              />
              <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,0,0,0) 45%, rgba(0,8,24,0.25) 75%, rgba(0,8,24,0.6) 100%)', zIndex: 1 }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* EARTH FROM ORBIT — image strip */}
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', height: { xs: 220, md: 340 }, overflow: 'hidden' }}>
        <Box component="img" src="/assets/images/earth-orbit.jpg" alt="Earth from orbit" sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(2,8,24,0.7) 0%,rgba(2,8,24,0.1) 40%,rgba(2,8,24,0.1) 60%,rgba(2,8,24,0.7) 100%)' }} />
        <Box sx={{ position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,.7)', fontSize: { xs: '0.8rem', md: '0.95rem' }, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase' }}>Live Multi-Spectral View · Low Earth Orbit · 550km Altitude</Typography>
        </Box>
      </Box>

      {/* STATS */}
      <Box sx={{ position: 'relative', zIndex: 1, py: 5, borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)', background: 'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {stats.map((s, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Box sx={{ textAlign: 'center', py: 2 }}>
                  <Typography sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 900, background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>{s.value}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: '0.8rem', mt: 0.5, fontWeight: 500 }}>{s.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROBLEM */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>The Problem</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2 }}>Humanity is Blind to What's Above</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: '1rem', maxWidth: 620, mx: 'auto', lineHeight: 1.8 }}>Millions of objects move at tens of thousands of km/h above us. Our ability to observe them remains slow, fragmented, weather-dependent, and inaccessible to most of the world.</Typography>
          </Box>
          <Grid container spacing={3}>
            {problems.map((p, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Box sx={{ display: 'flex', gap: 2.5, p: 3, borderRadius: '16px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', transition: 'all .3s', '&:hover': { background: 'rgba(157,78,221,.06)', border: '1px solid rgba(157,78,221,.25)' } }}>
                  <Box sx={{ minWidth: 44, height: 44, borderRadius: '12px', background: 'linear-gradient(135deg,rgba(157,78,221,.25),rgba(0,180,216,.2))', border: '1px solid rgba(157,78,221,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Typography sx={{ color: '#9D4EDD', fontWeight: 800, fontSize: '0.8rem' }}>{p.num}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>{p.title}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>{p.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TELESCOPES */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>The Observatory</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2 }}>4 Types of Telescopes. 8 CubeSats constilations.</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: '1rem', maxWidth: 660, mx: 'auto', lineHeight: 1.8 }}>We are planning to send a 6U–12U CubeSat carrying four scientific-grade instruments — covering Optical, UV/NIR, X-Ray, and Gamma-Ray wavelengths — into low Earth orbit at ~550km altitude. Planned launch Q1 2028.</Typography>
          </Box>
          <Grid container spacing={3}>
            {telescopes.map((t, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <GlassCard sx={{ borderColor: `${t.color}25` }}>
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg,transparent,${t.color},transparent)` }} />
                  <Box sx={{ width: 52, height: 52, borderRadius: '14px', background: `linear-gradient(135deg,${t.color}25,${t.color}15)`, border: `1px solid ${t.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: t.color }}>{t.icon}</Box>
                  <Typography sx={{ color: t.color, fontWeight: 800, fontSize: '0.72rem', letterSpacing: '2.5px', mb: 0.5 }}>{t.band}</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 1.5 }}>{t.spec}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.83rem', lineHeight: 1.7, mb: 2 }}>{t.desc}</Typography>
                  <Box sx={{ borderTop: '1px solid rgba(255,255,255,.06)', pt: 1.5 }}>
                    {t.science.map((s, j) => (
                      <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.6 }}>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: '0.78rem' }}>{s}</Typography>
                      </Box>
                    ))}
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CAPABILITIES */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Platform Capabilities</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>Intelligence at the Speed of Light</Typography>
          </Box>
          <Grid container spacing={3}>
            {capabilities.map((cap, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <GlassCard>
                  <Box sx={{ width: 52, height: 52, borderRadius: '14px', background: 'linear-gradient(135deg,rgba(157,78,221,.25),rgba(0,180,216,.2))', border: '1px solid rgba(157,78,221,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, color: '#00B4D8' }}>{cap.icon}</Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 1.5 }}>{cap.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.88rem', lineHeight: 1.7 }}>{cap.desc}</Typography>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PLATFORMS */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Access Platforms</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>One Satellite. Every Screen.</Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { icon: <Visibility sx={{ fontSize: '2.5rem' }} />, title: 'Web & App Dashboard', desc: 'Real-time space insight dashboard accessible from any browser or mobile device, anywhere in the world, 24/7.' },
              { icon: <Speed sx={{ fontSize: '2.5rem' }} />, title: 'Free-Roam VR 360°', desc: 'Immersive virtual reality experience for multi-user sessions, educational programs, and live cosmic events.' },
              { icon: <Public sx={{ fontSize: '2.5rem' }} />, title: 'Planetarium Dome', desc: 'Full-dome projection for science centres, universities, and public outreach — live from orbit, minutes ago.' },
            ].map((p, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{ textAlign: 'center', p: 4, borderRadius: '20px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.3)', background: 'rgba(0,180,216,.04)', transform: 'translateY(-6px)' } }}>
                  <Box sx={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(157,78,221,.2),rgba(0,180,216,.2))', border: '1px solid rgba(0,180,216,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3, color: '#00B4D8' }}>{p.icon}</Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem', mb: 1.5 }}>{p.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ROADMAP */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Roadmap</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>From Pilot to Orbit</Typography>
          </Box>
          <Grid container spacing={3}>
            {roadmap.map((r, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p: 3, borderRadius: '20px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', height: '100%', transition: 'all .3s', '&:hover': { border: '1px solid rgba(157,78,221,.3)', background: 'rgba(157,78,221,.05)' } }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#9D4EDD,#00B4D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1rem', mb: 2, boxShadow: '0 0 20px rgba(157,78,221,.4)' }}>{r.phase}</Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>{r.label}</Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '0.78rem', fontWeight: 600, mb: 2 }}>{r.period}</Typography>
                  {r.items.map((item, j) => (
                    <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                      <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#9D4EDD', flexShrink: 0 }} />
                      <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: '0.8rem' }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TRACTION */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Backed By</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>India's Leading Space Ecosystem</Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap" useFlexGap>
            {['AIC T-Hub ORBIT Cohort 2', 'AWS Space Accelerator APJ', 'India / Australia / Japan Programme'].map((p, i) => (
              <Box key={i} sx={{ px: 3, py: 1.5, borderRadius: '50px', background: 'rgba(0,180,216,.08)', border: '1px solid rgba(0,180,216,.25)' }}>
                <Typography sx={{ color: '#00B4D8', fontSize: '0.88rem', fontWeight: 600 }}>{p}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* NEBULA IMAGE — astronomy science section */}
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', overflow: 'hidden' }}>
        <Box component="img" src="/assets/images/earth-night.jpg" alt="Stars from orbit" sx={{ width: '100%', height: { xs: 280, md: 420 }, objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(2,8,24,0.6) 0%,rgba(2,8,24,0.15) 30%,rgba(2,8,24,0.15) 70%,rgba(2,8,24,0.8) 100%)' }} />
        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 2 }}>
          <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>4 Spectral Channels · One Satellite</Typography>
          <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '1.8rem', md: '3rem' }, lineHeight: 1.15, mb: 2, textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>Asteroids. Nebulae.<br />Gamma-Ray Bursts.<br /><span style={{ color: '#00B4D8' }}>Live from LEO.</span></Typography>
          <Typography sx={{ color: 'rgba(255,255,255,.75)', fontSize: { xs: '0.9rem', md: '1.05rem' }, maxWidth: 580, lineHeight: 1.7, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>Our 6U–12U CubeSat carries four scientific instruments — Optical, UV/NIR, X-Ray, and Gamma-Ray — delivering multi-spectral astronomy data from low Earth orbit, bookable by anyone.</Typography>
        </Box>
      </Box>

      {/* CTA */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', p: { xs: 4, md: 8 }, borderRadius: '28px', background: 'linear-gradient(135deg,rgba(157,78,221,.12) 0%,rgba(0,180,216,.1) 100%)', border: '1px solid rgba(0,180,216,.2)', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(157,78,221,.15),transparent)', top: -100, right: -100, filter: 'blur(40px)', pointerEvents: 'none' }} />
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Get Started Today</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2, mb: 3 }}>
              Join the Planetary<br /><GradText>Defense Initiative</GradText>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.7)', fontSize: '1.05rem', maxWidth: 560, mx: 'auto', mb: 5, lineHeight: 1.8 }}>
              Be part of the revolution in space monitoring. Access cutting-edge orbital telescopes and contribute to humanity's understanding of the cosmos.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <PrimaryBtn size="large" onClick={() => navigate('/register')}>Create Free Account</PrimaryBtn>
              <OutlineBtn size="large" onClick={() => navigate('/contact')}>Contact Sales</OutlineBtn>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Root>
  );
};

export default Home;
