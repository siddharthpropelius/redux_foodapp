import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import FoodList from '../../components/FoodList';

export const fetchData = createAsyncThunk('food/list', async (  ) => {
  try {
    return FoodList;
  } catch (error) {
    return error.message;
  }
});

const foodSlice = createSlice({
  name: 'food',
  initialState: { foodList: [], cartList: [], totalItem: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalItem++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartList = state.cartList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalItem--;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.foodList = action.payload;
    },
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice;
