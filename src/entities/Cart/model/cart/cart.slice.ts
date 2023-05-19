import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Cart from "../../types/Cart.type";
import type CartState from "@/entities/Cart/types/CartState.type";
import {
  getCartFromStorage,
  setCartToStorage,
} from "@/entities/Cart/lib/hooks/helpers/cartStorage";

const initialState: CartState = {
  list: getCartFromStorage([]),
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Cart>) => {
      state.list.push(action.payload);
      setCartToStorage(state.list);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      setCartToStorage(state.list);
    },
  },
});

export default cartSlice;
