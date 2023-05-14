import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./features/ShopCart/stores/cart/cart.slice";

export default configureStore({
  reducer: {
    cart: CartSlice.reducer
  }
})
