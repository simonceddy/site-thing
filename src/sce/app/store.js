import { configureStore } from '@reduxjs/toolkit';
import project from '../features/project/projectSlice';
import kernel from '../features/kernel/kernelSlice';
import display from '../features/display/displaySlice';
import sequencer from '../features/sequencer/sequencerSlice';
import clock from '../features/clock/clockSlice';

const store = configureStore({
  reducer: {
    project,
    kernel,
    display,
    sequencer,
    clock,
  }
});

export default store;
