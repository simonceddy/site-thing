import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    f1: null,
    f2: null,
  },
  reducers: {

  },
});

// export const { } = filterSlice.actions;

export default filterSlice.reducer;
