// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    removeCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((cart) => cart.id !== action.payload.id),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
  },
});

export const { addtoCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
