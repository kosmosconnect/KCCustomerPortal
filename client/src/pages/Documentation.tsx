import { FC } from 'react';
import {
  Typography,
  Grid,
  Card,
  Button,
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  MenuBook,
  Code,
  CloudDownload,
  VideoLibrary,
  Forum,
  Help,
  ContentCopy,
  OpenInNew
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

const DocCard = styled(Card)({
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

const ResourceList = styled(List)({
  width: '100%'
});

const ResourceItem = styled(ListItem)({
  padding: '16px',
  marginBottom: '12px',
  borderRadius: '12px',
  background: 'rgba(0, 180, 216, 0.05)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)',
    border: '1px solid rgba(0, 180, 216, 0.4)'
  }
});

const IconWrapper = styled(ListItemIcon)({
  color: '#00B4D8',
  minWidth: 40
});

const ResourceItemText = styled(ListItemText)({
  '& .MuiTypography-root': {
    color: '#FFFFFF'
  },
  '& .MuiTypography-body2': {
    color: 'rgba(255, 255, 255, 0.8)'
  }
});

// Mock Documentation Data
const productDocs = [
  { title: 'Booking Flow', description: 'Step-by-step guide to booking observations', icon: <MenuBook /> },
  { title: 'Minute Policy', description: 'Understanding minute allocation and usage', icon: <Help /> },
  { title: 'SLA & Credits', description: 'Service level agreements and credit system', icon: <Code /> }
];

const apiDocs = [
  { title: 'Authentication', description: 'API key management and OAuth flow', icon: <Code /> },
  { title: 'REST Endpoints', description: 'Complete OpenAPI reference', icon: <Code /> },
  { title: 'Code Snippets', description: 'Python, JavaScript, and cURL examples', icon: <Code /> }
];

const dataSchemas = [
  { title: 'FITS Headers', description: 'Standard FITS header definitions', icon: <Code /> },
  { title: 'CSV Format', description: 'Data export CSV column specifications', icon: <Code /> },
  { title: 'JSON Schema', description: 'API response JSON structure', icon: <Code /> }
];

const Documentation: FC = () => {
  const welcomeSectionStyle = { mb: 4 };

  return (
    <PageBackground>
      <PageContainer>
        {/* Welcome Section */}
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>
              Documentation Hub
            </GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Comprehensive guides for booking, API integration, and data formats
            </Typography>
          </Box>
        </DashboardSection>

        {/* Product Documentation */}
        <DashboardSection>
          <SectionTitle>Product Documentation</SectionTitle>
          <Grid container spacing={3}>
            {productDocs.map((doc, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <DocCard>
                  <Stack spacing={2}>
                    <Box sx={{ color: '#00B4D8', fontSize: '2rem' }}>
                      {doc.icon}
                    </Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>
                      {doc.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      {doc.description}
                    </Typography>
                    <PrimaryButton size="small" endIcon={<OpenInNew />}>
                      Read
                    </PrimaryButton>
                  </Stack>
                </DocCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        {/* API Documentation */}
        <DashboardSection>
          <SectionTitle>API Documentation</SectionTitle>
          <DocCard>
            <GradientText variant="h6" sx={{ mb: 3 }}>
              RESTful API Reference
            </GradientText>
            <ResourceList>
              {apiDocs.map((doc, idx) => (
                <ResourceItem key={idx}>
                  <IconWrapper>
                    {doc.icon}
                  </IconWrapper>
                  <ResourceItemText
                    primary={
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                        {doc.title}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>
                        {doc.description}
                      </Typography>
                    }
                  />
                </ResourceItem>
              ))}
            </ResourceList>
          </DocCard>
        </DashboardSection>

        {/* Data Schemas */}
        <DashboardSection>
          <SectionTitle>Data Schemas</SectionTitle>
          <Grid container spacing={3}>
            {dataSchemas.map((schema, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <DocCard>
                  <Stack spacing={2}>
                    <Box sx={{ color: '#00B4D8', fontSize: '2rem' }}>
                      {schema.icon}
                    </Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>
                      {schema.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      {schema.description}
                    </Typography>
                    <PrimaryButton size="small" startIcon={<ContentCopy />}>
                      Copy
                    </PrimaryButton>
                  </Stack>
                </DocCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        {/* Resources */}
        <DashboardSection>
          <SectionTitle>Additional Resources</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <DocCard>
                <Stack spacing={2} sx={{ textAlign: 'center' }}>
                  <VideoLibrary sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Video Tutorials
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    Step-by-step guides
                  </Typography>
                </Stack>
              </DocCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DocCard>
                <Stack spacing={2} sx={{ textAlign: 'center' }}>
                  <Forum sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Community
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    Ask questions
                  </Typography>
                </Stack>
              </DocCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DocCard>
                <Stack spacing={2} sx={{ textAlign: 'center' }}>
                  <CloudDownload sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Downloads
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    SDKs & Tools
                  </Typography>
                </Stack>
              </DocCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DocCard>
                <Stack spacing={2} sx={{ textAlign: 'center' }}>
                  <Help sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    FAQs
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                    Common questions
                  </Typography>
                </Stack>
              </DocCard>
            </Grid>
          </Grid>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default Documentation;
