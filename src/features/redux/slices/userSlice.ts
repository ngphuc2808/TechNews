import { iUser } from '@/src/utils/interface';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  info: iUser;
}

const userInfoInitialState = {
  name: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const initialState: UserState = {
  info: userInfoInitialState,
};

export const userSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
