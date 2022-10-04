import { createSlice } from '@reduxjs/toolkit';

const worker = new Worker('sce/clockWorker.js');
worker.onmessage = (m) => console.log(m.data);

export const modes = {
  EDIT: 0,
  PERF: 1,
  KEYS: 2
};

export const displayModes = {
  PROJ: 1,
};

export const kernelSlice = createSlice({
  name: 'kernel',
  initialState: {
    mode: modes.EDIT,
    isPlaying: false,
    displayMode: displayModes.PROJ,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setDisplayMode: (state, action) => {
      state.displayMode = action.payload;
    },
    togglePlay: (state) => {
      const newState = !state.isPlaying;
      // worker.postMessage(newState ? 'start' : 'stop');
      state.isPlaying = newState;
    }
  },
});

export const { setMode, togglePlay, setDisplayMode } = kernelSlice.actions;

export default kernelSlice.reducer;
