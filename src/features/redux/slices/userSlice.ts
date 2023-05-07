import { iUser } from '@/src/utils/interface';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  info: iUser;
}

const userInfoInitialState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const initialState: UserState = {
  info: userInfoInitialState,
};

export const userSlice = createSlice({
  name: 'user-register',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
