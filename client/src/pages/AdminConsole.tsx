import { FC } from 'react';
import { Box, Typography, Grid, Card, Stack, Button, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Edit } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 });
const DashboardSection = styled(Box)(({ theme }) => ({ marginBottom: theme.spacing(6) }));
const SectionTitle = styled(Typography)({ color: '#FFFFFF', fontWeight: 800, fontSize: '1.8rem', marginBottom: '24px' });
const AdminCard = styled(Card)({ background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0, 180, 216, 0.2)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)' } });
const PrimaryButton = styled(Button)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', color: '#FFFFFF', fontWeight: 700, textTransform: 'none', borderRadius: '8px', '&:hover': { boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)' } });

const AdminConsole: FC = () => {
  const welcomeSectionStyle = { mb: 4 };
  const tenants = [
    { name: 'Tenant A', users: 150, status: 'Active', plan: 'Enterprise' },
    { name: 'Tenant B', users: 85, status: 'Active', plan: 'Professional' },
    { name: 'Tenant C', users: 45, status: 'Inactive', plan: 'Starter' }
  ];

  return (
    <PageBackground>
      <PageContainer>
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>Admin Console</GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Tenant management, roles, feature toggles, and audit trails
            </Typography>
          </Box>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Tenant Management</SectionTitle>
          <AdminCard>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ borderBottom: '1px solid rgba(0, 180, 216, 0.2)' }}>
                    <TableCell sx={{ color: '#00B4D8', fontWeight: 700 }}>Tenant Name</TableCell>
                    <TableCell sx={{ color: '#00B4D8', fontWeight: 700 }}>Users</TableCell>
                    <TableCell sx={{ color: '#00B4D8', fontWeight: 700 }}>Plan</TableCell>
                    <TableCell sx={{ color: '#00B4D8', fontWeight: 700 }}>Status</TableCell>
                    <TableCell sx={{ color: '#00B4D8', fontWeight: 700 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tenants.map((tenant, idx) => (
                    <TableRow key={idx} sx={{ borderBottom: '1px solid rgba(0, 180, 216, 0.1)' }}>
                      <TableCell sx={{ color: '#FFFFFF' }}>{tenant.name}</TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>{tenant.users}</TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>{tenant.plan}</TableCell>
                      <TableCell>
                        <Chip label={tenant.status} sx={{ background: tenant.status === 'Active' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)', color: tenant.status === 'Active' ? '#4CAF50' : '#F44336' }} />
                      </TableCell>
                      <TableCell>
                        <Button size="small" startIcon={<Edit />} sx={{ color: '#00B4D8' }}>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AdminCard>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Feature Toggles</SectionTitle>
          <Grid container spacing={3}>
            {[
              { name: 'Live Streaming', enabled: true },
              { name: 'Marketplace', enabled: true },
              { name: 'VR Experience', enabled: false },
              { name: 'Advanced Analytics', enabled: true }
            ].map((feature, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <AdminCard>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>{feature.name}</Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        {feature.enabled ? 'Enabled' : 'Disabled'}
                      </Typography>
                    </Box>
                    <Switch checked={feature.enabled} />
                  </Box>
                </AdminCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Pricing & Credits</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AdminCard>
                <Stack spacing={2}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>Issue Credits</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" sx={{ color: '#00B4D8', borderColor: '#00B4D8' }}>$100</Button>
                    <Button variant="outlined" sx={{ color: '#00B4D8', borderColor: '#00B4D8' }}>$500</Button>
                    <Button variant="outlined" sx={{ color: '#00B4D8', borderColor: '#00B4D8' }}>$1000</Button>
                  </Box>
                  <PrimaryButton fullWidth>Custom Amount</PrimaryButton>
                </Stack>
              </AdminCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <AdminCard>
                <Stack spacing={2}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>Pricing Flags</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(0, 180, 216, 0.05)', borderRadius: '8px' }}>
                    <Typography sx={{ color: '#FFFFFF' }}>Discount Rate</Typography>
                    <Typography sx={{ color: '#00B4D8', fontWeight: 700 }}>15%</Typography>
                  </Box>
                  <PrimaryButton fullWidth>Update Pricing</PrimaryButton>
                </Stack>
              </AdminCard>
            </Grid>
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Audit Trails</SectionTitle>
          <AdminCard>
            <Stack spacing={1}>
              {[
                { action: 'User Login', user: 'admin@kosmos.com', time: '2024-12-15 10:30' },
                { action: 'Tenant Created', user: 'admin@kosmos.com', time: '2024-12-15 09:15' },
                { action: 'Credits Issued', user: 'admin@kosmos.com', time: '2024-12-15 08:45' }
              ].map((log, idx) => (
                <Box key={idx} sx={{ padding: '12px', background: 'rgba(0, 180, 216, 0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>{log.action}</Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>{log.user}</Typography>
                  </Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>{log.time}</Typography>
                </Box>
              ))}
            </Stack>
          </AdminCard>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default AdminConsole;
