import type Shop from "@/entities/Shops/types/Shop.type";

type ShopsState = {
  list: Shop[];
  isLoading: boolean;
  error: string;
  isLoaded: boolean;
};

export default ShopsState;
