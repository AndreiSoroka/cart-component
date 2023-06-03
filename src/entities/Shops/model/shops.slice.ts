import { createSelector, createSlice } from "@reduxjs/toolkit";
import type ShopsState from "@/entities/Shops/types/ShopsState.type";
import { getShops } from "@/entities/Shops/api/getShops.api";
import type { RootState } from "@/store";

const initialState: ShopsState = {
  list: [],
  error: "",
  isLoading: false,
  isLoaded: false,
};
const shopsSlice = createSlice({
  name: "shops",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getShops.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.error = "";
        state.list = action.payload;
      })
      .addCase(getShops.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.error = action?.error?.message || "Something wrong";
      });
  },
});

const selectShopsLoading = (state: RootState) => state.shops.isLoading;
const selectShopsLoaded = (state: RootState) => state.shops.isLoaded;
export const selectShopsList = (state: RootState) => state.shops.list;
export const selectShopsDisabled = createSelector(
  selectShopsLoading,
  selectShopsLoaded,
  (isLoading, isLoaded) => !isLoaded || isLoading
);

export default shopsSlice;
