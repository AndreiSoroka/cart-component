import type Cart from "../types/Cart.type";
import isCartItem from "./isCartItem.guard";

export default function isCartItems(list: unknown): list is Cart[] {
  return !!list && Array.isArray(list) && list.every(isCartItem);
}
