import type ShopType from "@/entities/Shops/types/Shop.type";

export default function createMapFromShops(shops: ShopType[]) {
  return shops.reduce<{ [key: string]: string }>((value, shop) => {
    return { ...value, [shop.id]: shop.name };
  }, {});
}
