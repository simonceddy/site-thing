import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    darkMode: false
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    }
  },
});

export const { toggleDarkMode } = displaySlice.actions;

export default displaySlice.reducer;
