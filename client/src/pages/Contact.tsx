import { FC, useState } from 'react';
import { Box, Typography, Grid, Container, TextField, Button, Stack, styled } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const PageRoot = styled(Box)({
  background: '#080C1A', minHeight: '100vh', width: '100%', position: 'relative',
  '&::before': { content: '""', position: 'fixed', top:0,left:0,right:0,bottom:0,
    background: 'radial-gradient(ellipse at 15% 30%,rgba(157,78,221,.12) 0%,transparent 55%)',
    pointerEvents:'none', zIndex:0 }
});

const Section = styled(Container)({ position:'relative', zIndex:1, paddingTop:'96px', paddingBottom:'96px' });
const SectionTitle = styled(Typography)({ color:'#FFF', fontWeight:800, fontSize:'2.6rem', lineHeight:1.2, marginBottom:'20px' });
const SectionSub = styled(Typography)({ color:'rgba(255,255,255,.65)', fontSize:'1.1rem', lineHeight:1.8, maxWidth:'680px' });
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor:'rgba(255,255,255,.3)' },
    '&:hover fieldset': { borderColor:'rgba(255,255,255,.5)' },
    '&.Mui-focused fieldset': { borderColor:'#00B4D8' }
  },
  '& .MuiInputLabel-root': { color:'rgba(255,255,255,.7)' },
  '& .MuiInputBase-input': { color:'#fff' }
});
const SubmitBtn = styled(Button)({ background:'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 100%)', color:'#FFF', padding:'12px 32px',
  borderRadius:'50px', textTransform:'none', fontWeight:700, fontSize:'1rem', boxShadow:'0 8px 32px rgba(157,78,221,.35)', transition:'all .3s ease',
  '&:hover':{ boxShadow:'0 12px 40px rgba(157,78,221,.5)', transform:'translateY(-2px)' }
});
const ContactCard = styled(Box)({ p:4, borderRadius:'20px', background:'linear-gradient(135deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.02) 100%)',
  border:'1px solid rgba(255,255,255,.08)', transition:'all .3s ease',
  '&:hover':{ transform:'translateY(-4px)', border:'1px solid rgba(0,180,216,.25)' }
});

const Contact: FC = () => {
  const [formData, setFormData] = useState({ name:'', email:'', organisation:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageRoot>
      {/* HERO */}
      <Box sx={{ position:'relative', zIndex:1, pt:{xs:10,md:14}, pb:{xs:8,md:12}, textAlign:'center' }}>
        <Container maxWidth="lg">
          <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Contact</Typography>
          <SectionTitle>Get in Touch</SectionTitle>
          <SectionSub sx={{ margin:'0 auto' }}>
            Have questions? Want to partner with us? Interested in investing? We'd love to hear from you.
          </SectionSub>
        </Container>
      </Box>

      {/* CONTACT INFO */}
      <Section maxWidth="lg">
        <Grid container spacing={4} sx={{ mb:8 }}>
          {[
            { icon:<Email />, title:'Email', content:'info@kosmosconnect.space', link:'mailto:info@kosmosconnect.space' },
            { icon:<Phone />, title:'Website', content:'kosmosconnect.space', link:'https://kosmosconnect.space' },
            { icon:<LocationOn />, title:'Headquarters', content:'India', link:'' }
          ].map((item,i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ContactCard>
                <Box sx={{ color:'#00B4D8', fontSize:'2rem', mb:2 }}>{item.icon}</Box>
                <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1.1rem', mb:1 }}>{item.title}</Typography>
                {item.link && item.link.startsWith('mailto:') ? (
                  <Typography component="a" href={item.link} sx={{ color:'#00B4D8', textDecoration:'none', fontSize:'1rem', '&:hover':{ textDecoration:'underline' } }}>
                    {item.content}
                  </Typography>
                ) : item.link ? (
                  <Typography component="a" href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color:'#00B4D8', textDecoration:'none', fontSize:'1rem', '&:hover':{ textDecoration:'underline' } }}>
                    {item.content}
                  </Typography>
                ) : (
                  <Typography sx={{ color:'rgba(255,255,255,.7)', fontSize:'1rem' }}>{item.content}</Typography>
                )}
              </ContactCard>
            </Grid>
          ))}
        </Grid>

        {/* CONTACT FORM */}
        <Box sx={{ maxWidth:'600px', margin:'0 auto', p:4, borderRadius:'20px', background:'linear-gradient(135deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.02) 100%)', border:'1px solid rgba(255,255,255,.08)' }}>
          <Typography sx={{ color:'#FFF', fontWeight:700, fontSize:'1.3rem', mb:3 }}>Send us a Message</Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <StyledTextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <StyledTextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <StyledTextField
                fullWidth
                label="Organisation"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
              />
              <StyledTextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <SubmitBtn type="submit" fullWidth size="large">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </SubmitBtn>
            </Stack>
          </form>
        </Box>
      </Section>

      {/* INQUIRY TYPES */}
      <Box sx={{ position:'relative', zIndex:1, py:{xs:8,md:12}, background:'rgba(255,255,255,.01)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign:'center', mb:8 }}>
            <Typography sx={{ color:'#00B4D8', fontWeight:700, fontSize:'0.85rem', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>How We Can Help</Typography>
            <SectionTitle>Types of Inquiries</SectionTitle>
          </Box>
          <Grid container spacing={3}>
            {[
              { emoji:'🤝', title:'Partnership', desc:'Collaborate with us on research, education, or commercial initiatives.' },
              { emoji:'💼', title:'Business', desc:'Discuss enterprise solutions, subscriptions, or custom integrations.' },
              { emoji:'💰', title:'Investment', desc:'Explore investment opportunities and funding rounds.' },
              { emoji:'📚', title:'Education', desc:'Integrate Kosmos Connect into your educational programs.' },
              { emoji:'🔬', title:'Research', desc:'Partner on space science and planetary defense research.' },
              { emoji:'📰', title:'Media', desc:'Press inquiries and media coverage requests.' }
            ].map((item,i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
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
    </PageRoot>
  );
};

export default Contact;
