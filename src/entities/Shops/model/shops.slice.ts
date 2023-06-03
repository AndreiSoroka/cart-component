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

const ShopsAdapter = createEntityAdapter<Shop>({
  selectId: (book) => book.id,
  sortComparer: compareShopsByOrderAndName,
});

const initialState: ShopsState = {
  list: ShopsAdapter.getInitialState(),
  error: "",
  status: "idle",
};
const shopsSlice = createSlice({
  name: "shops",
  initialState: initialState,
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
        ShopsAdapter.setAll(state.list, action.payload);
      })
      .addCase(getShops.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.error?.message || "Something wrong";
      });
  },
});

const selectShopsStatus = (state: RootState) => state.shops.status;
export const selectShopsList = ShopsAdapter.getSelectors<RootState>(
  (state) => state.shops.list
);
export const selectShopsDisabled = createSelector(
  selectShopsStatus,
  (status) => status !== "success"
);

export default shopsSlice;
