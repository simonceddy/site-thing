import { createSlice } from '@reduxjs/toolkit';
import { makeClockMod } from '../../../support/audioSystem';

export const masterClockSlice = createSlice({
  name: 'masterClock',
  initialState: {
    tempo: 120,
    tick: false,
    playing: false,
    clockMods: {
      clockMod1: null,
      clockMod2: null,
      clockMod3: null,
      clockMod4: null,
    }
  },
  reducers: {
    setTempo: (state, action) => {
      state.tempo = action.payload;
    },
    togglePlay: (state) => {
      state.playing = !state.playing;
    },
    addClockMod: (state, action) => {
      state.clockMods[action.payload.mod] = makeClockMod(
        state.tempo,
        action.payload.divisor
      );
    },
    tick: (state) => {
      state.tick = !state.tick;
      // console.log(state.tick);
    }
  },
});

export const { setTempo, togglePlay, tick } = masterClockSlice.actions;

export default masterClockSlice.reducer;
