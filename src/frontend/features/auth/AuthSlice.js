import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addPostToBookmarkService,
  LoginService,
  removePostFromBookmarkService,
  SignUpService,
  updateUserDetailsService,
} from "../../services";
import { ToastHandler } from "../../utils/toastUtils";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await LoginService({ username, password });
      return response.data;
    } catch (error) {
      if (error.response.status === 404)
        ToastHandler("error", "Username not registered!");
      else if (error.response.status === 401)
        ToastHandler("error", "Invalid Password!");
      else ToastHandler("error", "Couldn't Login! Please try again.");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpAction = createAsyncThunk(
  "auth/signup",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await SignUpService(userDetails);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response.status === 422)
        ToastHandler("error", "Username already exists!");
      else ToastHandler("error", "Couldn't Signup! Please try again.");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "auth/updateUserDetails",
  async ({ userData, authToken }, { rejectWithValue }) => {
    try {
      const response = await updateUserDetailsService(userData, authToken);
      return response.data.user;
    } catch (error) {
      if (error.response.status === 404)
        ToastHandler("error", "User not registered!");
      else ToastHandler("error", "Unable to update User details!");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const AddToBookmark = createAsyncThunk(
  "auth/AddToBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await addPostToBookmarkService(postId, authToken);
      ToastHandler("success", "Bookmarked Successfully!");
      return response.data.bookmarks;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const RemoveFromBookmark = createAsyncThunk(
  "auth/RemoveFromBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await removePostFromBookmarkService(postId, authToken);
      ToastHandler("success", "Removed Bookmark Successfully!");
      return response.data.bookmarks;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  authToken: JSON.parse(localStorage.getItem("authToken"))?.token,
  userDetails: JSON.parse(localStorage.getItem("userDetails"))?.user,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userDetails");
      state.authToken = null;
      state.userDetails = null;
      state.isLoading = false;
      ToastHandler("success", "Logged-out Successfully!");
    },
  },
  extraReducers: {
    [loginAction.pending]: (state) => {
      state.isLoading = true;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.authToken = action.payload.encodedToken;
      state.userDetails = action.payload.user;
      localStorage.setItem(
        "authToken",
        JSON.stringify({ token: state.authToken })
      );
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ user: state.userDetails })
      );
      ToastHandler("success", "Logged-In Successfully!");
    },
    [loginAction.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUpAction.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.authToken = action.payload.encodedToken;
      state.userDetails = action.payload.user;
      localStorage.setItem(
        "authToken",
        JSON.stringify({ token: state.authToken })
      );
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ user: state.userDetails })
      );
      ToastHandler("success", "Signed-In Successfully!");
    },
    [signUpAction.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateUserDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUserDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
      ToastHandler("success", "Profile Updated");
    },
    [updateUserDetails.rejected]: (state) => {
      state.isLoading = false;
    },
    [AddToBookmark.pending]: (state) => {
      state.isLoading = true;
    },
    [AddToBookmark.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDetails.bookmarks = action.payload;
    },
    [AddToBookmark.rejected]: (state) => {
      state.isLoading = false;
    },
    [RemoveFromBookmark.pending]: (state) => {
      state.isLoading = true;
    },
    [RemoveFromBookmark.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDetails.bookmarks = action.payload;
    },
    [RemoveFromBookmark.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
