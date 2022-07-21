import { createSlice } from '@reduxjs/toolkit';

const voiceObj = {};

export const voicesSlice = createSlice({
  name: 'voices',
  initialState: {
    voice1: { ...voiceObj },
    voice2: { ...voiceObj },
    voice3: { ...voiceObj },
    voice4: { ...voiceObj },
  },
  reducers: {

  },
});

// export const { } = voicesSlice.actions;

export default voicesSlice.reducer;
