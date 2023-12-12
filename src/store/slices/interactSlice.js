// slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const interactSlice = createSlice({
  name: 'interact',
  initialState: {
    isSidebar: false,
    isAdminSidebar: false,
    isLang: false,
    lang : 0
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar
    },
    toggleAdminSidebar: (state) => {
      state.isAdminSidebar = !state.isAdminSidebar
    },
    toggleLanguage: (state) => {
      state.isLang = !state.isLang
    },
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    // toggleSidebar: (state, action) => {
    //   state.isAuthenticated = true;
    //   state.user = action.payload;
    // },
  },
});

export const { toggleLanguage, toggleSidebar, changeLanguage, toggleAdminSidebar } = interactSlice.actions;
export const selectInteract = (state) => state.interact;
export default interactSlice.reducer;
