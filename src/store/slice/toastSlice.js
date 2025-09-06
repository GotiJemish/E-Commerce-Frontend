import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    isMessage: false,
    varient: null,
    message: null,
  },
  reducers: {
    setToast(state, action) {
      state.varient = action.payload.varient;
      state.message = action.payload.message;
      state.isMessage = true;
    },
    clearToast(state) {
      state.isMessage = false;
      state.varient = null;
      state.message = null;
    },
  },
});

export const { setToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
