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




// Initial state
const initialState = {
  categoryList: [],
  
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
      clearCategoryProducts(state) {
      state.categoryProducts = null;
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
      
  },
});

// Export actions and reducer
export const { setCategoryList } = categorySlice.actions;
export default categorySlice.reducer;
