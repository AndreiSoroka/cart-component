import type CartItem from "../types/CartItem.type";

const isCartItem = (item: unknown): item is CartItem =>
  !!item &&
  typeof item === "object" &&
  "id" in item &&
  "productName" in item &&
  "shopId" in item &&
  typeof item.id === "string" &&
  typeof item.productName === "string" &&
  typeof item.shopId === "string";
export default isCartItem;
