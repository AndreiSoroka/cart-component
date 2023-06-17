import type Cart from "../../types/CartItem.type.ts";
import isCartItem from "./isCartItem.guard.ts";

const isCartItems = (list: unknown): list is Cart[] =>
  !!list && Array.isArray(list) && list.every(isCartItem);
export default isCartItems;
