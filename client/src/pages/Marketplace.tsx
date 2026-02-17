import { FC } from 'react';
import { Box, Typography, Grid, Card, Stack, Button, Rating, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ShoppingCart, Star, TrendingUp } from '@mui/icons-material';
import { PageBackground, PageContainer } from '../components/common/PageContainer';

const GradientText = styled(Typography)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 });
const DashboardSection = styled(Box)(({ theme }) => ({ marginBottom: theme.spacing(6) }));
const SectionTitle = styled(Typography)({ color: '#FFFFFF', fontWeight: 800, fontSize: '1.8rem', marginBottom: '24px' });
const ProductCard = styled(Card)({ background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0, 180, 216, 0.2)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0, 180, 216, 0.2)' } });
const PrimaryButton = styled(Button)({ background: 'linear-gradient(135deg, #9D4EDD 0%, #00B4D8 100%)', color: '#FFFFFF', fontWeight: 700, textTransform: 'none', borderRadius: '8px', '&:hover': { boxShadow: '0 8px 24px rgba(157, 78, 221, 0.3)' } });

const Marketplace: FC = () => {
  const welcomeSectionStyle = { mb: 4 };
  const products = [
    { name: 'Telescope Pro X', price: '$45,000', rating: 4.8, sales: 1250, commission: '15%' },
    { name: 'Spectrometer S100', price: '$12,500', rating: 4.6, sales: 890, commission: '18%' },
    { name: 'Mount Tracker MT-2000', price: '$8,900', rating: 4.7, sales: 650, commission: '20%' },
    { name: 'Camera CCD-4K', price: '$5,500', rating: 4.5, sales: 420, commission: '15%' }
  ];

  return (
    <PageBackground>
      <PageContainer>
        <DashboardSection>
          <Box sx={welcomeSectionStyle}>
            <GradientText variant="h3" sx={{ mb: 1 }}>Marketplace</GradientText>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
              Partner telescopes, datasets, and equipment with ratings & analytics
            </Typography>
          </Box>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Featured Products</SectionTitle>
          <Grid container spacing={3}>
            {products.map((product, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <ProductCard>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <Box>
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>
                          {product.name}
                        </Typography>
                        <Typography sx={{ color: '#00B4D8', fontSize: '1.3rem', fontWeight: 800 }}>
                          {product.price}
                        </Typography>
                      </Box>
                      <Chip label={`${product.commission} commission`} sx={{ background: 'rgba(0, 180, 216, 0.2)', color: '#00B4D8' }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Rating value={product.rating} precision={0.1} readOnly size="small" />
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                        {product.rating} ({product.sales} sales)
                      </Typography>
                    </Box>
                    <PrimaryButton fullWidth startIcon={<ShoppingCart />}>View Details</PrimaryButton>
                  </Stack>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </DashboardSection>

        <DashboardSection>
          <SectionTitle>Marketplace Analytics</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <ProductCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <ShoppingCart sx={{ fontSize: '2.5rem', color: '#00B4D8', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Total Sales</Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '1.8rem', fontWeight: 800 }}>$2.3M</Typography>
                </Stack>
              </ProductCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Star sx={{ fontSize: '2.5rem', color: '#FFD700', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Avg Rating</Typography>
                  <Typography sx={{ color: '#FFD700', fontSize: '1.8rem', fontWeight: 800 }}>4.65</Typography>
                </Stack>
              </ProductCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <TrendingUp sx={{ fontSize: '2.5rem', color: '#4CAF50', mx: 'auto' }} />
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Growth</Typography>
                  <Typography sx={{ color: '#4CAF50', fontSize: '1.8rem', fontWeight: 800 }}>+23%</Typography>
                </Stack>
              </ProductCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductCard>
                <Stack spacing={1} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>Commission</Typography>
                  <Typography sx={{ color: '#00B4D8', fontSize: '1.8rem', fontWeight: 800 }}>$345K</Typography>
                </Stack>
              </ProductCard>
            </Grid>
          </Grid>
        </DashboardSection>
      </PageContainer>
    </PageBackground>
  );
};

export default Marketplace;
