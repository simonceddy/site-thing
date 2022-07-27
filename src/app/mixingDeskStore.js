import { configureStore } from '@reduxjs/toolkit';
import mixingDesk from '../features/mixingDesk/mixingDeskSlice';

export const mixingDeskStore = configureStore({
  reducer: {
    mixingDesk
  },
});
