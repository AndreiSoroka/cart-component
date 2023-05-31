import type Cart from "../types/CartItem.type";
import isCartItem from "./isCartItem.guard";

export default function isCartItems(list: unknown): list is Cart[] {
  return !!list && Array.isArray(list) && list.every(isCartItem);
}
