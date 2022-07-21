import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sequencer from '../features/sequencer/sequencerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sequencer,
  },
});
