import { createSlice } from '@reduxjs/toolkit';

interface iError {
  error: boolean;
}

const initialState: iError = {
  error: false,
};

export const errorPageSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorPageSlice.actions;

export default errorPageSlice.reducer;
