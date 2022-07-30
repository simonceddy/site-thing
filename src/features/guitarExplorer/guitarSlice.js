import { createSlice } from '@reduxjs/toolkit';
// import { guitarParts } from './support';

export const guitarSlice = createSlice({
  name: 'guitar',
  initialState: {
    useCustomColours: false,
    customColours: {
      bodyFill: { value: '#000000', name: 'Body' },
      pickupFill: { value: '#c8c8c8', name: 'Pickups' },
      hardwareFill: { value: '#757575', name: 'Hardware' },
      stdStroke: { value: '#c8c8c8', name: 'Line' },
      stringColour: { value: '#acacac', name: 'Strings' },
      fretboardFill: { value: '#000000', name: 'Fretboard' },
      // neckFill: { value: '#000000', name: 'Neck' },
    },
    parts: {
      neckPickup: 'emg60',
      bridgePickup: 'emg85',
      strings: {},
      neck: {},
      plate: {},
      nameplate: {},
      pickupSelector: {},
      volumeKnob: {},
      toneKnob: {}
    }
  },
  reducers: {
    setColour: (state, action) => {
      if (state.customColours[action.payload.key]) {
        state.customColours[action.payload.key].value = action.payload.value;
      }
    },
    toggleCustomColours: (state) => {
      state.useCustomColours = !state.useCustomColours;
    },
    setGuitarPart: (state, action) => {
      if (state.parts[action.payload.key]) {
        state.parts[action.payload.key] = action.payload.part;
      }
    },
    setAllParts: (state, action) => {
      state.parts = { ...state.parts, ...action.payload };
    }
  },
});

export const {
  setColour,
  toggleCustomColours,
  setGuitarPart,
  setAllParts
} = guitarSlice.actions;

export default guitarSlice.reducer;
