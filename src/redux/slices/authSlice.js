import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, user: [] },
  reducers: {
    login(state, action) {
      const user = action.payload;
      state.isLoggedIn = true;
      state.user.push(user);
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
