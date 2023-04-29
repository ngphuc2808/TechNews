import { createSlice } from '@reduxjs/toolkit';

interface iDarkModeState {
  mode: boolean;
  title: string;
}

const initialState: iDarkModeState = {
  mode: false,
  title: 'light',
};

export const darkModeSlice = createSlice({
  name: 'dark-mode',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.mode = action.payload.mode;
      state.title = action.payload.title;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
