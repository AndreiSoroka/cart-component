import type Shop from "@/entities/Shops/types/Shop.type";

const compareShopsByOrderAndName = (a: Shop, b: Shop) => {
  if (a.sortOrder === b.sortOrder) {
    return a.name.localeCompare(b.name);
  }
  return a.sortOrder - b.sortOrder;
};
export default compareShopsByOrderAndName;
