import { createSlice } from '@reduxjs/toolkit';
import { defaultVoices } from '../../../support/audioSystem';

export const voicesSlice = createSlice({
  name: 'voices',
  initialState: { tracks: defaultVoices },
  reducers: {
    setVoice: (state, action) => {
      if (state.tracks[action.payload.track]) {
        state.tracks[action.payload.track] = action.payload.voice;
      }
    }
  },
});

export const { setVoice } = voicesSlice.actions;

export default voicesSlice.reducer;
