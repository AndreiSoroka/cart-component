import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./features/ShopCart/stores/cart/cart.slice";
import ShopsSlice from "./features/ShopCart/stores/shops/shops.slice";

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    shops: ShopsSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
