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

export const allVoices = {
  duneDullKick: {
    key: 'duneDullKick',
    name: 'Dune Dull Kick',
    src: '/seq/samples/dune3 kick1 duller.ogg'
  },
  duneKick: {
    key: 'duneKick',
    name: 'Dune Kick',
    src: '/seq/samples/dune3 kick1.ogg'
  },
  plantAlmostKick: {
    key: 'plantAlmostKick',
    name: 'Plant Almost Kick',
    src: '/seq/samples/phaseplant almostkick1.ogg'
  },
  plantGravityKick: {
    key: 'plantGravityKick',
    name: 'Plant Gravity Kick',
    src: '/seq/samples/phaseplant gravitykick1.ogg'
  },
  plantGrimeKick: {
    key: 'plantGrimeKick',
    name: 'Plant Grime Kick',
    src: '/seq/samples/phaseplant grimekick1.ogg'
  },
  plantAlmostSnare: {
    key: 'plantAlmostSnare',
    name: 'Plant Almost Snare',
    src: '/seq/samples/phaseplant almostsnare1.ogg'
  },
  plantBrushSnare: {
    key: 'plantBrushSnare',
    name: 'Plant Brush Snare',
    src: '/seq/samples/phaseplant brushbashingsnare1.ogg'
  },
  plantDigiTunedSnare: {
    key: 'plantDigiTunedSnare',
    name: 'Plant Digi Tuned Snare',
    src: '/seq/samples/phaseplant digitunedsnare1.ogg'
  },
  plantDrJSnare: {
    key: 'plantDrJSnare',
    name: 'Plant Dr J Snare',
    src: '/seq/samples/phaseplant doctor j snare.ogg'
  },
  plantHat: {
    key: 'plantHat',
    name: 'Plant Hat',
    src: '/seq/samples/phaseplant hat med 1.ogg'
  },
  plantPhaseHat: {
    key: 'plantPhaseHat',
    name: 'Plant Phase Hat',
    src: '/seq/samples/phaseplant phaseyhat1.ogg'
  },
  plantFuzzTom: {
    key: 'plantFuzzTom',
    name: 'Plant Fuzz Tom',
    src: '/seq/samples/phaseplant fuzzytom1.ogg'
  },
  plantDigiPerc: {
    key: 'plantDigiPerc',
    name: 'Plant Digi Perc',
    src: '/seq/samples/phaseplant digiperc1.ogg'
  },
  plantGlitchHit1: {
    key: 'plantGlitchHit1',
    name: 'Plant Glitch Hit',
    src: '/seq/samples/phaseplant glitchhit1.ogg'
  },
  plantGlitchPerc: {
    key: 'plantGlitchPerc',
    name: 'Plant Glitch Perc',
    src: '/seq/samples/phaseplant glitchperc 2.ogg'
  },
  plantGong: {
    key: 'plantGong',
    name: 'Plant Gong ',
    src: '/seq/samples/phaseplant gong1.ogg'
  },
  plantLaser: {
    key: 'plantLaser',
    name: 'Plant Laser ',
    src: '/seq/samples/phaseplant laser1.ogg'
  },
};

export const defaultVoices = {
  voice1: allVoices.duneDullKick,
  voice2: allVoices.plantBrushSnare,
  voice3: allVoices.plantHat,
  voice4: allVoices.plantPhaseHat,
};

// const test = new Wad({ source: voices.voice1.src });

export function loadVoices(voices = []) {
  const loadedVoices = voices.map(({ src }) => (
    new Wad({
      source: src
    })
  ));

  return loadedVoices;
}
