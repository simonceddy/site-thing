import { createSlice } from '@reduxjs/toolkit';
import { midEq } from '../../../support/audioSystem';

export const eddyqualiserSlice = createSlice({
  name: 'eddyqualiser',
  initialState: {
    params: midEq
  },
  reducers: {
    setParam: (state, action) => {
      state.params[action.payload.param] = action.payload.value;
    }
  },
});

export const { setParam } = eddyqualiserSlice.actions;

export default eddyqualiserSlice.reducer;
