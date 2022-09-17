import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import synthBasics from '../features/synthBasics/synthBasicsSlice';
import app from '../features/app/appSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    synthBasics,
    app
  },
});
