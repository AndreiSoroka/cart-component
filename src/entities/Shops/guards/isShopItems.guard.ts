import type ShopItem from "../types/Shop.type";
import isShopItem from "./isShopItem.guard";

const isShopItems = (list: unknown): list is ShopItem[] =>
  !!list && Array.isArray(list) && list.every(isShopItem);
export default isShopItems;
