import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// local
import type CartState from "../types/CartState.type";
import type AddItemToCartPayloadType from "../types/AddItemToCartPayload.type";
import {
  getCartFromStorage,
  setCartToStorage,
} from "../lib/helpers/cartStorage";

const initialState: CartState = {
  list: getCartFromStorage([]),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<AddItemToCartPayloadType>) => {
      const payload = {
        ...action.payload,
        id: nanoid(),
      };
      state.list.push(payload);
      setCartToStorage(state.list);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      setCartToStorage(state.list);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const selectCartProducts = (state: { cart: CartState }) =>
  state.cart.list;

export default cartSlice;
