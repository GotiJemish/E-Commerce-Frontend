// categories/
// productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/Utils/apiClients";
import { setToast, clearToast } from "./toastSlice";

// Async thunk to fetch category list
export const getCategoryList = createAsyncThunk(
  "categories/getCategoriesList",
  async ({ offset,limit }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(clearToast());

      const response = await apiClient.get("/categories/", {
        params: { offset,limit },
      });

      return response.data;
    } catch (error) {
      dispatch(
        setToast({
          variant: "danger",
          message: error?.response?.data?.detail || "Failed to fetch categories",
        })
      );
      return rejectWithValue(error.response?.data?.detail || "Unknown error");
    }
  }
);


// Async thunk to fetch single category detail
export const getCategoryDetail = createAsyncThunk(
  "categories/getCategoryDetail",
  async (categoryId, { dispatch, rejectWithValue }) => {
    try {
      dispatch(clearToast());
      const response = await apiClient.get(`/category/${categoryId}/`);
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


// Initial state
const initialState = {
  categoryList: [],
  categoryDetail: null,
  loading: false,
  error: null,
};

// category slice
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList(state, action) {
      state.categoryList = action.payload;
    },
      clearCategoryDetail(state) {
      state.categoryDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
     // Get Category List
      .addCase(getCategoryList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoryList = [];
      })
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
        state.error = null;
      })
      .addCase(getCategoryList.rejected, (state, action) => {
        state.loading = false;
        state.categoryList = [];
        state.error = action.payload;
      })
       // Get Category Detail
      .addCase(getCategoryDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoryDetail = null;
      })
      .addCase(getCategoryDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetail = action.payload;
        state.error = null;
      })
      .addCase(getCategoryDetail.rejected, (state, action) => {
        state.loading = false;
        state.categoryDetail = null;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { setCategoryList } = categorySlice.actions;
export default categorySlice.reducer;
