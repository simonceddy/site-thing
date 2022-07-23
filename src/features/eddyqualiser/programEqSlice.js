import { createSlice } from '@reduxjs/toolkit';
import { programEq } from '../../support/audioSystem';

export const programEqSlice = createSlice({
  name: 'programEq',
  initialState: { ...programEq },
  reducers: {
    setLowLevel: (state, action) => {
      state.lowLevel = action.payload;
    },
    setHighLevel: (state, action) => {
      state.highLevel = action.payload;
    },
  },
});

export const { setHighLevel, setLowLevel } = programEqSlice.actions;

export default programEqSlice.reducer;
