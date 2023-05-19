import { createSlice } from "@reduxjs/toolkit";
import type ShopsState from "@/entities/Shops/types/ShopsState.type";
import { getShops } from "@/entities/Shops/api/getShops.api";

const initialState: ShopsState = {
  list: [],
  error: "",
  isLoading: false,
  isLoaded: false,
};
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
        state.isLoaded = true;
        state.error = "";
        state.list = [...action.payload];
      })
      .addCase(getShops.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.error = action?.error?.message || "Something wrong";
      });
  },
});

export default shopsSlice;
