import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

// Components
import Layout from '@/components/Layout/Layout';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { WebSocketProvider } from '@/contexts/WebSocketContext';
import ProtectedRoute from '@/components/ProtectedRoute';

// Pages
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import DataVisualization from '@/pages/DataVisualization';
import Documentation from '@/pages/Documentation';
import MissionControl from '@/pages/MissionControl';
import Profile from '@/pages/Profile';
import SatelliteData from '@/pages/SatelliteData';
import Settings from '@/pages/Settings';
import SpaceScience from '@/pages/SpaceScience';
import Subscription from '@/pages/Subscription';
import SubscriptionPlans from '@/pages/SubscriptionPlans';
import Support from '@/pages/Support';
import SupportCenter from '@/pages/SupportCenter';
import VRExperience from '@/pages/VRExperience';
import NotFound from '@/pages/NotFound';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <WebSocketProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes - Wrapped in Layout */}
              <Route 
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/data-visualization" element={<DataVisualization />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/mission-control" element={<MissionControl />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/satellite-data" element={<SatelliteData />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/space-science" element={<SpaceScience />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/subscription-plans" element={<SubscriptionPlans />} />
                <Route path="/support" element={<Support />} />
                <Route path="/support-center" element={<SupportCenter />} />
                <Route path="/vr-experience" element={<VRExperience />} />

                {/* 404 Not Found */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </WebSocketProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
