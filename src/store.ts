import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./entities/Cart/model/cart/cart.slice";
import ShopsSlice from "./entities/Shops/model/shops/shops.slice";

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    shops: ShopsSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
