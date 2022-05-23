import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "../../services";
import { ToastHandler } from "../../utils/toastUtils";
import { logout } from "../auth/AuthSlice";

const initialState = {
  userDetails: null,
};

export const fetchUserDetails = createAsyncThunk(
  "profile/fetchUserDetails",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getUserDetails(username);
      return response.data.user;
    } catch (error) {
      ToastHandler("error", "Unable to fetch User details!");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [logout.fulfilled]: (state) => {
      state.userDetails = null;
    },
    [fetchUserDetails.fulfilled]: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export default profileSlice.reducer;
