import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    tempo: 120,
    tracks: {},
    selectedTrackId: 0
  },
  reducers: {
    setProjectTempo: (state, action) => {
      state.tempo = Number(action.payload);
    },
    setSelectedTrack: (state, action) => {
      state.selectedTrackId = action.payload;
    }
  },
});

export const { setProjectTempo, setSelectedTrack } = projectSlice.actions;

export default projectSlice.reducer;
