import type ShopItem from "../types/Shop.type";

export default function isShopItem(item: unknown): item is ShopItem {
  return (
    !!item &&
    typeof item === "object" &&
    "id" in item &&
    "name" in item &&
    "sortOrder" in item &&
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.sortOrder === "number"
  );
}
