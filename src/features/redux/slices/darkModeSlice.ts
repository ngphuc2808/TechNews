import { createSlice } from '@reduxjs/toolkit';

export interface iDarkModeState {
  mode: boolean;
}

const initialState: iDarkModeState = {
  mode: false,
};

export const darkModeSlice = createSlice({
  name: 'dark-mode',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
