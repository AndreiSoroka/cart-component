import type Shop from "@/features/ShopCart/stores/shops/types/Shop.type";

type ShopsState = {
  list: Shop[];
  isLoading: boolean;
  error: string;
};

export default ShopsState;
