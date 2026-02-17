const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg',
    filename: 'space-bg.jpg',
    description: 'Main background galaxy image'
  },
  {
    url: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg',
    filename: 'carousel-1.jpg',
    description: 'Apollo 11 moon landing'
  },
  {
    url: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg',
    filename: 'carousel-2.jpg',
    description: 'Mars rover exploration'
  },
  {
    url: 'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg',
    filename: 'carousel-3.jpg',
    description: 'Solar flare activity'
  },
  {
    url: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg',
    filename: 'mission-control.jpg',
    description: 'Mission control center'
  },
  {
    url: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg',
    filename: 'satellite.jpg',
    description: 'Satellite in orbit'
  },
  {
    url: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg',
    filename: 'earth-view.jpg',
    description: 'Earth view from space'
  }
];

const assetsDir = path.join(__dirname, '..', 'public', 'assets', 'images');

// Create directories if they don't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(assetsDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
    });
  });
}

async function downloadAllImages() {
  console.log('Starting image downloads...');
  try {
    await Promise.all(images.map(img => downloadImage(img.url, img.filename)));
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages();
