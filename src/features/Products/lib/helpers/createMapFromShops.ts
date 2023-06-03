import type ShopType from "@/entities/Shops/types/Shop.type";

const createMapFromShops = (shops: ShopType[]) =>
  shops.reduce<{ [key: string]: string }>((value, shop) => {
    return { ...value, [shop.id]: shop.name };
  }, {});
export default createMapFromShops;
