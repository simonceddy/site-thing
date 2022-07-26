import { createSlice } from '@reduxjs/toolkit';

const params = {
  inputGain: 0,
  threshold: 0,
  ratio: 3,
  attack: 10,
  release: 30,
  makeupGain: 0,
  knee: 0,
  mix: 100,
};

export const compressorSlice = createSlice({
  name: 'compressor',
  initialState: {
    params
  },
  reducers: {
    setCompressorParam: (state, action) => {
      // console.log('set compressor param', action.payload.param);
      state.params[action.payload.param] = action.payload.value;
    },
  },
});

export const { setCompressorParam } = compressorSlice.actions;

export default compressorSlice.reducer;
