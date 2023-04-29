import { createSlice } from '@reduxjs/toolkit';

interface iPathState {
  name: string;
  key: string;
}

interface iPath {
  path: iPathState;
}

const initialState: iPath = {
  path: {
    name: '',
    key: '',
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
