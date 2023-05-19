import type Shop from "@/entities/Shops/types/Shop.type";

export default function hasUniqueShopIds(shops: Shop[]): boolean {
  const idMap: { [id: string]: boolean } = {};

  for (const item of shops) {
    if (idMap[item.id]) {
      return false;
    }
    idMap[item.id] = true;
  }

  return true;
}
