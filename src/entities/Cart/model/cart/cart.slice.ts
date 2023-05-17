import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Cart from "../../types/Cart.type";
import type CartState from "@/entities/Cart/types/CartState.type";

const initialState: CartState = {
  list: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Cart>) => {
      state.list.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice;
