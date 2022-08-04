import { createSlice } from '@reduxjs/toolkit';
import { guitarPartsPreset } from './support';
import { buildPresets } from './support/presets';
// import { guitarParts } from './support';

export const guitarSlice = createSlice({
  name: 'guitar',
  initialState: {
    // usecolours: false,
    colours: {
      bodyFill: { value: '#000000', name: 'Body' },
      pickupFill: { value: '#c8c8c8', name: 'Pickups' },
      hardwareFill: { value: '#757575', name: 'Hardware' },
      stdStroke: { value: '#c8c8c8', name: 'Line' },
      stringColour: { value: '#acacac', name: 'Strings' },
      fretboardFill: { value: '#000000', name: 'Fretboard' },
      headFill: { value: '#000000', name: 'Head' },
      plateFill: { value: '#000000', name: 'Plate' },
      nameplateFill: { value: '#000000', name: 'Nameplate' },
      nameplateText: { value: '#c5c5c5', name: 'Nameplate text' },
      // neckFill: { value: '#000000', name: 'Neck' },
    },
    parts: {
      ...guitarPartsPreset,
      ...buildPresets.currentBuild.parts
    },
    nameplateContent: '~ eddy ~',
    nameplateFont: 'Arial, sans-serif'
  },
  reducers: {
    setColour: (state, action) => {
      if (state.colours[action.payload.key]) {
        state.colours[action.payload.key].value = action.payload.value;
      }
    },
    // togglecolours: (state) => {
    //   state.usecolours = !state.usecolours;
    // },
    setGuitarPart: (state, action) => {
      if (state.parts[action.payload.key]) {
        state.parts[action.payload.key] = action.payload.part;
      }
    },
    setAllParts: (state, action) => {
      state.parts = { ...state.parts, ...action.payload };
    },
    setPreset: (state, action) => {
      state.parts = { ...state.parts, ...action.payload.parts };
      state.colours = Object
        .fromEntries(Object.keys(state.colours)
          .map((key) => [key, {
            value: action.payload.colours[key] || state.colours[key].value,
            name: state.colours[key].name
          }]));
      state.nameplateContent = action.payload.nameplateContent || state.nameplateContent;
      state.nameplateFont = action.payload.nameplateFont || state.nameplateFont;
    },
    setNameplateContent: (state, action) => {
      state.nameplateContent = action.payload;
    },
    setNameplateFont: (state, action) => {
      state.nameplateFont = action.payload;
    },
  },
});

export const {
  setColour,
  // togglecolours,
  setPreset,
  setNameplateContent,
  setGuitarPart,
  setAllParts
} = guitarSlice.actions;

export default guitarSlice.reducer;
