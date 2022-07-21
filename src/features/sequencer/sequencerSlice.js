import { createSlice } from '@reduxjs/toolkit';

const emptySequence = [
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
];

const initialState = {
  playing: false,
  currentStep: 0,
  seqLength: 16,
  steps: {
    track1: [...emptySequence],
    track2: [...emptySequence],
    track3: [...emptySequence],
    track4: [...emptySequence],
  }
};

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    toggleStep: (state, action) => {
      const { track, step } = action.payload;
      state.steps[track][step] = !state.steps[track][step];
    },
    togglePlay: (state) => {
      state.playing = !state.playing;
    },
    nextStep: (state) => {
      const newStep = state.currentStep + 1;
      state.currentStep = newStep >= state.seqLength ? 0 : newStep;
    },
    resetSteps: (state) => {
      state.currentStep = 0;
    },
    clearSteps: (state) => {
      state.steps = initialState.steps;
    },
    setSequenceLength: (state, action) => {
      state.seqLength = action.payload;
    }
  },
});

export const {
  toggleStep, togglePlay, nextStep, resetSteps, clearSteps, setSequenceLength
} = sequencerSlice.actions;

export default sequencerSlice.reducer;
