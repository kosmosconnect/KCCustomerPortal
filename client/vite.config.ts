import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: Number(env.PORT) || 3000,
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
        },
        '/socket.io': {
          target: env.VITE_SOCKET_URL || 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
    build: {
      outDir: 'build',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            mui: ['@mui/material', '@mui/icons-material'],
            stripe: ['@stripe/stripe-js', '@stripe/react-stripe-js'],
            redux: ['@reduxjs/toolkit', 'react-redux'],
            three: ['three', '@react-three/fiber', '@react-three/drei'],
          },
        },
      },
    },
    define: {
      // Vite's way of handling env variables
      'process.env': {
        NODE_ENV: JSON.stringify(mode),
        VITE_API_URL: JSON.stringify(env.VITE_API_URL),
        VITE_SOCKET_URL: JSON.stringify(env.VITE_SOCKET_URL),
        VITE_STRIPE_PUBLIC_KEY: JSON.stringify(env.VITE_STRIPE_PUBLIC_KEY),
      },
    },
  };
});
