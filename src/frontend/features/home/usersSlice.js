import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersService } from "../../services";

const initialState = {
  users: [],
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await getAllUsersService();
    return response.data.users;
  } catch (error) {
    console.error(error.response.data);
  }
});

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      console.error(action.payload);
    },
  },
});

export const userReducer = usersSlice.reducer;
