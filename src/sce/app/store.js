import { configureStore } from '@reduxjs/toolkit';
import project from '../features/project/projectSlice';
import kernel from '../features/kernel/kernelSlice';
import display from '../features/display/displaySlice';
import sequencer from '../features/sequencer/sequencerSlice';
import clock from '../features/clock/clockSlice';
import { darkModeListenerMiddleware, tracksListenerMiddleware } from '../middleware';

const store = configureStore({
  reducer: {
    project,
    kernel,
    display,
    sequencer,
    clock,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .prepend(tracksListenerMiddleware.middleware, darkModeListenerMiddleware.middleware),
});

export default store;
