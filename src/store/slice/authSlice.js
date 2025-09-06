import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/Utils/apiClients";
import { setToast, clearToast } from "./toastSlice";

// Async Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password, pathname }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearToast());

      let route = "/user/login/";
      if (pathname.includes("vendor")) {
        route = "/vendor/login/";
      } else if (pathname.includes("admin")) {
        route = "/admin/login/";
      }

      const response = await apiClient.post(route, {
        username,
        password,
      });

      const { role, access, refresh } = response.data;

      localStorage.setItem("user", role);
      localStorage.setItem("token", access);
      localStorage.setItem("refresh-token", refresh);
      dispatch(setUserType(role));
      dispatch(setLoading(false));
      dispatch(setToast({ varient: "success", message: "Logged in!" }));

      return { role, access, refresh }; // Ensure the structure matches reducer expectations
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(
        setToast({
          varient: "danger",
          message: error?.response?.data?.detail || "Login failed",
        })
      );
      return rejectWithValue(
        error.response?.data || { detail: "Login failed" }
      );
    }
  }
);

// Initial State
const initialState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  user: null,
  userDetails: {},
  changePasswordLoading: false,
  showProfileCompletionError: false,
  isLoyverseError: false,
  userType: null,
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.clear();
      Object.assign(state, initialState);
    },
    setUserType(state, action) {
      // debugger;
      state.userType = action.payload;
    },
    setProfileCompletionError(state, action) {
      state.showProfileCompletionError = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.access;
        state.userType = action.payload.role;  // <- This ensures it’s updated
      
      })
      
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

// Export actions and reducer
export const { logout, setUserType, setProfileCompletionError, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
