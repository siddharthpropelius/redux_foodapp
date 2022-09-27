import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import foodSlice from '../slices/foodSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    food: foodSlice.reducer,
  },
});

export default store;
