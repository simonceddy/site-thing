import { createSlice } from '@reduxjs/toolkit';

export const modes = {
  EDIT: 0,
  PERF: 1,
};

export const kernelSlice = createSlice({
  name: 'kernel',
  initialState: {
    mode: modes.EDIT
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    }
  },
});

export const { setMode } = kernelSlice.actions;

export default kernelSlice.reducer;
