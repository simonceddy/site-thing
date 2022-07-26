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

export const seqModes = {
  fwd: 'fwd',
  rev: 'rev',
  ppg: 'ppg',
  pen: 'pen',
  rnd: 'rnd',
};

export const stepLengths = [
  4,
  2,
  1,
  0.5,
  0.25,
  0.125,
  0.0725
];

const initialState = {
  playing: false,
  currentStep: 0,
  seqLength: 8,
  stepLength: 0.5,
  mode: seqModes.fwd,
  direction: 'asc', // only used by pen and ppg
  steps: {
    track1: [...emptySequence],
    track2: [...emptySequence],
    track3: [...emptySequence],
    track4: [...emptySequence],
  }
};

const fwdStep = (state) => {
  const newStep = state.currentStep + 1;
  return newStep >= state.seqLength ? 0 : newStep;
};

const revStep = (state) => {
  const newStep = state.currentStep - 1;
  return newStep < 0 ? state.seqLength - 1 : newStep;
};

const penStep = (state) => {
  let newStep = state.currentStep;
  if (state.direction === 'asc') {
    if (state.currentStep === state.seqLength - 1) {
      newStep = state.seqLength - 2;
      state.direction = 'desc';
    } else {
      newStep = state.currentStep + 1;
    }
  } else if (state.currentStep === 0) {
    newStep = 1;
    state.direction = 'asc';
  } else {
    newStep = state.currentStep - 1;
  }
  return newStep;
};

const ppgStep = (state) => {
  let newStep = state.currentStep;
  if (state.direction === 'asc') {
    if (state.currentStep >= state.seqLength - 1) {
      state.direction = 'desc';
    } else {
      newStep = state.currentStep + 1;
    }
  } else if (state.currentStep <= 0) {
    state.direction = 'asc';
  } else {
    newStep = state.currentStep - 1;
  }
  return newStep;
};

const rndStep = (state) => Math.floor(Math.random() * state.seqLength);

const nextStepHander = (state) => {
  let newStep = state.currentStep;
  switch (state.mode) {
    case seqModes.rnd:
      newStep = rndStep(state);
      break;
    case seqModes.ppg:
      newStep = ppgStep(state);
      break;
    case seqModes.pen:
      newStep = penStep(state);
      break;
    case seqModes.rev:
      newStep = revStep(state);
      break;
    case seqModes.fwd:
    default:
      newStep = fwdStep(state);
      break;
  }

  state.currentStep = newStep;
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
    nextStep: nextStepHander,
    // nextStep: (state) => {
    //   let newStep = state.currentStep;
    //   if (state.mode === seqModes.fwd) {
    //     newStep = state.currentStep + 1;
    //     if (newStep >= state.seqLength) newStep = 0;
    //   } else if (state.mode === seqModes.rev) {
    //     newStep = state.currentStep - 1;
    //     if (newStep < 0) newStep = state.seqLength - 1;
    //   } else if (state.mode === seqModes.ppg) {
    //     if (state.direction === 'asc') {
    //       if (state.currentStep >= state.seqLength - 1) {
    //         state.direction = 'desc';
    //       } else {
    //         newStep = state.currentStep + 1;
    //       }
    //     } else if (state.currentStep <= 0) {
    //       state.direction = 'asc';
    //     } else {
    //       newStep = state.currentStep - 1;
    //     }
    //   } else if (state.mode === seqModes.pen) {
    //     if (state.direction === 'asc') {
    //       if (state.currentStep === state.seqLength - 1) {
    //         newStep = state.seqLength - 2;
    //         state.direction = 'desc';
    //       } else {
    //         newStep = state.currentStep + 1;
    //       }
    //     } else if (state.currentStep === 0) {
    //       newStep = 1;
    //       state.direction = 'asc';
    //     } else {
    //       newStep = state.currentStep - 1;
    //     }
    //   } else if (state.mode === seqModes.rnd) {
    //     newStep = Math.floor(Math.random() * state.seqLength);
    //   }
    //   state.currentStep = newStep;
    // },
    resetSteps: (state) => {
      state.direction = 'asc';
      state.currentStep = 0;
    },
    clearSteps: (state) => {
      state.steps = initialState.steps;
    },
    setSequenceLength: (state, action) => {
      state.seqLength = action.payload;
    },
    setSeqMode: (state, action) => {
      if (seqModes[action.payload]) {
        state.mode = action.payload;
      }
    },
    setStepLength: (state, action) => {
      state.stepLength = action.payload;
    }
  },
});

export const {
  toggleStep,
  togglePlay,
  nextStep,
  resetSteps,
  clearSteps,
  setSequenceLength,
  setSeqMode,
  setStepLength
} = sequencerSlice.actions;

export default sequencerSlice.reducer;
