import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type CartItem from "./types/Cart.type";
import CartState from "@/features/ShopCart/stores/cart/types/CartState.type";

const initialState: CartState = {
  list: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      state.list.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice;
