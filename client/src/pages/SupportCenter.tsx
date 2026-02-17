import { FC } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  Stack,
  Chip,
  TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  ArrowForward,
  CheckCircle,
  Warning,
  Error,
  Info,
  Add
} from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700
});

const DashboardSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6)
}));

const SectionTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 800,
  fontSize: '1.8rem',
  marginBottom: '24px'
});

const SupportCard = styled(Card)({
  background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)',
  color: '#FFFFFF',
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)'
  }
});

const TicketItem = styled(Box)({
  background: 'rgba(0, 180, 216, 0.05)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const StatusBadge = styled(Box)<{ status: string }>(({ status }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: 600,
  background: status === 'resolved' ? 'rgba(76, 175, 80, 0.2)' : 
              status === 'pending' ? 'rgba(255, 193, 7, 0.2)' :
              status === 'urgent' ? 'rgba(244, 67, 54, 0.2)' : 'rgba(33, 150, 243, 0.2)',
  color: status === 'resolved' ? '#4CAF50' :
         status === 'pending' ? '#FFC107' :
         status === 'urgent' ? '#F44336' : '#2196F3'
}));

const IncidentItem = styled(Box)({
  background: 'rgba(0, 180, 216, 0.05)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '12px'
});

// Mock Data
const kbArticles = [
  { title: 'How to Book an Observation', category: 'Getting Started', views: 1250 },
  { title: 'Understanding Minute Allocation', category: 'Billing', views: 890 },
  { title: 'API Authentication Guide', category: 'API', views: 2100 },
  { title: 'Data Export Formats', category: 'Data', views: 650 }
];

const supportTickets = [
  { id: 'TKT-001', subject: 'Cannot access dashboard', status: 'resolved', priority: 'high', created: '2024-12-10' },
  { id: 'TKT-002', subject: 'API rate limiting issue', status: 'pending', priority: 'urgent', created: '2024-12-14' },
  { id: 'TKT-003', subject: 'Export data format question', status: 'open', priority: 'normal', created: '2024-12-15' }
];

const incidents = [
  { title: 'Scheduled Maintenance', status: 'scheduled', date: '2024-12-20 02:00 UTC', duration: '2 hours' },
  { title: 'API Latency Spike', status: 'resolved', date: '2024-12-14 15:30 UTC', duration: '45 min' },
  { title: 'Database Performance', status: 'monitoring', date: '2024-12-15 10:00 UTC', duration: 'Ongoing' }
];

const SupportCenter: FC = () => {
  const welcomeSectionStyle = { mb: 4 };

  return (
    <PageBackground>
      <PageContainer>
        {/* Welcome Section */}
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>
              Support Center
            </GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Knowledge Base, Ticketing System, and Status Page
            </Typography>
          </Box>
        </DashboardSection>

        {/* Knowledge Base */}
        <DashboardSection>
          <SectionTitle>Knowledge Base</SectionTitle>
          <Grid container spacing={3}>
            {kbArticles.map((article, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <SupportCard>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <Box>
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>
                          {article.title}
                        </Typography>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }}
                        />
                      </Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        {article.views} views
                      </Typography>
                    </Box>
                    <PrimaryButton size="small" endIcon={<ArrowForward />}>
                      Read Article
                    </PrimaryButton>
                  </Stack>
                </SupportCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        {/* Ticketing System */}
        <DashboardSection>
          <SectionTitle>Support Tickets</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <SupportCard>
                <GradientText variant="h6" sx={{ mb: 2 }}>
                  Your Tickets
                </GradientText>
                {supportTickets.map((ticket) => (
                  <TicketItem key={ticket.id}>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 700, mb: 0.5 }}>
                        {ticket.id}: {ticket.subject}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        Created: {ticket.created}
                      </Typography>
                    </Box>
                    <StatusBadge status={ticket.status}>
                      {ticket.status === 'resolved' && <CheckCircle sx={{ fontSize: '1rem' }} />}
                      {ticket.status === 'pending' && <Warning sx={{ fontSize: '1rem' }} />}
                      {ticket.status === 'urgent' && <Error sx={{ fontSize: '1rem' }} />}
                      {ticket.status === 'open' && <Info sx={{ fontSize: '1rem' }} />}
                      {ticket.status}
                    </StatusBadge>
                  </TicketItem>
                ))}
              </SupportCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <SupportCard>
                <GradientText variant="h6" sx={{ mb: 2 }}>
                  Create New Ticket
                </GradientText>
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    placeholder="Subject"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': { borderColor: 'rgba(0, 180, 216, 0.3)' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Description"
                    multiline
                    rows={3}
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': { borderColor: 'rgba(0, 180, 216, 0.3)' }
                      }
                    }}
                  />
                  <PrimaryButton fullWidth startIcon={<Add />}>
                    Submit Ticket
                  </PrimaryButton>
                </Stack>
              </SupportCard>
            </Grid>
          </Grid>
        </DashboardSection>

        {/* Status Page */}
        <DashboardSection>
          <SectionTitle>System Status</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <SupportCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <CheckCircle sx={{ fontSize: '2.5rem', color: '#4CAF50', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    All Systems
                  </Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '0.9rem' }}>
                    Operational
                  </Typography>
                </Stack>
              </SupportCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SupportCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.5rem' }}>
                    99.98%
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    Uptime (30 days)
                  </Typography>
                </Stack>
              </SupportCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SupportCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.5rem' }}>
                    142ms
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    Avg Response Time
                  </Typography>
                </Stack>
              </SupportCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SupportCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.5rem' }}>
                    0
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    Active Incidents
                  </Typography>
                </Stack>
              </SupportCard>
            </Grid>
          </Grid>
        </DashboardSection>

        {/* Incidents */}
        <DashboardSection>
          <SectionTitle>Recent Incidents</SectionTitle>
          <Grid container spacing={3}>
            {incidents.map((incident, idx) => (
              <Grid item xs={12} key={idx}>
                <IncidentItem>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 700, mb: 0.5 }}>
                        {incident.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        {incident.date} • Duration: {incident.duration}
                      </Typography>
                    </Box>
                    <StatusBadge status={incident.status}>
                      {incident.status === 'resolved' && <CheckCircle sx={{ fontSize: '1rem' }} />}
                      {incident.status === 'scheduled' && <Info sx={{ fontSize: '1rem' }} />}
                      {incident.status === 'monitoring' && <Warning sx={{ fontSize: '1rem' }} />}
                      {incident.status}
                    </StatusBadge>
                  </Box>
                </IncidentItem>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default SupportCenter;
