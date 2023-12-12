// slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const localUser = JSON.parse(sessionStorage.getItem('user'))

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: localUser ? true : false,
    isAdmin: false,
    user: localUser ? localUser : null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      sessionStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.user = null;
      sessionStorage.removeItem('user')
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
