import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import subscriptionReducer from './slices/subscriptionSlice';
import celestialDataReducer from './slices/celestialDataSlice';
import vrExperienceReducer from './slices/vrExperienceSlice';
import chatbotReducer from './slices/chatbotSlice';
import notificationReducer from './slices/notificationSlice';
import supportReducer from './slices/supportSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    subscription: subscriptionReducer,
    celestialData: celestialDataReducer,
    vrExperience: vrExperienceReducer,
    chatbot: chatbotReducer,
    notification: notificationReducer,
    support: supportReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
