import { createSlice } from '@reduxjs/toolkit';

export const synthBasicsSlice = createSlice({
  name: 'synthBasics',
  initialState: {
    chapter: 0
  },
  reducers: {
    setChapter: (state, action) => {
      state.chapter = action.payload;
    }
  },
});

export const { setChapter } = synthBasicsSlice.actions;

export default synthBasicsSlice.reducer;
