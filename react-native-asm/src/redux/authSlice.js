import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  fullName: '',
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.isLogin = true;
      state.email = payload?.email;
      state.fullName = payload?.fullName;
    },
    logout: state => {
      state.isLogin = false;
      state.fullName = '';
      state.email = '';
    },
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
