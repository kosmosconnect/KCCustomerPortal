import { FC } from 'react';
import { Box, Typography, Button, Grid, Card, Stack, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
  ArrowForward, Shield, Satellite, Radar, Public, Speed,
  School, Visibility, Cloud, TrendingUp
} from '@mui/icons-material';

const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}`;
const pulse = keyframes`0%,100%{opacity:1}50%{opacity:0.5}`;
const shimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`;

const PageRoot = styled(Box)({
  background: '#080C1A', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative',
  '&::before': { content: '""', position: 'fixed', top:0,left:0,right:0,bottom:0,
    background: 'radial-gradient(ellipse at 15% 30%,rgba(157,78,221,.12) 0%,transparent 55%),radial-gradient(ellipse at 85% 70%,rgba(0,180,216,.10) 0%,transparent 55%)',
    pointerEvents:'none', zIndex:0 }
});

const Section = styled(Container)({ position:'relative', zIndex:1, paddingTop:'96px', paddingBottom:'96px' });
const GradientSpan = styled('span')({ background:'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 60%,#9D4EDD 100%)', backgroundSize:'200% auto',
  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:`${shimmer} 4s linear infinite` });
const PrimaryBtn = styled(Button)({ background:'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 100%)', color:'#FFF', padding:'14px 36px',
  borderRadius:'50px', textTransform:'none', fontWeight:700, fontSize:'1rem', boxShadow:'0 8px 32px rgba(157,78,221,.35)', transition:'all .3s ease',
  '&:hover':{ boxShadow:'0 12px 40px rgba(157,78,221,.5)', transform:'translateY(-2px)', background:'linear-gradient(135deg,#B060F0 0%,#00C8F0 100%)' }
});
const OutlineBtn = styled(Button)({ color:'#00B4D8', border:'2px solid rgba(0,180,216,.5)', padding:'12px 32px', borderRadius:'50px',
  textTransform:'none', fontWeight:600, fontSize:'1rem', transition:'all .3s ease', background:'rgba(0,180,216,.05)',
  '&:hover':{ border:'2px solid #00B4D8', background:'rgba(0,180,216,.12)', transform:'translateY(-2px)' }
});
const SectionLabel = styled(Typography)({ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', marginBottom:'16px' });
const SectionTitle = styled(Typography)({ color:'#FFF', fontWeight:800, fontSize:'2.6rem', lineHeight:1.2, marginBottom:'20px',
  '@media (max-width:960px)':{ fontSize:'2rem' }
});
const SectionSub = styled(Typography)({ color:'rgba(255,255,255,.65)', fontSize:'1.1rem', lineHeight:1.8, maxWidth:'680px' });
const GlassCard = styled(Card)({ background:'linear-gradient(135deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.02) 100%)',
  backdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,.08)', borderRadius:'20px', padding:'32px', transition:'all .4s ease',
  height:'100%', position:'relative', overflow:'hidden',
  '&::before':{ content:'""', position:'absolute', top:0,left:0,right:0, height:'2px',
    background:'linear-gradient(90deg,transparent,rgba(157,78,221,.6),rgba(0,180,216,.6),transparent)', opacity:0, transition:'opacity .3s ease' },
  '&:hover':{ transform:'translateY(-8px)', border:'1px solid rgba(0,180,216,.25)',
    boxShadow:'0 24px 60px rgba(0,0,0,.4),0 0 40px rgba(157,78,221,.1)', '&::before':{ opacity:1 } }
});
const IconBox = styled(Box)({ width:'60px', height:'60px', borderRadius:'16px',
  background:'linear-gradient(135deg,rgba(157,78,221,.2) 0%,rgba(0,180,216,.2) 100%)', border:'1px solid rgba(157,78,221,.3)',
  display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px', color:'#00B4D8', fontSize:'1.8rem' });
const StatCard = styled(Box)({ textAlign:'center', padding:'32px 24px',
  background:'linear-gradient(135deg,rgba(157,78,221,.08) 0%,rgba(0,180,216,.05) 100%)',
  border:'1px solid rgba(0,180,216,.15)', borderRadius:'16px', transition:'all .3s ease',
  '&:hover':{ border:'1px solid rgba(0,180,216,.35)', background:'linear-gradient(135deg,rgba(157,78,221,.12) 0%,rgba(0,180,216,.08) 100%)' }
});
const ProblemCard = styled(Box)({ display:'flex', gap:'20px', padding:'24px',
  background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', borderRadius:'16px', marginBottom:'16px', transition:'all .3s ease',
  '&:hover':{ background:'rgba(157,78,221,.06)', border:'1px solid rgba(157,78,221,.2)' }
});
const LiveBadge = styled(Box)({ display:'inline-flex', alignItems:'center', gap:'8px',
  background:'rgba(0,180,216,.1)', border:'1px solid rgba(0,180,216,.3)', borderRadius:'50px', padding:'6px 16px', marginBottom:'32px' });
const LiveDot = styled(Box)({ width:'8px', height:'8px', borderRadius:'50%', background:'#00B4D8', animation:`${pulse} 2s ease-in-out infinite` });
const FloatingOrb = styled(Box)({ position:'absolute', borderRadius:'50%', filter:'blur(60px)', pointerEvents:'none', zIndex:0 });

const Home: FC = () => {
  const navigate = useNavigate();

  const problems = [
    { num:'01', title:'Space Science Limitation', desc:'Scientists, Astronomers, and Space enthusiasts need to react quickly when something important happens in space, but current systems are slow and require people to jump in at the right time.' },
    { num:'02', title:'Nature & Ground Limitations', desc:'Weather, clouds, light pollution, and the day/night cycle make it difficult to observe the sky from the ground. You can\'t always predict when conditions will be good.' },
    { num:'03', title:'Resolution & Latency Limitation', desc:'Today\'s stargazing and space-watching systems use many different tools that don\'t work well together, causing delays and lower-quality results.' },
    { num:'04', title:'Access Limitations', desc:'Most people lack telescopes, mentors, or dark sky access — marking significant inequity for young Space Watchers. Optical telescopes are primarily limited to nighttime.' },
    { num:'05', title:'Sovereignty & Trust Gaps', desc:'Many countries rely on foreign observatories, which can create policy, security, and trust concerns for national space programs.' },
    { num:'06', title:'SSA Visibility Gaps', desc:'Limited access to timely and transparent space situational awareness data restricts a nation\'s ability to monitor debris, conjunction risks, and on-orbit activities independently.' }
  ];

  const capabilities = [
    { icon:<Satellite />, title:'6U–12U CubeSat Optical/XRAY/UV/GAMMA', desc:'Multi-spectral telescope payload with optical, X-ray, UV, and gamma-ray detection capabilities for comprehensive space monitoring.' },
    { icon:<Public />, title:'Multi-Platform Delivery', desc:'Dome feeds, VR multi-user sessions, web/mobile apps; educator-friendly APIs & sample datasets.' },
    { icon:<Shield />, title:'SSA Notifications & Alerts', desc:'Real-time Space Situational Awareness notifications, alerts, and planetary defense monitoring.' },
    { icon:<School />, title:'Ready-to-Run Show Kits', desc:'Narrative scripts, teacher guides, assessment rubrics, and regional-language support for educators.' },
    { icon:<Radar />, title:'Smart Scheduling', desc:'SSA-enabled target-of-opportunity observations, audit-grade data provenance, and educator-safe defaults.' },
    { icon:<Cloud />, title:'AWS-Powered Infrastructure', desc:'Cloud-based event prediction, data analytics, and global AWS Ground Station Network integration.' }
  ];

  const platforms = [
    { icon:<Visibility />, title:'Web / App Dashboard', desc:'Real-time space insight dashboard accessible from any browser or mobile device, anywhere in the world.' },
    { icon:<Speed />, title:'Free Roam VR 360° Simulator', desc:'Immersive virtual reality experience for multi-user sessions, educational programs, and live events.' },
    { icon:<TrendingUp />, title:'Immersive Planetarium Dome', desc:'Full-dome projection system for science centres, universities, and public outreach programs.' }
  ];

  const markets = [
    { value:'$10B+', label:'Total Addressable Market', desc:'Combined market across science data, live content, and education platforms.' },
    { value:'24/7', label:'Telescope Access', desc:'Space enthusiasts can access our Space Telescopes 365 days a year.' },
    { value:'100+', label:'Schools in Pilot', desc:'Target schools for VR/web pilot programs in the first funding phase.' },
    { value:'3–5', label:'Venue Pilots', desc:'Planetariums, science centres, and mobile dome pilots in pre-seed phase.' }
  ];

  const roadmap = [
    { phase:'1', label:'Pre-seed Execution', period:'Dec 2025 – Apr 2026', items:['Application Development','MVP Platform & Educator Tooling','MoUs & CSR Partners','First Subscriptions'] },
    { phase:'2', label:'Series A Build', period:'May 2026 – Mar 2027', items:['VR/Web Engineering','Model → Qualification Tracks','Ops Console Hardening','Launch Booking & Integration'] },
    { phase:'3', label:'Target Launch (12U Demo)', period:'Q4 2027 – Q1 2028', items:['Full Commissioning','Quicklook Pipeline Live','Ground Infrastructure','International Onboarding'] },
    { phase:'4', label:'Commercial "Live from Orbit"', period:'Q1–Q2 2028', items:['Minute Booking Windows Open','Target-of-Opportunity Shows','First-Light Events','Full Commercial Operations'] }
  ];

  return (
    <PageRoot>
      <FloatingOrb sx={{ width:500,height:500,top:-100,left:-150,background:'rgba(157,78,221,.08)' }} />
      <FloatingOrb sx={{ width:400,height:400,top:'40%',right:-100,background:'rgba(0,180,216,.06)' }} />

      {/* HERO */}
      <Box sx={{ position:'relative',zIndex:1,pt:{xs:10,md:14},pb:{xs:8,md:12},textAlign:'center' }}>
        <Container maxWidth="lg">
          <LiveBadge>
            <LiveDot />
            <Typography sx={{ color:'#00B4D8',fontSize:'0.8rem',fontWeight:700,letterSpacing:'1px' }}>KOSMOS CONNECT LIVE</Typography>
          </LiveBadge>
          <Typography variant="h1" sx={{ fontSize:{xs:'2.4rem',sm:'3.2rem',md:'4.2rem'},fontWeight:900,color:'#FFF',lineHeight:1.1,mb:3,letterSpacing:'-1px' }}>
            Global Planetary Defense<br /><GradientSpan>& Space Monitoring</GradientSpan>
          </Typography>
          <Typography sx={{ fontSize:{xs:'1rem',md:'1.2rem'},color:'rgba(255,255,255,.7)',maxWidth:'700px',margin:'0 auto 48px',lineHeight:1.8 }}>
            World's First <strong style={{color:'#00B4D8'}}>Nano Observatory-as-a-Service</strong> — Reserve on-orbit observing windows like booking a conference room, delivering space situational awareness insights through immersive experiences and real datasets.
          </Typography>
          <Stack direction={{xs:'column',sm:'row'}} spacing={2} justifyContent="center" alignItems="center">
            <PrimaryBtn size="large" endIcon={<ArrowForward />} onClick={() => navigate('/register')}>Get Started Free</PrimaryBtn>
            <OutlineBtn size="large" onClick={() => navigate('/login')}>Login to Portal</OutlineBtn>
          </Stack>
          <Grid container spacing={3} sx={{ mt:8,maxWidth:'900px',margin:'64px auto 0' }}>
            {markets.map((m,i) => (
              <Grid item xs={6} md={3} key={`market-${i}`}>
                <StatCard>
                  <Typography sx={{ fontSize:{xs:'1.8rem',md:'2.2rem'},fontWeight:900,background:'linear-gradient(135deg,#9D4EDD,#00B4D8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',mb:0.5 }}>
                    {m.value}
                  </Typography>
                  <Typography sx={{ color:'#FFF',fontWeight:700,fontSize:'0.85rem',mb:0.5 }}>
                    {m.label}
                  </Typography>
                  <Typography sx={{ color:'rgba(255,255,255,.5)',fontSize:'0.75rem',lineHeight:1.4 }}>
                    {m.desc}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* VISION */}
      <Section maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionLabel>Our Vision</SectionLabel>
            <SectionTitle>Democratizing Space for a Billion Learners</SectionTitle>
            <SectionSub sx={{ mb:4 }}>Democratize space situational awareness and planetary-defense understanding for a billion learners — making real orbital data accessible, interactive, and curriculum-aligned.</SectionSub>
            <Grid container spacing={2}>
              {[
                { emoji:'🛰️', title:'Simple Booking', desc:'Conference room-like reservation system for orbital telescope time' },
                { emoji:'🌐', title:'Immersive Delivery', desc:'Domes, VR, web, and mobile platforms for all audiences' },
                { emoji:'🛡️', title:'Space Situational Awareness', desc:'For satellites, defense, and space monitoring' },
                { emoji:'📚', title:'Educational Impact', desc:'Curriculum-aligned for schools and universities' }
              ].map((item,i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box sx={{ display:'flex',gap:2,p:2,borderRadius:'12px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.06)' }}>
                    <Typography sx={{ fontSize:'1.5rem' }}>{item.emoji}</Typography>
                    <Box>
                      <Typography sx={{ color:'#FFF',fontWeight:700,fontSize:'0.9rem',mb:0.3 }}>{item.title}</Typography>
                      <Typography sx={{ color:'rgba(255,255,255,.55)',fontSize:'0.8rem',lineHeight:1.5 }}>{item.desc}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p:4,borderRadius:'24px',background:'linear-gradient(135deg,rgba(157,78,221,.1) 0%,rgba(0,180,216,.08) 100%)',border:'1px solid rgba(0,180,216,.2)',animation:`${float} 6s ease-in-out infinite` }}>
              <Typography sx={{ color:'#00B4D8',fontWeight:700,fontSize:'0.8rem',letterSpacing:'2px',mb:2 }}>VIRTUAL SURVEILLANCE OBSERVATORY</Typography>
              <Typography sx={{ color:'#FFF',fontSize:'1.05rem',lineHeight:1.8,mb:3 }}>
                In the age of AI and computing, we are building a future by transforming how humanity explores space — monetising access to cosmic events through leveraging Space/Ground data from a network of multispectral ground and In-Orbit Telescopes with accurate AI models.
              </Typography>
              <Typography sx={{ color:'rgba(255,255,255,.6)',fontSize:'0.9rem',lineHeight:1.7 }}>
                Accessible to researchers, students, space asset operators, insurance companies, and enthusiasts worldwide using AWS platform.
              </Typography>
              <Box sx={{ mt:3,pt:3,borderTop:'1px solid rgba(255,255,255,.08)' }}>
                <Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
                  {['AWS Powered','AI/ML Models','Multi-Spectral','NOaaS'].map((tag,i) => (
                    <Box key={i} sx={{ px:2,py:0.5,borderRadius:'20px',background:'rgba(0,180,216,.1)',border:'1px solid rgba(0,180,216,.2)' }}>
                      <Typography sx={{ color:'#00B4D8',fontSize:'0.75rem',fontWeight:600 }}>{tag}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* PROBLEM */}
      <Box sx={{ position:'relative',zIndex:1,py:{xs:8,md:12},background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center',mb:8 }}>
            <SectionLabel>The Problem</SectionLabel>
            <SectionTitle>Space is Limited by Access, Infrastructure, Manpower & Latency</SectionTitle>
            <SectionSub sx={{ margin:'0 auto' }}>Kosmos Connect is where stargazing meets modern technology — enabling amateur astronomers, students, researchers, and SSA operators to stream near real-time observations wherever, whenever.</SectionSub>
          </Box>
          <Grid container spacing={3}>
            {problems.map((p,i) => (
              <Grid item xs={12} md={6} key={i}>
                <ProblemCard>
                  <Box sx={{ minWidth:'48px',height:'48px',borderRadius:'12px',background:'linear-gradient(135deg,rgba(157,78,221,.2),rgba(0,180,216,.2))',border:'1px solid rgba(157,78,221,.3)',display:'flex',alignItems:'center',justifyContent:'center' }}>
                    <Typography sx={{ color:'#9D4EDD',fontWeight:800,fontSize:'0.85rem' }}>{p.num}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color:'#FFF',fontWeight:700,fontSize:'1rem',mb:0.5 }}>{p.title}</Typography>
                    <Typography sx={{ color:'rgba(255,255,255,.6)',fontSize:'0.88rem',lineHeight:1.6 }}>{p.desc}</Typography>
                  </Box>
                </ProblemCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CAPABILITIES */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center',mb:8 }}>
          <SectionLabel>The Solution</SectionLabel>
          <SectionTitle>Kosmos Connect Live 1.0</SectionTitle>
          <SectionSub sx={{ margin:'0 auto' }}>Our comprehensive solution combines cutting-edge satellite technology with educator-friendly delivery systems — providing direct access whenever, wherever. Planned launch Q1 2028.</SectionSub>
        </Box>
        <Grid container spacing={3}>
          {capabilities.map((cap,i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <GlassCard>
                <IconBox>{cap.icon}</IconBox>
                <Typography sx={{ color:'#FFF',fontWeight:700,fontSize:'1.1rem',mb:1.5 }}>{cap.title}</Typography>
                <Typography sx={{ color:'rgba(255,255,255,.6)',fontSize:'0.9rem',lineHeight:1.7 }}>{cap.desc}</Typography>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* PLATFORMS */}
      <Box sx={{ position:'relative',zIndex:1,py:{xs:8,md:12},background:'linear-gradient(180deg,rgba(157,78,221,.04) 0%,rgba(0,180,216,.03) 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center',mb:8 }}>
            <SectionLabel>Access Platforms</SectionLabel>
            <SectionTitle>Access Our Space Telescopes from Your Devices</SectionTitle>
            <SectionSub sx={{ margin:'0 auto' }}>Multiple delivery platforms to suit every audience — from individual researchers to large planetarium audiences.</SectionSub>
          </Box>
          <Grid container spacing={4}>
            {platforms.map((p,i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{ textAlign:'center',p:4,borderRadius:'20px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',transition:'all .3s ease','&:hover':{border:'1px solid rgba(0,180,216,.3)',background:'rgba(0,180,216,.05)',transform:'translateY(-6px)'} }}>
                  <Box sx={{ width:'80px',height:'80px',borderRadius:'50%',background:'linear-gradient(135deg,rgba(157,78,221,.2),rgba(0,180,216,.2))',border:'1px solid rgba(0,180,216,.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px',color:'#00B4D8',fontSize:'2rem' }}>
                    {p.icon}
                  </Box>
                  <Typography sx={{ color:'#FFF',fontWeight:700,fontSize:'1.2rem',mb:2 }}>{p.title}</Typography>
                  <Typography sx={{ color:'rgba(255,255,255,.6)',fontSize:'0.95rem',lineHeight:1.7 }}>{p.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ROADMAP */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center',mb:8 }}>
          <SectionLabel>Our Roadmap</SectionLabel>
          <SectionTitle>From Pilot to Orbit</SectionTitle>
          <SectionSub sx={{ margin:'0 auto' }}>A clear path from pre-seed execution to full commercial operations in orbit.</SectionSub>
        </Box>
        <Grid container spacing={3}>
          {roadmap.map((r,i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box sx={{ p:3,borderRadius:'20px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',height:'100%',transition:'all .3s ease','&:hover':{border:'1px solid rgba(157,78,221,.3)',background:'rgba(157,78,221,.05)'} }}>
                <Box sx={{ width:'48px',height:'48px',borderRadius:'50%',background:'linear-gradient(135deg,#9D4EDD,#00B4D8)',display:'flex',alignItems:'center',justifyContent:'center',color:'#FFF',fontWeight:800,fontSize:'1.1rem',mb:2,boxShadow:'0 0 20px rgba(157,78,221,.4)' }}>{r.phase}</Box>
                <Typography sx={{ color:'#FFF',fontWeight:700,fontSize:'1rem',mb:0.5 }}>{r.label}</Typography>
                <Typography sx={{ color:'#00B4D8',fontSize:'0.8rem',fontWeight:600,mb:2 }}>{r.period}</Typography>
                {r.items.map((item,j) => (
                  <Box key={j} sx={{ display:'flex',alignItems:'center',gap:1,mb:1 }}>
                    <Box sx={{ width:'6px',height:'6px',borderRadius:'50%',background:'#9D4EDD',flexShrink:0 }} />
                    <Typography sx={{ color:'rgba(255,255,255,.65)',fontSize:'0.82rem' }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* TRACTION */}
      <Box sx={{ position:'relative',zIndex:1,py:{xs:8,md:12},background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center',mb:8 }}>
            <SectionLabel>Traction & Partners</SectionLabel>
            <SectionTitle>Backed by India's Leading Space Ecosystem</SectionTitle>
          </Box>
          <Box sx={{ p:4,borderRadius:'20px',background:'linear-gradient(135deg,rgba(157,78,221,.08),rgba(0,180,216,.06))',border:'1px solid rgba(0,180,216,.15)',textAlign:'center' }}>
            <Stack direction={{xs:'column',sm:'row'}} spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap" gap={2}>
              {['AIC T-Hub ORBIT Cohort 2','AWS Space Accelerator APJ','India / Australia / Japan Programme'].map((p,i) => (
                <Box key={i} sx={{ px:3,py:1.5,borderRadius:'50px',background:'rgba(0,180,216,.1)',border:'1px solid rgba(0,180,216,.2)' }}>
                  <Typography sx={{ color:'#00B4D8',fontSize:'0.85rem',fontWeight:600 }}>{p}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center',p:{xs:4,md:8},borderRadius:'24px',background:'linear-gradient(135deg,rgba(157,78,221,.15) 0%,rgba(0,180,216,.12) 100%)',border:'2px solid rgba(0,180,216,.25)',position:'relative',overflow:'hidden' }}>
          <FloatingOrb sx={{ width:300,height:300,top:-100,right:-100,background:'rgba(157,78,221,.1)',position:'absolute' }} />
          <Typography sx={{ color:'#00B4D8',fontWeight:700,fontSize:'0.85rem',letterSpacing:'3px',mb:2 }}>GET STARTED TODAY</Typography>
          <Typography sx={{ color:'#FFF',fontWeight:900,fontSize:{xs:'2rem',md:'3rem'},lineHeight:1.2,mb:3 }}>
            Join the Planetary<br /><GradientSpan>Defense Initiative</GradientSpan>
          </Typography>
          <Typography sx={{ color:'rgba(255,255,255,.7)',fontSize:'1.1rem',maxWidth:'600px',margin:'0 auto 40px',lineHeight:1.8 }}>
            Be part of the revolution in space monitoring and planetary defense. Access cutting-edge orbital telescopes and contribute to humanity's understanding of the cosmos.
          </Typography>
          <Stack direction={{xs:'column',sm:'row'}} spacing={2} justifyContent="center">
            <PrimaryBtn size="large" onClick={() => navigate('/register')}>Create Free Account</PrimaryBtn>
            <OutlineBtn size="large" onClick={() => navigate('/contact')}>Contact Sales</OutlineBtn>
          </Stack>
        </Box>
      </Section>
    </PageRoot>
  );
};

export default Home;
