import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/Utils/apiClients";
import { setToast, clearToast } from "./toastSlice";

// Async Thunk
export const getVendorList = createAsyncThunk(
  "vendor/list",
  async (req,{ dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearToast());
      const response = await apiClient.get("/vendor/");
      dispatch(setLoading(false));
      return response.data;
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(
        setToast({
          varient: "danger",
          message: error?.response?.data?.detail || "Data fetching failed",
        })
      );
      return rejectWithValue(error.response?.data);
    }
  }
);

const initialState = {
  vendorList: [],
  loading: false,
};

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    setVendorList(state, action) {
      state.vendorList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVendorList.fulfilled, (state, action) => {
      state.vendorList = action.payload;
    });
  },
});

export const { setVendorList, setLoading } = vendorSlice.actions;
export default vendorSlice.reducer;
