// productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/Utils/apiClients";
import { setToast, clearToast } from "./toastSlice";

// Async thunk to fetch product list
export const getProductList = createAsyncThunk(
  "products/getProductList",
  async ({ offset,limit }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(clearToast());

      const response = await apiClient.get("/products/", {
        params: { offset,limit },
      });

      return response.data;
    } catch (error) {
      dispatch(
        setToast({
          variant: "danger",
          message: error?.response?.data?.detail || "Failed to fetch products",
        })
      );
      return rejectWithValue(error.response?.data?.detail || "Unknown error");
    }
  }
);

// Initial state
const initialState = {
  productList: [],
  loading: false,
  error: null,
};

// Product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productList = [];
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
        state.error = null;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.productList = [];
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { setProductList } = productSlice.actions;
export default productSlice.reducer;
