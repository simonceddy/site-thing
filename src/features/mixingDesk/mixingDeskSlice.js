import { createSlice } from '@reduxjs/toolkit';

export const mixingDeskSlice = createSlice({
  name: 'mixingDesk',
  initialState: {
    channels: []
  },
  reducers: {
    addChannel: (state, action) => {
      state.channels.push(action.payload);
    },
    removeChannel: (state, action) => {
      state.channels = state.channels.filter((ch) => ch !== action.payload);
    },
    setChannelName: (state, action) => {
      if (state.channels[action.payload.index]) {
        state.channels[action.payload.index].name = action.payload.value;
      }
    },
    setChannelCompParam: (state, action) => {
      if (state.channels[action.payload.index]) {
        state.channels[action.payload.index].comp[action.payload.param] = action.payload.value;
      }
    },
    setChannelEqParam: (state, action) => {
      if (state.channels[action.payload.index]) {
        state.channels[action.payload.index].eq[action.payload.param] = action.payload.value;
      }
    }
  },
});

export const {
  addChannel,
  removeChannel,
  setChannelName,
  setChannelCompParam,
  setChannelEqParam
} = mixingDeskSlice.actions;

export default mixingDeskSlice.reducer;
