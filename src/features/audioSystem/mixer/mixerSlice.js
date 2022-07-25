import { createSlice } from '@reduxjs/toolkit';

const mixerChannelObj = {
  volume: 1,
  panning: 0,
  mute: false,
  solo: false,
};

const trackParamUpdater = (param) => (state, action) => {
  if (state.tracks[action.payload.track]) {
    state.tracks[action.payload.track][param] = action.payload.value;
  }
};

export const mixerSlice = createSlice({
  name: 'mixer',
  initialState: {
    tracks: {
      voice1: { ...mixerChannelObj },
      voice2: { ...mixerChannelObj },
      voice3: { ...mixerChannelObj },
      voice4: { ...mixerChannelObj },
    }
  },
  reducers: {
    toggleMuteFor: (state, action) => {
      if (state.tracks[action.payload]) {
        state.tracks[action.payload].mute = !state.tracks[action.payload].mute;
      }
    },
    toggleSoloFor: (state, action) => {
      if (state.tracks[action.payload]) {
        state.tracks[action.payload].solo = !state.tracks[action.payload].solo;
        state.tracks[action.payload].mute = false;
      }
    },
    setVolumeFor: trackParamUpdater('volume'),
    setPanningFor: trackParamUpdater('panning')
  },
});

export const {
  toggleMuteFor, toggleSoloFor, setPanningFor, setVolumeFor
} = mixerSlice.actions;

export default mixerSlice.reducer;
