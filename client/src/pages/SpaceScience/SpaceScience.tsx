import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  styled
} from '@mui/material';
import { StyledSection } from './styles';

const StyledContainer = styled(Container)({
  paddingTop: '32px',
  paddingBottom: '32px',
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const VideoCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.87)',
});

const Section = styled('div')({
  marginBottom: '64px',
});

const VideoContainer = styled('div')({
  position: 'relative',
  paddingTop: '56.25%',
});

const VideoIframe = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
});

interface MediaItem {
  url: string;
  title: string;
  description: string;
}

const spaceImages: MediaItem[] = [
  {
    url: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg',
    title: 'Earth from Space',
    description: 'A stunning view of our planet from orbit.'
  },
  {
    url: 'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg',
    title: 'Solar Flare',
    description: 'Powerful solar flare erupting from the Sun\'s surface.'
  },
  {
    url: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg',
    title: 'Mars Exploration',
    description: 'Mars rover exploring the red planet\'s surface.'
  },
  {
    url: 'https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg',
    title: 'Solar System',
    description: 'Artistic representation of our solar system.'
  }
];

const spaceVideos: MediaItem[] = [
  {
    url: 'https://player.vimeo.com/video/108650530',
    title: 'Space Journey',
    description: 'A mesmerizing journey through space.'
  },
  {
    url: 'https://player.vimeo.com/video/108650530',
    title: 'Nebula Exploration',
    description: 'Exploring the beautiful nebulae in our galaxy.'
  }
];

const ImageCard: React.FC<MediaItem> = ({ url, title, description }) => (
  <StyledCard>
    <CardMedia
      component="img"
      height="200"
      image={url}
      alt={title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </StyledCard>
);

const VideoFrame: React.FC<MediaItem> = ({ url, title, description }) => (
  <VideoCard>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" color="white">
        {title}
      </Typography>
      <VideoContainer>
        <VideoIframe
          title={title}
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
      <Typography variant="body2" sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
        {description}
      </Typography>
    </CardContent>
  </VideoCard>
);

const SpaceScience: React.FC = () => (
  <StyledSection>
    <StyledContainer maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        Space Science
      </Typography>

      <Section>
        <Typography variant="h4" gutterBottom>
          Featured Images
        </Typography>
        <Grid container spacing={4}>
          {spaceImages.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <ImageCard {...image} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section>
        <Typography variant="h4" gutterBottom>
          Featured Videos
        </Typography>
        <Grid container spacing={4}>
          {spaceVideos.map((video, index) => (
            <Grid item key={index} xs={12} md={6}>
              <VideoFrame {...video} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </StyledContainer>
  </StyledSection>
);

export default SpaceScience;
