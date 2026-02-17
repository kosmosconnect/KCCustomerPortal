import { FC, useState } from 'react';
import { Box, Typography, Grid, Card, Button, Stack, Chip, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, FileCopy } from '@mui/icons-material';

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

const DashboardCard = styled(Card)({
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

const ApiKeyBox = styled(Box)({
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(0, 180, 216, 0.2)',
  borderRadius: '8px',
  padding: '12px',
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontFamily: 'monospace',
  fontSize: '0.85rem',
  color: 'rgba(255, 255, 255, 0.8)',
  wordBreak: 'break-all'
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

const SecondaryButton = styled(Button)({
  color: '#00B4D8',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(0, 180, 216, 0.1)'
  }
});

const mockApiKeys = [
  { id: 'key_1', name: 'Production API Key', key: 'sk_live_51A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P', created: '2024-10-15', lastUsed: '2024-12-10', tier: 'Researcher' },
  { id: 'key_2', name: 'Development Key', key: 'sk_test_2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q', created: '2024-11-01', lastUsed: '2024-12-09', tier: 'Creator' }
];

const DashboardAPI: FC = () => {
  const [openKeyDialog, setOpenKeyDialog] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <DashboardSection>
      <SectionTitle>API & Keys</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <DashboardCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <GradientText variant="h6">Your API Keys</GradientText>
              <PrimaryButton size="small" startIcon={<Add />} onClick={() => setOpenKeyDialog(true)}>
                Generate Key
              </PrimaryButton>
            </Box>
            {mockApiKeys.map((apiKey) => (
              <Box key={apiKey.id} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>
                    {apiKey.name}
                  </Typography>
                  <Chip label={apiKey.tier} size="small" sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }} />
                </Box>
                <ApiKeyBox>
                  {apiKey.key}
                  <Button
                    size="small"
                    onClick={() => handleCopyKey(apiKey.key)}
                    sx={{ ml: 'auto', color: copiedKey === apiKey.key ? '#4CAF50' : '#00B4D8' }}
                  >
                    {copiedKey === apiKey.key ? '✓ Copied' : <FileCopy sx={{ fontSize: '1rem' }} />}
                  </Button>
                </ApiKeyBox>
                <Box sx={{ display: 'flex', gap: 1, fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                  <span>Created: {apiKey.created}</span>
                  <span>•</span>
                  <span>Last used: {apiKey.lastUsed}</span>
                </Box>
              </Box>
            ))}
          </DashboardCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard>
            <GradientText variant="h6" sx={{ mb: 2 }}>
              Usage Limits
            </GradientText>
            <Stack spacing={2}>
              <Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 1 }}>
                  Researcher Tier
                </Typography>
                <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.95rem' }}>
                  1,000 requests/day
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 1 }}>
                  Creator Tier
                </Typography>
                <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.95rem' }}>
                  5,000 requests/day
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', mb: 1 }}>
                  Lab Pro Tier
                </Typography>
                <Typography sx={{ color: '#00B4D8', fontWeight: 700, fontSize: '0.95rem' }}>
                  Unlimited
                </Typography>
              </Box>
              <SecondaryButton fullWidth sx={{ mt: 2 }}>
                View API Docs
              </SecondaryButton>
            </Stack>
          </DashboardCard>
        </Grid>
      </Grid>

      {/* Generate API Key Dialog */}
      <Dialog open={openKeyDialog} onClose={() => setOpenKeyDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', color: '#FFFFFF', fontWeight: 700 }}>
          Generate New API Key
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Key Name"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            placeholder="e.g., Production API Key"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#FFFFFF',
                '& fieldset': {
                  borderColor: 'rgba(0, 180, 216, 0.3)'
                }
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)'
              }
            }}
          />
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <SecondaryButton fullWidth onClick={() => setOpenKeyDialog(false)}>
              Cancel
            </SecondaryButton>
            <PrimaryButton fullWidth onClick={() => setOpenKeyDialog(false)}>
              Generate
            </PrimaryButton>
          </Stack>
        </DialogContent>
      </Dialog>
    </DashboardSection>
  );
};

export default DashboardAPI;
