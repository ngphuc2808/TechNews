import { iUser } from '@/src/utils/interface';
import { createSlice } from '@reduxjs/toolkit';

interface iNavItem {
  key: string;
}

const initialState: iNavItem = {
  key: '',
};

export const navItemSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setNavItem: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { setNavItem } = navItemSlice.actions;

export default navItemSlice.reducer;
