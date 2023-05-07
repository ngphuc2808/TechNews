import { createSlice } from '@reduxjs/toolkit';

interface iAuth {
  register: boolean;
  login: boolean;
}

const initialState: iAuth = {
  register: false,
  login: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.register = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { setRegister, setLogin } = authSlice.actions;

export default authSlice.reducer;
