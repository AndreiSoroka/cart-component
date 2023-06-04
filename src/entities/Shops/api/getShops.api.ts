import { createAsyncThunk } from "@reduxjs/toolkit";
import service from "@/shared/api/service";

export const getShops = createAsyncThunk("shops/getShops", () =>
  service.api.getShops().then(
    (response) => response.data,
    (response) => {
      throw new Error(response.error?.errorMessage);
    }
  )
);
