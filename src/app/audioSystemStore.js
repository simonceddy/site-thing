import { configureStore } from '@reduxjs/toolkit';
import sequencer from '../features/sequencer/sequencerSlice';
import masterClock from '../features/masterClock/masterClockSlice';
import matrix from '../features/matrix/matrixSlice';
import voices from '../features/voices/voicesSlice';
import filters from '../features/filter/filterSlice';

export const audioSystemStore = configureStore({
  reducer: {
    sequencer,
    masterClock,
    matrix,
    voices,
    filters
  },
});
