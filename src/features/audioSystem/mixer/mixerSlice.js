import { createSlice } from '@reduxjs/toolkit';

const mixerChannelObj = {
  volume: 1,
  panning: 0,
  mute: false,
  solo: false,
  compressor: null,
  eq: null,
  hpf: null,
  lpf: null
};

const trackParamUpdater = (param) => (state, action) => {
  if (state.tracks[action.payload.track]) {
    state.tracks[action.payload.track][param] = action.payload.value;
  }
};

export const mixerSlice = createSlice({
  name: 'mixer',
  initialState: {
    master: { volume: 1, compressorOn: false, eqOn: false },
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
    setPanningFor: trackParamUpdater('panning'),
    setMasterVolume: (state, action) => {
      state.master.volume = action.payload;
    },
    toggleMasterComp: (state) => {
      state.master.compressorOn = !state.master.compressorOn;
    },
    toggleMasterEq: (state) => {
      state.master.eqOn = !state.master.eqOn;
    },
  },
});

export const {
  toggleMuteFor,
  toggleSoloFor,
  setPanningFor,
  setVolumeFor,
  setMasterVolume,
  toggleMasterComp,
  toggleMasterEq
} = mixerSlice.actions;

export default mixerSlice.reducer;
