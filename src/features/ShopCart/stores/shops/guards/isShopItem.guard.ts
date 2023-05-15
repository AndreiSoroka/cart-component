import ShopItem from "../types/ShopItem.type";

export default function isShopItem(item: unknown): item is ShopItem {
  return !!item &&
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.sortOrder === 'number';
}
