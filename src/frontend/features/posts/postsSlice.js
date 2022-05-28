import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createNewPostService,
  deletePostByIdService,
  editPostByIdService,
  getAllPostsService,
  getPostsByUsernameService,
} from "../../services";
import { ToastHandler } from "../../utils/toastUtils";

const initialState = {
  allPosts: [],
  userPosts: [],
  filterBy: "latest",
};

export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getPostsByUsernameService(username);
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const response = await getAllPostsService();
    return response.data.posts;
  } catch (error) {
    console.error(error.response.data);
  }
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const response = await createNewPostService(postData, authToken);
      ToastHandler("success", "Posted Successfully!");
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const response = await editPostByIdService(postData, authToken);
      ToastHandler("success", "Post Updated Successfully!");
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await deletePostByIdService(postId, authToken);
      ToastHandler("success", "Post Deleted!");
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: {
    [getUserPosts.fulfilled]: (state, action) => {
      state.userPosts = action.payload;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
    },
    [createPost.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
    },
  },
});

export const postReducer = postsSlice.reducer;
export const { changeFilter } = postsSlice.actions;
