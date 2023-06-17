import type CartState from "@/entities/Cart/types/CartState.type";
import isCartItems from "@/entities/Cart/lib/guards/isCartItems.guard";
import logger from "@/shared/lib/logger/logger";

const KEY = "cartStore/list";
export const getCartFromStorage = (defaultValue: CartState["list"]) => {
  try {
    const cart = localStorage.getItem(KEY);
    if (cart) {
      const result = JSON.parse(cart);
      if (isCartItems(result)) {
        return result;
      }
    }
  } catch (e) {
    logger(e);
  }
  return defaultValue;
};
export const setCartToStorage = (defaultValue: CartState["list"]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(defaultValue));
  } catch (e) {
    logger(e);
    return;
  }
};
