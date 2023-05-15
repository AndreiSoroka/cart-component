import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./features/ShopCart/stores/cart/cart.slice";
import ShopsSlice from "./features/ShopCart/stores/shops/shops.slice";

export default configureStore({
  reducer: {
    cart: CartSlice.reducer,
    shops: ShopsSlice.reducer
  }
})
