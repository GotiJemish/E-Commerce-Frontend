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
// Async thunk to fetch single category products
export const getCategoryProductsList = createAsyncThunk(
  "categories/getCategoryDetail",
  async ({ offset,limit,category }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(clearToast());
      const response = await apiClient.get("/products/" ,{params:{ offset,limit,category }});
      return response.data;
    } catch (error) {
      dispatch(
        setToast({
          variant: "danger",
          message: error?.response?.data?.detail || "Failed to fetch category detail",
        })
      );
      return rejectWithValue(error.response?.data?.detail || "Unknown error");
    }
  }
);
// Async thunk to fetch product details
export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async ({ id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(clearToast());

      const response = await apiClient.get(`/product/${id}`);

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
  categoryProducts: [],
  productDetail:{},
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
      })
       // Get Category products
      .addCase(getCategoryProductsList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoryProducts = null;
      })
      .addCase(getCategoryProductsList.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryProducts = action.payload;
        state.error = null;
      })
      .addCase(getCategoryProductsList.rejected, (state, action) => {
        state.loading = false;
        state.categoryProducts = null;
        state.error = action.payload;
      })
       // Get Category products
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productDetail = null;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload;
        state.error = null;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.productDetail = null;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { setProductList } = productSlice.actions;
export default productSlice.reducer;
