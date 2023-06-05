import type ShopsState from "@/entities/Shops/types/ShopsState.type";

export const mockShopState = (): ShopsState => ({
  status: "success",
  ids: ["shop1", "shop2"],
  entities: {
    shop1: { id: "shop1", name: "Shop 1", sortOrder: 1 },
    shop2: { id: "shop2", name: "Shop 2", sortOrder: 2 },
  },
  error: "",
});

export const mockShopStateOneItem = (): ShopsState => ({
  status: "success",
  ids: ["shop1"],
  entities: {
    shop1: { id: "shop1", name: "Shop 1", sortOrder: 1 },
  },
  error: "",
});

export const mockShopStateEmpty = (): ShopsState => ({
  status: "success",
  ids: [],
  entities: {},
  error: "",
});
