import { FC } from 'react';
import { Box, Typography, Grid, Container, Stack, styled } from '@mui/material';
import { Satellite, Cloud, School, Radar, Shield, Visibility } from '@mui/icons-material';

const PageRoot = styled(Box)({
  background: '#080C1A', minHeight: '100vh', width: '100%', position: 'relative',
  '&::before': { content: '""', position: 'fixed', top:0,left:0,right:0,bottom:0,
    background: 'radial-gradient(ellipse at 15% 30%,rgba(157,78,221,.12) 0%,transparent 55%)',
    pointerEvents:'none', zIndex:0 }
});

const Section = styled(Container)({ position:'relative', zIndex:1, paddingTop:'96px', paddingBottom:'96px' });
const SectionTitle = styled(Typography)({ color:'#FFF', fontWeight:800, fontSize:'2.6rem', lineHeight:1.2, marginBottom:'20px' });
const SectionSub = styled(Typography)({ color:'rgba(255,255,255,.65)', fontSize:'1.1rem', lineHeight:1.8, maxWidth:'680px' });
const FeatureCard = styled(Box)({ p:4, borderRadius:'20px', background:'linear-gradient(135deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.02) 100%)',
  border:'1px solid rgba(255,255,255,.08)', transition:'all .3s ease',
  '&:hover':{ transform:'translateY(-8px)', border:'1px solid rgba(0,180,216,.25)', boxShadow:'0 24px 60px rgba(0,0,0,.4)' }
});
const IconBox = styled(Box)({ width:'60px', height:'60px', borderRadius:'16px',
  background:'linear-gradient(135deg,rgba(157,78,221,.2) 0%,rgba(0,180,216,.2) 100%)', border:'1px solid rgba(157,78,221,.3)',
  display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px', color:'#00B4D8', fontSize:'1.8rem' });

const Features: FC = () => {
  return (
    <PageRoot>
      {/* HERO */}
      <Box sx={{ position:'relative', zIndex:1, pt:{xs:10,md:14}, pb:{xs:8,md:12}, textAlign:'center' }}>
        <Container maxWidth="lg">
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Features</Typography>
          <SectionTitle>Kosmos Connect Live 1.0</SectionTitle>
          <SectionSub sx={{ margin:'0 auto' }}>
            Comprehensive solution combining cutting-edge satellite technology with educator-friendly delivery systems. Planned launch Q1 2028.
          </SectionSub>
        </Container>
      </Box>

      {/* CUBESAT PAYLOAD */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:8 }}>
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Core Technology</Typography>
          <SectionTitle>6U–12U CubeSat Multi-Spectral Payload</SectionTitle>
        </Box>
        <Grid container spacing={4}>
          {[
            { title:'Optical Telescopes', desc:'High-resolution optical imaging for detailed observation of celestial objects and near-Earth space.' },
            { title:'X-Ray Detection', desc:'Advanced X-ray sensors for detecting high-energy cosmic events and stellar phenomena.' },
            { title:'UV Imaging', desc:'Ultraviolet telescope systems for studying stellar atmospheres and space weather.' },
            { title:'Gamma-Ray Monitoring', desc:'Gamma-ray detection for identifying supernovae, neutron stars, and cosmic transients.' }
          ].map((item,i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <FeatureCard>
                <IconBox><Satellite /></IconBox>
                <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1.1rem', mb:1.5 }}>{item.title}</Typography>
                <Typography sx={{ color:'rgba(255,255,255,.6)', fontSize:'0.9rem', lineHeight:1.7 }}>{item.desc}</Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* DELIVERY PLATFORMS */}
      <Box sx={{ position:'relative', zIndex:1, py:{xs:8,md:12}, background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center', mb:8 }}>
            <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Delivery</Typography>
            <SectionTitle>Multi-Platform Access</SectionTitle>
          </Box>
          <Grid container spacing={4}>
            {[
              { icon:<Visibility />, title:'Web & Mobile Apps', desc:'Real-time dashboard for individual researchers, educators, and space enthusiasts worldwide.' },
              { icon:<Cloud />, title:'VR 360° Simulator', desc:'Immersive virtual reality for multi-user sessions, educational programs, and live events.' },
              { icon:<School />, title:'Planetarium Dome', desc:'Full-dome projection for science centres, universities, and public outreach.' }
            ].map((item,i) => (
              <Grid item xs={12} md={4} key={i}>
                <FeatureCard>
                  <IconBox>{item.icon}</IconBox>
                  <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1.1rem', mb:1.5 }}>{item.title}</Typography>
                  <Typography sx={{ color:'rgba(255,255,255,.6)', fontSize:'0.9rem', lineHeight:1.7 }}>{item.desc}</Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BUSINESS MODEL */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:8 }}>
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Business Model</Typography>
          <SectionTitle>Pay-as-You-Observe</SectionTitle>
        </Box>
        <Grid container spacing={4}>
          {[
            { title:'Minute Packs', desc:'Purchase observation time in flexible minute increments for specific targets.' },
            { title:'Annual Subscriptions', desc:'Venue subscriptions for planetariums, science centres, and educational institutions.' },
            { title:'School Blocks', desc:'Curriculum-aligned observation blocks for schools and universities.' },
            { title:'Community Nights', desc:'Public outreach events and community observation programs.' }
          ].map((item,i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box sx={{ p:3, borderRadius:'16px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)' }}>
                <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'1rem', mb:1 }}>{item.title}</Typography>
                <Typography sx={{ color:'rgba(255,255,255,.65)', fontSize:'0.9rem', lineHeight:1.6 }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* MARKET SEGMENTS */}
      <Box sx={{ position:'relative', zIndex:1, py:{xs:8,md:12}, background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center', mb:8 }}>
            <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Markets</Typography>
            <SectionTitle>Serving Multiple Sectors</SectionTitle>
          </Box>
          <Grid container spacing={3}>
            {[
              { emoji:'🛰️', title:'Space Imaging & Observation', desc:'Commercial satellite data and observation services.' },
              { emoji:'🛡️', title:'Space Situational Awareness', desc:'Planetary defense and space asset monitoring.' },
              { emoji:'☁️', title:'Cloud Analytics', desc:'AI/ML-powered event prediction and data analytics.' },
              { emoji:'📚', title:'Global EdTech', desc:'Curriculum-aligned astronomy education for schools worldwide.' }
            ].map((item,i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p:3, borderRadius:'16px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)', textAlign:'center' }}>
                  <Typography sx={{ fontSize:'2rem', mb:1 }}>{item.emoji}</Typography>
                  <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1rem', mb:0.5 }}>{item.title}</Typography>
                  <Typography sx={{ color:'rgba(255,255,255,.65)', fontSize:'0.9rem' }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* AWS INTEGRATION */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:8 }}>
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Infrastructure</Typography>
          <SectionTitle>AWS-Powered Platform</SectionTitle>
        </Box>
        <Grid container spacing={4}>
          {[
            { icon:<Cloud />, title:'Operation Centre on AWS', desc:'Orchestration and control of orbital and ground telescope constellation.' },
            { icon:<Radar />, title:'Nano-Observatory-as-a-Service', desc:'Demand-driven satellite data lake engineering and processing.' },
            { icon:<Shield />, title:'Ground Station Network', desc:'Global AWS Ground Station Network for data downlink and command.' }
          ].map((item,i) => (
            <Grid item xs={12} md={4} key={i}>
              <FeatureCard>
                <IconBox>{item.icon}</IconBox>
                <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1.1rem', mb:1.5 }}>{item.title}</Typography>
                <Typography sx={{ color:'rgba(255,255,255,.6)', fontSize:'0.9rem', lineHeight:1.7 }}>{item.desc}</Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Section>
    </PageRoot>
  );
};

export default Features;
