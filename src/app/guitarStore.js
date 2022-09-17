import { configureStore } from '@reduxjs/toolkit';
import guitar from '../features/guitarExplorer/guitarSlice';

export const guitarStore = configureStore({
  reducer: {
    guitar
  },
});
