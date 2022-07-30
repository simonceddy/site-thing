import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import synthBasics from '../features/synthBasics/synthBasicsSlice';
import guitar from '../features/guitarExplorer/guitarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    synthBasics,
    guitar
  },
});
