import { CartItem } from "./types/CartItem.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  list: CartItem[],
}
const initialState: CartState = {
  list: [],
}

const cartSlice = createSlice({
  name: 'Cart',
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      state.list.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    }
  }
})

export default cartSlice
