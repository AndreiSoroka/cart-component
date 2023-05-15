import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type ShopsState from "@/features/ShopCart/stores/shops/types/ShopsState.type";
import isShopItems from "./guards/isShopItems.guard";
import api from "@/api";

const initialState: ShopsState = {
  list: [],
  error: "",
  isLoading: false,
};

export const getShops = createAsyncThunk("shops/getShops", async () => {
  const list = await api("/api/shops.json");
  if (!isShopItems(list)) {
    throw new Error("Something wrong");
  }
  return list;
});

const shopsSlice = createSlice({
  name: "shops",
  initialState: initialState,
  reducers: {
    noop: (state) => state, // store is small, so reducers is empty
  },
  extraReducers(builder) {
    builder
      .addCase(getShops.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.list = [...action.payload];
      })
      .addCase(getShops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message || "Something wrong";
      });
  },
});

export default shopsSlice;
