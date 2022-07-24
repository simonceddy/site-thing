import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import synthBasics from '../features/synthBasics/synthBasicsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    synthBasics
  },
});
