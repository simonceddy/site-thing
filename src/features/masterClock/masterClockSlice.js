import { createSlice } from '@reduxjs/toolkit';

export const masterClockSlice = createSlice({
  name: 'masterClock',
  initialState: {
    tempo: 120,
  },
  reducers: {
    setTempo: (state, action) => {
      state.tempo = action.payload;
    },
  },
});

export const { setTempo } = masterClockSlice.actions;

export default masterClockSlice.reducer;
