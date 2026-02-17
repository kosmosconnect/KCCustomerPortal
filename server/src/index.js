const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const path = require('path');

// Load environment variables from root .env
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// API routes
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com'
  });
});

app.get('/api/subscription', (req, res) => {
  res.json({
    id: 1,
    plan: 'Premium',
    status: 'active',
    validUntil: '2025-12-31'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.SERVER_PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
