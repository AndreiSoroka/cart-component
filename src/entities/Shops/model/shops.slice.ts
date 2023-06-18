import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type { RootState } from "@/store";
// local
import type ShopsState from "../types/ShopsState.type";
import type Shop from "../types/Shop.type";
import getShopsApi from "../api/getShops.api";
import compareShopsByOrderAndName from "../lib/helpers/compareShopsByOrderAndName";

export const getShops = createAsyncThunk("shops/getShops", getShopsApi);

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

export const selectShopsOptions = createSelector(
  selectShopsList.selectAll,
  (shops) =>
    shops.map((shop) => ({
      label: shop.name,
      value: shop.id,
    }))
);
export const selectShopsDisabled = createSelector(
  selectShopsStatus,
  (status) => status !== "success"
);

export default shopsSlice;
