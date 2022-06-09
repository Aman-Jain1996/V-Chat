import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  followUserService,
  getAllUsersService,
  unFollowUserService,
} from "../../services";
import { updateUserDetails } from "../auth/AuthSlice";

const initialState = {
  users: [],
  userLoading: false,
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await getAllUsersService();
    return response.data.users;
  } catch (error) {
    console.error(error.response.data);
  }
});

export const followUser = createAsyncThunk(
  "user/followUser",
  async ({ userId, authToken, dispatch }, { rejectWithValue }) => {
    try {
      const response = await followUserService(userId, authToken);
      dispatch(updateUserDetails({ userData: response.data.user, authToken }));
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "user/unFollowUser",
  async ({ userId, authToken, dispatch }, { rejectWithValue }) => {
    try {
      const response = await unFollowUserService(userId, authToken);
      dispatch(updateUserDetails({ userData: response.data.user, authToken }));
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.userLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (action) => {
      state.userLoading = false;
      console.error(action.payload);
    },
    [followUser.pending]: (state) => {
      state.userLoading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.users = action.payload.allUsers;
    },
    [followUser.rejected]: (state) => {
      state.userLoading = false;
    },
    [unFollowUser.pending]: (state) => {
      state.userLoading = true;
    },
    [unFollowUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.users = action.payload.allUsers;
    },
    [unFollowUser.pending]: (state) => {
      state.userLoading = false;
    },
  },
});

export const userReducer = usersSlice.reducer;
