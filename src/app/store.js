import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import sequencer from '../features/sequencer/sequencerSlice';
// import masterClock from '../features/masterClock/masterClockSlice';
// import matrix from '../features/matrix/matrixSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // sequencer,
    // masterClock,
    // matrix
  },
});
