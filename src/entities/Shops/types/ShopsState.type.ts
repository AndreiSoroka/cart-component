import type { EntityState } from "@reduxjs/toolkit";
import type Shop from "@/entities/Shops/types/Shop.type";

type ShopsState = EntityState<Shop> & {
  error: string;
  status: "idle" | "pending" | "success" | "error";
};

export default ShopsState;
