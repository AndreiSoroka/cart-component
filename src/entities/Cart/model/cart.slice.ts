import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type CartState from "@/entities/Cart/types/CartState.type";
import {
  getCartFromStorage,
  setCartToStorage,
} from "@/entities/Cart/lib/helpers/cartStorage";
import type AddItemToCartPayloadType from "@/entities/Cart/types/AddItemToCartPayload.type";

const initialState: CartState = {
  list: getCartFromStorage([]),
};

const cartSlice = createSlice({
  name: "Cart",
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
