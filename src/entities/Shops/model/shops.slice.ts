import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type ShopsState from "@/entities/Shops/types/ShopsState.type";
import { getShops } from "@/entities/Shops/api/getShops.api";
import type { RootState } from "@/store";
import type Shop from "@/entities/Shops/types/Shop.type";
import compareShopsByOrderAndName from "@/entities/Shops/lib/helpers/compareShopsByOrderAndName";

const shopsAdapter = createEntityAdapter<Shop>({
  sortComparer: compareShopsByOrderAndName,
});

const initialState: ShopsState = shopsAdapter.getInitialState({
  error: "",
  status: "idle",
});

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getShops.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(getShops.fulfilled, (state, action) => {
        state.status = "success";
        state.error = "";
        shopsAdapter.setAll(state, action.payload);
      })
      .addCase(getShops.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.error?.message || "Something wrong";
      });
  },
});

const selectShops = (state: RootState) => state.shops;
const selectShopsStatus = (state: RootState) => state.shops.status;
export const selectShopsList =
  shopsAdapter.getSelectors<RootState>(selectShops);
export const selectShopsDisabled = createSelector(
  selectShopsStatus,
  (status) => status !== "success"
);

export default shopsSlice;
