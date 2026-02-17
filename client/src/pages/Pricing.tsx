import { FC } from 'react';
import { Box, Typography, Grid, Container, Button, Stack, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const PageRoot = styled(Box)({
  background: '#080C1A', minHeight: '100vh', width: '100%', position: 'relative',
  '&::before': { content: '""', position: 'fixed', top:0,left:0,right:0,bottom:0,
    background: 'radial-gradient(ellipse at 15% 30%,rgba(157,78,221,.12) 0%,transparent 55%)',
    pointerEvents:'none', zIndex:0 }
});

const Section = styled(Container)({ position:'relative', zIndex:1, paddingTop:'96px', paddingBottom:'96px' });
const SectionTitle = styled(Typography)({ color:'#FFF', fontWeight:800, fontSize:'2.6rem', lineHeight:1.2, marginBottom:'20px' });
const SectionSub = styled(Typography)({ color:'rgba(255,255,255,.65)', fontSize:'1.1rem', lineHeight:1.8, maxWidth:'680px' });
const PricingCard = styled(Box)({ p:4, borderRadius:'20px', background:'linear-gradient(135deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.02) 100%)',
  border:'1px solid rgba(255,255,255,.08)', transition:'all .3s ease', height:'100%',
  '&:hover':{ transform:'translateY(-8px)', border:'1px solid rgba(0,180,216,.25)', boxShadow:'0 24px 60px rgba(0,0,0,.4)' }
});
const PrimaryBtn = styled(Button)({ background:'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 100%)', color:'#FFF', padding:'12px 32px',
  borderRadius:'50px', textTransform:'none', fontWeight:700, fontSize:'1rem', boxShadow:'0 8px 32px rgba(157,78,221,.35)', transition:'all .3s ease',
  '&:hover':{ boxShadow:'0 12px 40px rgba(157,78,221,.5)', transform:'translateY(-2px)' }
});

const Pricing: FC = () => {
  const navigate = useNavigate();

  return (
    <PageRoot>
      {/* HERO */}
      <Box sx={{ position:'relative', zIndex:1, pt:{xs:10,md:14}, pb:{xs:8,md:12}, textAlign:'center' }}>
        <Container maxWidth="lg">
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Pricing</Typography>
          <SectionTitle>Flexible Plans for Every User</SectionTitle>
          <SectionSub sx={{ margin:'0 auto' }}>
            From individual enthusiasts to large institutions, we have a plan that fits your needs.
          </SectionSub>
        </Container>
      </Box>

      {/* PRICING TIERS */}
      <Section maxWidth="lg">
        <Grid container spacing={4}>
          {[
            {
              title:'Minute Packs',
              desc:'Pay-as-you-observe for individual observations',
              price:'Flexible',
              features:['Purchase observation time','Target-of-opportunity access','Real-time data delivery','Community support']
            },
            {
              title:'School Blocks',
              desc:'Curriculum-aligned for educational institutions',
              price:'Custom',
              features:['Bulk observation hours','Teacher guides & materials','Student assessment tools','Educational support']
            },
            {
              title:'Annual Subscriptions',
              desc:'Venue subscriptions for institutions',
              price:'Enterprise',
              features:['Unlimited observation hours','Dedicated support','Custom integrations','Priority scheduling']
            },
            {
              title:'Community Nights',
              desc:'Public outreach and engagement',
              price:'Contact',
              features:['Group observation events','Educational content','Public engagement','CSR partnerships']
            }
          ].map((tier,i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <PricingCard>
                <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'2px', mb:1 }}>PLAN</Typography>
                <Typography sx={{ color:'#FFF', fontWeight:800, fontSize:'1.4rem', mb:0.5 }}>{tier.title}</Typography>
                <Typography sx={{ color:'rgba(255,255,255,.6)', fontSize:'0.9rem', mb:3 }}>{tier.desc}</Typography>
                <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'1.2rem', mb:3 }}>{tier.price}</Typography>
                <Stack spacing={1.5} sx={{ mb:3 }}>
                  {tier.features.map((f,j) => (
                    <Box key={j} sx={{ display:'flex', alignItems:'center', gap:1 }}>
                      <CheckCircle sx={{ color:'#00B4D8', fontSize:'1.2rem', flexShrink:0 }} />
                      <Typography sx={{ color:'rgba(255,255,255,.7)', fontSize:'0.9rem' }}>{f}</Typography>
                    </Box>
                  ))}
                </Stack>
                <PrimaryBtn fullWidth onClick={() => navigate('/register')}>Get Started</PrimaryBtn>
              </PricingCard>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* TARGET CUSTOMERS */}
      <Box sx={{ position:'relative', zIndex:1, py:{xs:8,md:12}, background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center', mb:8 }}>
            <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Who We Serve</Typography>
            <SectionTitle>For Every Audience</SectionTitle>
          </Box>
          <Grid container spacing={3}>
            {[
              { emoji:'🏛️', title:'National Planetariums', desc:'Annual venue subscriptions with full integration.' },
              { emoji:'🔬', title:'Science Centres', desc:'Interactive exhibits and public engagement programs.' },
              { emoji:'🚐', title:'Mobile Domes', desc:'Portable planetarium systems for outreach.' },
              { emoji:'🎓', title:'University Clubs', desc:'Astronomy clubs and research programs.' },
              { emoji:'🤝', title:'CSR Sponsors', desc:'Corporate social responsibility partnerships.' },
              { emoji:'👨‍🔬', title:'Individual Enthusiasts', desc:'Amateur astronomers and space watchers.' }
            ].map((c,i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box sx={{ p:3, borderRadius:'16px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)', textAlign:'center' }}>
                  <Typography sx={{ fontSize:'2rem', mb:1 }}>{c.emoji}</Typography>
                  <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1rem', mb:0.5 }}>{c.title}</Typography>
                  <Typography sx={{ color:'rgba(255,255,255,.65)', fontSize:'0.9rem' }}>{c.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ENTERPRISE CTA */}
      <Section maxWidth="lg">
        <Box sx={{ textAlign:'center', p:{xs:4,md:8}, borderRadius:'24px', background:'linear-gradient(135deg,rgba(157,78,221,.15) 0%,rgba(0,180,216,.12) 100%)', border:'2px solid rgba(0,180,216,.25)' }}>
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Enterprise</Typography>
          <Typography sx={{ color:'#FFF', fontWeight:900, fontSize:{xs:'2rem',md:'2.5rem'}, lineHeight:1.2, mb:3 }}>
            Custom Solutions for Large Organizations
          </Typography>
          <Typography sx={{ color:'rgba(255,255,255,.7)', fontSize:'1rem', maxWidth:'600px', margin:'0 auto 40px', lineHeight:1.8 }}>
            Need a custom plan? Contact our sales team to discuss enterprise pricing, dedicated support, and integration options.
          </Typography>
          <PrimaryBtn size="large" onClick={() => navigate('/contact')}>Contact Sales</PrimaryBtn>
        </Box>
      </Section>
    </PageRoot>
  );
};

export default Pricing;
