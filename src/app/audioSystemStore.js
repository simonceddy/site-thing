import { configureStore } from '@reduxjs/toolkit';
import sequencer from '../features/sequencer/sequencerSlice';
import masterClock from '../features/masterClock/masterClockSlice';
import modMatrix from '../features/modMatrix/modMatrixSlice';
import voices from '../features/voices/voicesSlice';
import filters from '../features/filter/filterSlice';
import modulators from '../features/modulators/modulatorSlice';
import programEq from '../features/eddyqualiser/programEqSlice';
import compressor from '../features/compressor/compressorSlice';

export const audioSystemStore = configureStore({
  reducer: {
    sequencer,
    masterClock,
    modMatrix,
    voices,
    filters,
    modulators,
    programEq,
    compressor
  },
});
