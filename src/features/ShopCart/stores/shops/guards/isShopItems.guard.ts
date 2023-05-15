import type ShopItem from "../types/Shop.type";
import isShopItem from "./isShopItem.guard";

export default function isShopItems(list: unknown): list is ShopItem[] {
  return !!list && Array.isArray(list) && list.every(isShopItem);
}
