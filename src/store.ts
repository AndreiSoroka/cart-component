import type { PreloadedState } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./entities/Cart/model/cart/cart.slice";
import ShopsSlice from "./entities/Shops/model/shops/shops.slice";

const rootReducer = combineReducers({
  cart: CartSlice.reducer,
  shops: ShopsSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
