import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    mode: 0
  },
  reducers: {
    setAppMode: (state, action) => {
      state.mode = action.payload;
    }
  },
});

export const { setAppMode } = appSlice.actions;

export default appSlice.reducer;
