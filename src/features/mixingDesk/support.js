export const channelEq = {
  hpf: {
    hz: 0,
  },
  lpf: {
    hz: 0,
  },
  lf: {
    hz: 0,
    shelf: true,
  },
  lmf: {
    hz: 0,
  },
  hmf: {
    hz: 0,
  },
  hf: {
    hz: 0,
    shelf: true,
  }
};

export const channelComp = {
  inputGain: 0,
  threshold: 0,
  ratio: 3,
  attack: 10,
  release: 30,
  makeupGain: 0,
  // knee: 0,
  // mix: 100,
};

export const mixingDeskChannel = {
  name: '',
  gain: 0,
  volume: 0.9,
  panning: 0,
  eq: channelEq,
  comp: channelComp,
};
