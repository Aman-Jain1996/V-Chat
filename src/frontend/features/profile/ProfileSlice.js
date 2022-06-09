import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserDetailsService } from "../../services";
import { logout } from "../auth/AuthSlice";

const initialState = {
  profileDetails: null,
  profileLoading: false,
};

export const fetchUserDetails = createAsyncThunk(
  "profile/fetchUserDetails",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getUserDetailsService(username);
      return response.data.user;
    } catch (error) {
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
      state.profileDetails = null;
    },
    [fetchUserDetails.pending]: (state) => {
      state.profileLoading = true;
    },
    [fetchUserDetails.fulfilled]: (state, action) => {
      state.profileLoading = false;
      state.profileDetails = action.payload;
    },
    [fetchUserDetails.rejected]: (state) => {
      state.profileLoading = false;
    },
  },
});

export const profileReducer = profileSlice.reducer;
