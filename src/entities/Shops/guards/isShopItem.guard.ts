import type ShopItem from "../types/Shop.type";

const isShopItem = (item: unknown): item is ShopItem =>
  !!item &&
  typeof item === "object" &&
  "id" in item &&
  "name" in item &&
  "sortOrder" in item &&
  typeof item.id === "string" &&
  typeof item.name === "string" &&
  typeof item.sortOrder === "number";
export default isShopItem;
