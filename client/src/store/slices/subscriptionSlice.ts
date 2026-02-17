import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Subscription {
  id: string;
  planId: string;
  planName: string;
  status: 'active' | 'canceled' | 'past_due' | 'incomplete';
  currentPeriodStart: number;
  currentPeriodEnd: number;
  cancelAtPeriodEnd: boolean;
}

interface SubscriptionState {
  subscription: Subscription | null;
  availablePlans: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SubscriptionState = {
  subscription: null,
  availablePlans: [],
  isLoading: false,
  error: null,
};

export const fetchSubscriptionPlans = createAsyncThunk(
  'subscription/fetchPlans',
  async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscription/plans`);
    if (!response.ok) {
      throw new Error('Failed to fetch subscription plans');
    }
    return response.json();
  }
);

export const fetchCurrentSubscription = createAsyncThunk(
  'subscription/fetchCurrent',
  async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscription/current`);
    if (!response.ok) {
      throw new Error('Failed to fetch current subscription');
    }
    return response.json();
  }
);

export const cancelSubscriptionAsync = createAsyncThunk(
  'subscription/cancelSubscription',
  async () => {
    // TODO: Implement actual API call
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscription/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to cancel subscription');
    }
    return await response.json();
  }
);

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    updateSubscription(state, action) {
      state.subscription = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptionPlans.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSubscriptionPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.availablePlans = action.payload;
      })
      .addCase(fetchSubscriptionPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch plans';
      })
      .addCase(fetchCurrentSubscription.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentSubscription.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subscription = action.payload;
      })
      .addCase(fetchCurrentSubscription.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch subscription';
      })
      .addCase(cancelSubscriptionAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(cancelSubscriptionAsync.fulfilled, (state) => {
        state.isLoading = false;
        if (state.subscription) {
          state.subscription.status = 'canceled';
        }
      })
      .addCase(cancelSubscriptionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to cancel subscription';
      });
  },
});

export const { clearError, updateSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
