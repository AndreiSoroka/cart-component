import type ShopItem from "../types/ShopItem.type";
import isShopItem from "./isShopItem.guard";

export default function isShopItems(list: unknown): list is ShopItem[] {
  return !!list && Array.isArray(list) && list.every(isShopItem);
}
