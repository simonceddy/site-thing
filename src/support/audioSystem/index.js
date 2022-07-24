import Wad from 'web-audio-daw';

/**
 * Create a clock modulator object
 * @param {number} tempo Clock rate
 * @param {number} divisor Divisor
 * @returns {object}
 */
export function makeClockMod(tempo, divisor = 1) {
  const ms = ((60 / tempo) * 1000) / (divisor === 0 ? 1 : divisor);
  return { ms };
}

export const programEq = {
  lowLevel: 0,
  highLevel: 0
};

export const midEq = {
  lowMidBoostHz: 200,
  lowMidBoostLevel: 0,
  midAttenHz: 200,
  midAttenLevel: 0,
  highMidBoostHz: 200,
  highMidBoostLevel: 0
};

export const filters = {
  lpf: {
    hz: 20000,
    res: 0.14
  },
  hpf: {
    hz: 20,
    res: 0.14
  },
};

export const paramData = {
  inputGain: {
    label: 'Input Gain', min: -60, max: 60, step: 0.1, defaultVal: 0
  },
  threshold: {
    label: 'Threshold', min: -60, max: 60, step: 0.1, defaultVal: 0
  },
  ratio: {
    label: 'Ratio', min: 1, max: 100, step: 0.1, defaultVal: 3
  },
  attack: {
    label: 'Attack', min: 0.05, max: 400, step: 0.01, defaultVal: 5
  },
  release: {
    label: 'Release', min: 0.05, max: 400, step: 0.01, defaultVal: 30
  },
  knee: {
    label: 'Knee', min: 0, max: 6, step: 0.1, defaultVal: 3
  },
  makeupGain: {
    label: 'Makeup Gain', min: -60, max: 60, step: 0.1, defaultVal: 0
  },
};

export function validCompParamValue(key, val = 1) {
  if (paramData[key]) {
    if (val < paramData[key].min) return paramData[key].min;
    if (val > paramData[key].max) return paramData[key].max;
    return val;
  }
  return 1;
}

export const defaultVoices = {
  voice1: { src: 'samples/dune3 kick1 duller.mp3' },
  voice2: { src: 'samples/phaseplant brushbashingsnare1.mp3' },
  voice3: { src: 'samples/phaseplant hat med 1.mp3' },
  voice4: { src: 'samples/phaseplant phaseyhat1.mp3' },
};

// const test = new Wad({ source: voices.voice1.src });

export function loadVoices(voices = []) {
  const loadedVoices = voices.map(({ src }) => (
    new Wad({ source: src })
  ));

  return loadedVoices;
}
