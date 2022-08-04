import { guitarParts } from './partlist';

export const guitarInfo = {
  url: 'https://maton.com.au/product/ms500',
  maker: 'Maton',
  model: 'MS500',
  pickups: {
    neck: 'EMG60',
    bridge: 'EMG85'
  },
  strings: 'Ernie Ball etc',
  misc: '',
};

export const defaultViewBox = {
  x: 0, y: 0, w: 650, h: 1750
};

export const articles = {
  summary: {
    title: 'Info',
    body: 'Hello'
  },
  guitarBody: {
    title: 'Guitar body',
    body: 'This is still the original guitar body! Mostly... It has been routed out to fit EMG sized pickups and a battery pack, which is accessible from the back of the body.'
  },
  guitarNeck: {
    title: 'Guitar Neck',
    body: 'This is the second neck this guitar had. Whoops!'
  },
  headAndTuners: {
    title: 'Guitar head and tuning pegs',
    body: 'The tuning pegs have also been replaced, and sort of fit, and the nut has been sanded back to fit my chunky strings.'
  },
  bridge: {
    title: 'Bridge',
    body: 'This is the original bridge! (I think).'
  },
  originalPickups: {
    title: 'Pickups',
    body: 'These are the original pickups that are no longer in the guitar. I have them in a box. The neck is single coil, while the bridge pickup is switchable between single coil and humbucker.'
  }
};

export const guitarPartsPreset = {
  neckPickup: null,
  bridgePickup: null,
  strings: null,
  neck: null,
  plate: null,
  nameplate: null,
  pickupSelector: null,
  volumeKnob: null,
  toneKnob: null,
  pickupSwitch: null
};

export const customColoursPreset = {
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
};

export function makePartsArray(parts = {}) {
  return Object.keys(parts).map((key) => ({
    key,
    ...parts[key]
  }));
}

export function getPartsFor(key) {
  switch (key) {
    case 'neckPickup':
    case 'bridgePickup':
      return makePartsArray(guitarParts.pickups);
    default:
      return guitarParts[key] ? makePartsArray(guitarParts[key]) : [];
  }
}
