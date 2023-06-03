import type Cart from "../types/CartItem.type";
import isCartItem from "./isCartItem.guard";

const isCartItems = (list: unknown): list is Cart[] =>
  !!list && Array.isArray(list) && list.every(isCartItem);
export default isCartItems;
