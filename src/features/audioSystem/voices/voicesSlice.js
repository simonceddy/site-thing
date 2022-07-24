import { createSlice } from '@reduxjs/toolkit';
import { defaultVoices } from '../../../support/audioSystem';

export const voicesSlice = createSlice({
  name: 'voices',
  initialState: { tracks: defaultVoices },
  reducers: {

  },
});

// export const { } = voicesSlice.actions;

export default voicesSlice.reducer;
