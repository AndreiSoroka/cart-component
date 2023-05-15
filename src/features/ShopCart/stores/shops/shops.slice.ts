import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ShopItem } from "./types";
import isShopItems from "./guards/isShopItems.guard";


type State = {
  list: ShopItem[];
  isLoading: boolean,
  error: string,
}

const initialState: State = {
  list: [],
  error: '',
  isLoading: false,
}

export const getShops = createAsyncThunk('shops/getShops', async () => {
  const list = await fetch('/api/shops.json').then(data => data.json());
  if (!isShopItems(list)) {
    throw new Error('Something wrong')
  }
  return list;
})


const shopsSlice = createSlice({
  name: 'shops',
  initialState: initialState,
  reducers: {
    setShops: (state, action: PayloadAction<ShopItem[]>) => {
      state.list = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getShops.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.list = [...action.payload]
      })
      .addCase(getShops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message || 'Something wrong';
      });
  },
})

export default shopsSlice
