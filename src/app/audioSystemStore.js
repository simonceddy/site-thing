import { configureStore } from '@reduxjs/toolkit';
import sequencer from '../features/audioSystem/sequencer/sequencerSlice';
import masterClock from '../features/audioSystem/masterClock/masterClockSlice';
// import modMatrix from '../features/audioSystem/modMatrix/modMatrixSlice';
import voices from '../features/audioSystem/voices/voicesSlice';
// import filters from '../features/audioSystem/filter/filterSlice';
// import modulators from '../features/audioSystem/modulators/modulatorSlice';
// import programEq from '../features/audioSystem/eddyqualiser/programEqSlice';
import compressor from '../features/audioSystem/compressor/compressorSlice';
import mixer from '../features/audioSystem/mixer/mixerSlice';

export const audioSystemStore = configureStore({
  reducer: {
    sequencer,
    masterClock,
    // modMatrix,
    voices,
    // filters,
    // modulators,
    // programEq,
    compressor,
    mixer
  },
});
