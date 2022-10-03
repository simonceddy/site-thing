import { createSlice } from '@reduxjs/toolkit';

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState: {
    page: 1
  },
  reducers: {
    setSequencerPage: (state, action) => {
      state.page = action.payload;
    }
  },
});

export const { setSequencerPage } = sequencerSlice.actions;

export default sequencerSlice.reducer;
