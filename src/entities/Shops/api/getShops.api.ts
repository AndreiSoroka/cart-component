import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/shared/api";
import isShopItems from "@/entities/Shops/guards/isShopItems.guard";
import sortShopsFromApi from "@/entities/Shops/lib/helpers/sortShopsFromApi";
import hasUniqueShopIds from "@/entities/Shops/lib/helpers/hasUniqueShopIds";

export const getShops = createAsyncThunk("shops/getShops", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const list = await api("/api/shops.json");
  if (!isShopItems(list) || !hasUniqueShopIds(list)) {
    throw new Error("Something wrong");
  }
  return sortShopsFromApi(list);
});
