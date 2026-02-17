import { FC } from 'react';
import { Box, Typography, Grid, Container, Stack, styled } from '@mui/material';

const PageRoot = styled(Box)({
  background: '#080C1A', minHeight: '100vh', width: '100%', position: 'relative',
  '&::before': { content: '""', position: 'fixed', top:0,left:0,right:0,bottom:0,
    background: 'radial-gradient(ellipse at 15% 30%,rgba(157,78,221,.12) 0%,transparent 55%)',
    pointerEvents:'none', zIndex:0 }
});

const Section = styled(Container)({ position:'relative', zIndex:1, paddingTop:'96px', paddingBottom:'96px' });
const SectionTitle = styled(Typography)({ color:'#FFF', fontWeight:800, fontSize:'2.6rem', lineHeight:1.2, marginBottom:'20px' });
const SectionSub = styled(Typography)({ color:'rgba(255,255,255,.65)', fontSize:'1.1rem', lineHeight:1.8, maxWidth:'680px' });

const About: FC = () => {
  return (
    <PageRoot>
      {/* HERO */}
      <Box sx={{ position:'relative', zIndex:1, pt:{xs:10,md:14}, pb:{xs:8,md:12}, textAlign:'center' }}>
        <Container maxWidth="lg">
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>About Us</Typography>
          <SectionTitle>Transforming How Humanity Explores Space</SectionTitle>
          <SectionSub sx={{ margin:'0 auto' }}>
            Kosmos Connect is democratizing access to space situational awareness and planetary defense through cutting-edge satellite technology and immersive delivery platforms.
          </SectionSub>
        </Container>
      </Box>

      {/* MISSION & VISION */}
      <Section maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p:4, borderRadius:'20px', background:'linear-gradient(135deg,rgba(157,78,221,.1) 0%,rgba(0,180,216,.08) 100%)', border:'1px solid rgba(0,180,216,.2)' }}>
              <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'2px', mb:2 }}>OUR MISSION</Typography>
              <Typography sx={{ color:'#FFF', fontSize:'1.1rem', lineHeight:1.8 }}>
                Reserve on-orbit observing windows like booking a conference room — delivering space situational awareness insights through immersive experiences and real datasets.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p:4, borderRadius:'20px', background:'linear-gradient(135deg,rgba(0,180,216,.1) 0%,rgba(157,78,221,.08) 100%)', border:'1px solid rgba(157,78,221,.2)' }}>
              <Typography sx={{ color:'#9D4EDD', fontWeight:700, fontSize:'0.85rem', letterSpacing:'2px', mb:2 }}>OUR VISION</Typography>
              <Typography sx={{ color:'#FFF', fontSize:'1.1rem', lineHeight:1.8 }}>
                Democratize space situational awareness and planetary-defense understanding for a billion learners — making real orbital data accessible, interactive, and curriculum-aligned.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* COMPANY STORY */}
      <Box sx={{ position:'relative', zIndex:1, py:{xs:8,md:12}, background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center', mb:8 }}>
            <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Our Story</Typography>
            <SectionTitle>India to Global: Building the Future of Space Access</SectionTitle>
          </Box>
          <Grid container spacing={4}>
            {[
              { title:'Founded in India', desc:'Incubated in India\'s largest space cohort (AIC T-Hub ORBIT Cohort 2), leveraging India\'s growing space ecosystem and talent.' },
              { title:'AWS Partnership', desc:'Selected for AWS Space Accelerator APJ programme, providing cloud credits and go-to-market support for global expansion.' },
              { title:'International Expansion', desc:'Part of India/Australia/Japan programme, positioning Kosmos Connect as a key player in the Asia-Pacific space economy.' },
              { title:'Global Vision', desc:'Expanding from India to serve planetariums, science centres, universities, and space enthusiasts worldwide.' }
            ].map((item,i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p:3, borderRadius:'16px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)', height:'100%' }}>
                  <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.95rem', mb:1 }}>{item.title}</Typography>
                  <Typography sx={{ color:'rgba(255,255,255,.65)', fontSize:'0.9rem', lineHeight:1.6 }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PARTNERS & INCUBATORS */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:8 }}>
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Backed By</Typography>
          <SectionTitle>Trusted Partners & Incubators</SectionTitle>
        </Box>
        <Stack direction={{xs:'column',sm:'row'}} spacing={3} justifyContent="center" alignItems="center" flexWrap="wrap">
          {['AIC T-Hub ORBIT Cohort 2','AWS Space Accelerator APJ','India / Australia / Japan Programme'].map((p,i) => (
            <Box key={i} sx={{ px:4, py:3, borderRadius:'16px', background:'linear-gradient(135deg,rgba(157,78,221,.08),rgba(0,180,216,.06))', border:'1px solid rgba(0,180,216,.15)', textAlign:'center', minWidth:'200px' }}>
              <Typography sx={{ color:'#00B4D8', fontSize:'0.9rem', fontWeight:600 }}>{p}</Typography>
            </Box>
          ))}
        </Stack>
      </Section>

      {/* VALUES */}
      <Box sx={{ position:'relative', zIndex:1, py:{xs:8,md:12}, background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center', mb:8 }}>
            <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Our Values</Typography>
            <SectionTitle>What Drives Us</SectionTitle>
          </Box>
          <Grid container spacing={3}>
            {[
              { emoji:'🛰️', title:'Innovation', desc:'Cutting-edge satellite and AI technology' },
              { emoji:'🌍', title:'Accessibility', desc:'Making space data available to everyone' },
              { emoji:'🔬', title:'Science', desc:'Real data, real insights, real impact' },
              { emoji:'🤝', title:'Collaboration', desc:'Partnering with educators and researchers' }
            ].map((v,i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p:3, borderRadius:'16px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)', textAlign:'center' }}>
                  <Typography sx={{ fontSize:'2rem', mb:1 }}>{v.emoji}</Typography>
                  <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1rem', mb:0.5 }}>{v.title}</Typography>
                  <Typography sx={{ color:'rgba(255,255,255,.65)', fontSize:'0.9rem' }}>{v.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageRoot>
  );
};

export default About;
