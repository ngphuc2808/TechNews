import { createSlice } from '@reduxjs/toolkit';

interface iPathState {
  value: string;
  label: string;
}

interface iPath {
  path: iPathState;
}

const initialState: iPath = {
  path: {
    value: '',
    label: '',
  },
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setNameCategory: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { setNameCategory } = categorySlice.actions;

export default categorySlice.reducer;
