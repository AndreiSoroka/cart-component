import type { EntityState } from "@reduxjs/toolkit";
import type Shop from "@/entities/Shops/types/Shop.type";

type ShopsState = {
  list: EntityState<Shop>;
  isLoading: boolean;
  error: string;
  isLoaded: boolean;
};

export default ShopsState;
