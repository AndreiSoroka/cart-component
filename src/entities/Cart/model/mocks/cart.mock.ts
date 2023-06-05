import type CartState from "@/entities/Cart/types/CartState.type";

export const mockCartStateEmpty = (): CartState => ({
  list: [],
});

export const mockCartState = (): CartState => ({
  list: [
    { id: "1", productName: "Product 1", shopId: "shop1" },
    { id: "2", productName: "Product 2", shopId: "shop2" },
  ],
});
