import type Shop from "@/entities/Shops/types/Shop.type";

const hasUniqueShopIds = (shops: Shop[]): boolean => {
  const idMap: Record<string, boolean> = {};

  for (const item of shops) {
    if (idMap[item.id]) {
      return false;
    }
    idMap[item.id] = true;
  }

  return true;
};
export default hasUniqueShopIds;
