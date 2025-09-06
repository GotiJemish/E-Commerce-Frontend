import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import toastReducer from "./slice/toastSlice";
import vendorReducer from "./slice/vendorSlice";
import productReducer from "./slice/productSlice";
import categoryReducer from "./slice/categorySlice";

export const store = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      toast: toastReducer,
      vendor: vendorReducer,
      product: productReducer,
      category: categoryReducer
    },
  });
