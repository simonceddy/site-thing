import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playing: false,
  currentStep: 0,
  tempo: 120,
  steps: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
};

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    toggleStep: (state, action) => {
      state.steps[action.payload] = !state.steps[action.payload];
    },
    togglePlay: (state) => {
      state.playing = !state.playing;
    },
    nextStep: (state) => {
      const newStep = state.currentStep + 1;
      state.currentStep = newStep >= state.steps.length ? 0 : newStep;
    },
    resetSteps: (state) => {
      state.currentStep = 0;
    },
    clearSteps: (state) => {
      state.steps = initialState.steps;
    },
    setTempo: (state, action) => {
      state.tempo = action.payload;
    }
  },
});

export const {
  toggleStep, togglePlay, nextStep, resetSteps, clearSteps, setTempo
} = sequencerSlice.actions;

export default sequencerSlice.reducer;
