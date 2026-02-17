import { FC, useState } from 'react';
import { Box, Typography, Button, Grid, Container, Stack, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import { Email, Language, LocationOn, Send, CheckCircle } from '@mui/icons-material';

const shimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`;
const fadeUp = keyframes`0%{opacity:0;transform:translateY(28px)}100%{opacity:1;transform:translateY(0)}`;
const pulse = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(0,180,216,.4)}70%{box-shadow:0 0 0 10px rgba(0,180,216,0)}`;

const Root = styled(Box)({ background: 'transparent', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative', zIndex: 1 });
const GradText = styled('span')({ background: 'linear-gradient(135deg,#9D4EDD 0%,#00B4D8 60%,#9D4EDD 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: `${shimmer} 4s linear infinite` });

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    background: 'rgba(255,255,255,.03)',
    borderRadius: '12px',
    color: '#fff',
    '& fieldset': { borderColor: 'rgba(255,255,255,.15)' },
    '&:hover fieldset': { borderColor: 'rgba(0,180,216,.4)' },
    '&.Mui-focused fieldset': { borderColor: '#00B4D8' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,.5)' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#00B4D8' },
  '& .MuiInputBase-input': { color: '#fff' },
  '& .MuiInputBase-inputMultiline': { color: '#fff' },
});

const StyledSelect = styled(Select)({
  background: 'rgba(255,255,255,.03)',
  borderRadius: '12px',
  color: '#fff',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,.15)' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,180,216,.4)' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00B4D8' },
  '& .MuiSvgIcon-root': { color: 'rgba(255,255,255,.5)' },
});

const SubmitBtn = styled(Button)({
  background: '#2563EB',
  color: '#fff',
  padding: '14px 36px',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '1rem',
  boxShadow: '0 8px 32px rgba(37,99,235,.4)',
  transition: 'all .3s',
  '&:hover': { background: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 12px 40px rgba(37,99,235,.55)' },
});

type InquiryType = { emoji: string; title: string; desc: string };
const inquiryTypes: InquiryType[] = [
  { emoji: '🤝', title: 'Partnership', desc: 'Collaborate on research, education, or commercial initiatives.' },
  { emoji: '💼', title: 'Business', desc: 'Discuss enterprise solutions, subscriptions, or custom integrations.' },
  { emoji: '💰', title: 'Investment', desc: 'Explore investment opportunities and funding rounds.' },
  { emoji: '📚', title: 'Education', desc: 'Integrate Kosmos Connect into your educational programs.' },
  { emoji: '🔬', title: 'Research', desc: 'Partner on space science and planetary defense research.' },
  { emoji: '📰', title: 'Media', desc: 'Press inquiries and media coverage requests.' },
];

const Contact: FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', organisation: '', inquiryType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <Root>
      {/* HERO */}
      <Box sx={{ position: 'relative', zIndex: 1, pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 }, textAlign: 'center', px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(0,180,216,.1)', border: '1px solid rgba(0,180,216,.3)', borderRadius: '50px', px: 2, py: 0.75, mb: 4, animation: `${fadeUp} 0.8s ease both` }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4D8', animation: `${pulse} 2s ease-in-out infinite` }} />
            <Typography sx={{ color: '#00B4D8', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px' }}>CONTACT US</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-2px', mb: 3, animation: `${fadeUp} 0.9s 0.1s ease both` }}>
            Let's Explore<br /><GradText>Space Together</GradText>
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: 'rgba(255,255,255,.65)', maxWidth: 620, mx: 'auto', mb: 5, lineHeight: 1.8, animation: `${fadeUp} 1s 0.2s ease both` }}>
            Have questions? Want to partner with us? Interested in investing or bringing Kosmos Connect to your school or planetarium? We'd love to hear from you.
          </Typography>
        </Container>
      </Box>

      {/* CONTACT INFO CARDS */}
      <Box sx={{ position: 'relative', zIndex: 1, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: <Email sx={{ fontSize: '1.8rem' }} />, title: 'Email', content: 'info@kosmosconnect.space', href: 'mailto:info@kosmosconnect.space', color: '#00B4D8' },
              { icon: <Language sx={{ fontSize: '1.8rem' }} />, title: 'Website', content: 'kosmosconnect.space', href: 'https://kosmosconnect.space', color: '#9D4EDD' },
              { icon: <LocationOn sx={{ fontSize: '1.8rem' }} />, title: 'Headquarters', content: 'India', href: '', color: '#2563EB' },
            ].map((item, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Box sx={{ p: 3.5, borderRadius: '20px', background: 'rgba(255,255,255,.025)', border: `1px solid ${item.color}25`, textAlign: 'center', transition: 'all .3s', '&:hover': { border: `1px solid ${item.color}50`, background: `${item.color}06`, transform: 'translateY(-4px)' } }}>
                  <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: `${item.color}18`, border: `1px solid ${item.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2, color: item.color }}>{item.icon}</Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 0.75 }}>{item.title}</Typography>
                  {item.href ? (
                    <Typography component="a" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" sx={{ color: item.color, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
                      {item.content}
                    </Typography>
                  ) : (
                    <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.9rem' }}>{item.content}</Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* MAIN CONTENT: FORM + INQUIRY TYPES */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: '24px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.08)' }}>
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem', mb: 0.75 }}>Send Us a Message</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: '0.9rem', mb: 4 }}>We typically respond within 24 hours.</Typography>

                {submitted ? (
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <CheckCircle sx={{ color: '#00B4D8', fontSize: '4rem', mb: 2 }} />
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', mb: 1 }}>Message Sent!</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.9rem' }}>Thank you for reaching out. We'll get back to you shortly.</Typography>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={2.5}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <StyledTextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <StyledTextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                        </Grid>
                      </Grid>
                      <StyledTextField fullWidth label="Organisation (optional)" name="organisation" value={formData.organisation} onChange={handleChange} />
                      <FormControl fullWidth>
                        <InputLabel sx={{ color: 'rgba(255,255,255,.5)', '&.Mui-focused': { color: '#00B4D8' } }}>Inquiry Type</InputLabel>
                        <StyledSelect
                          value={formData.inquiryType}
                          label="Inquiry Type"
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as string })}
                          MenuProps={{ PaperProps: { sx: { background: '#0d1b3e', border: '1px solid rgba(0,180,216,.2)', '& .MuiMenuItem-root': { color: 'rgba(255,255,255,.8)', '&:hover': { background: 'rgba(0,180,216,.1)' } } } } }}
                        >
                          {['Partnership', 'Business', 'Investment', 'Education', 'Research', 'Media', 'Other'].map(t => (
                            <MenuItem key={t} value={t}>{t}</MenuItem>
                          ))}
                        </StyledSelect>
                      </FormControl>
                      <StyledTextField fullWidth label="Message" name="message" multiline rows={5} value={formData.message} onChange={handleChange} required />
                      <SubmitBtn type="submit" fullWidth size="large" disabled={loading} endIcon={<Send />}>
                        {loading ? 'Sending...' : 'Send Message'}
                      </SubmitBtn>
                    </Stack>
                  </form>
                )}
              </Box>
            </Grid>

            {/* Inquiry Types */}
            <Grid item xs={12} md={5}>
              <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>How We Can Help</Typography>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1.2, mb: 4 }}>Types of Inquiries</Typography>
              <Stack spacing={2}>
                {inquiryTypes.map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 2, p: 2.5, borderRadius: '14px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.25)', background: 'rgba(0,180,216,.04)' } }}>
                    <Typography sx={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.emoji}</Typography>
                    <Box>
                      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.4 }}>{item.title}</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: '0.83rem', lineHeight: 1.5 }}>{item.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              {/* Quick contact */}
              <Box sx={{ mt: 4, p: 3, borderRadius: '16px', background: 'linear-gradient(135deg,rgba(157,78,221,.08),rgba(0,180,216,.06))', border: '1px solid rgba(0,180,216,.2)' }}>
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 1 }}>Prefer Email?</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '0.85rem', mb: 1.5, lineHeight: 1.6 }}>Reach us directly at:</Typography>
                <Typography component="a" href="mailto:info@kosmosconnect.space" sx={{ color: '#00B4D8', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  info@kosmosconnect.space
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ASTRONOMY COMMUNITY */}
      <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 }, background: 'rgba(255,255,255,.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', mb: 2 }}>Join the Community</Typography>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.2, mb: 2 }}>Connect with Fellow Space Explorers</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: '1rem', maxWidth: 580, mx: 'auto', lineHeight: 1.8 }}>
              Join thousands of astronomers, educators, researchers, and space enthusiasts who are shaping the future of accessible space science.
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {[
              { emoji: '🌌', title: 'Astronomy Enthusiasts', desc: 'Amateur astronomers and stargazers getting real telescope access for the first time.' },
              { emoji: '🏫', title: 'Educators & Schools', desc: 'Teachers bringing live space science into classrooms with curriculum-aligned tools.' },
              { emoji: '🔭', title: 'Researchers', desc: 'Scientists accessing multi-spectral orbital data for published research.' },
              { emoji: '🏛️', title: 'Institutions', desc: 'Planetariums and science centres delivering live-from-orbit experiences to the public.' },
            ].map((c, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ p: 3, borderRadius: '16px', background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)', textAlign: 'center', transition: 'all .3s', '&:hover': { border: '1px solid rgba(0,180,216,.25)', background: 'rgba(0,180,216,.04)', transform: 'translateY(-4px)' } }}>
                  <Typography sx={{ fontSize: '2rem', mb: 1.5 }}>{c.emoji}</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.75 }}>{c.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: '0.83rem', lineHeight: 1.6 }}>{c.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Root>
  );
};

export default Contact;
