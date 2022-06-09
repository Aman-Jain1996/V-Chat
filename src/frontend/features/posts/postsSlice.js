import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCommentToPostService,
  createNewPostService,
  deleteCommentOnPostService,
  deletePostByIdService,
  dislikePostService,
  editPostByIdService,
  getAllPostsService,
  getCommentsByPostIdService,
  getPostsByUsernameService,
  likePostService,
} from "../../services";
import { ToastHandler } from "../../utils/toastUtils";

const initialState = {
  allPosts: [],
  userPosts: [],
  filterBy: "latest",
  postLoading: false,
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

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await likePostService(postId, authToken);
      ToastHandler("success", "Post Liked!");
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await dislikePostService(postId, authToken);
      ToastHandler("success", "Post Disliked!");
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const addCommentToPost = createAsyncThunk(
  "posts/addCommentToPost",
  async ({ postId, commentData, authToken }, { rejectWithValue }) => {
    try {
      const response = await addCommentToPostService(
        postId,
        commentData,
        authToken
      );
      return response.data.posts;
    } catch (err) {
      console.error(err.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCommentFromPost = createAsyncThunk(
  "posts/deleteCommentFromPost",
  async ({ postId, commentId, authToken }, { rejectWithValue }) => {
    try {
      const response = await deleteCommentOnPostService(
        postId,
        commentId,
        authToken
      );
      return response.data.posts;
    } catch (err) {
      console.error(err.response.data);
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
    [getUserPosts.pending]: (state) => {
      state.postLoading = true;
    },
    [getUserPosts.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.userPosts = action.payload;
    },
    [getUserPosts.rejected]: (state) => {
      state.postLoading = false;
    },
    [getAllPosts.pending]: (state) => {
      state.postLoading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
    },
    [getAllPosts.rejected]: (state) => {
      state.postLoading = false;
    },
    [createPost.pending]: (state) => {
      state.postLoading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
    },
    [createPost.rejected]: (state) => {
      state.postLoading = false;
    },
    [updatePost.pending]: (state) => {
      state.postLoading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
    },
    [updatePost.rejected]: (state) => {
      state.postLoading = false;
    },
    [deletePost.pending]: (state) => {
      state.postLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
    },
    [deletePost.rejected]: (state) => {
      state.postLoading = false;
    },
    [likePost.pending]: (state) => {
      state.postLoading = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
    },
    [likePost.rejected]: (state) => {
      state.postLoading = false;
    },
    [dislikePost.pending]: (state) => {
      state.postLoading = true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
    },
    [dislikePost.rejected]: (state) => {
      state.postLoading = false;
    },
    [addCommentToPost.pending]: (state) => {
      state.postLoading = true;
    },
    [addCommentToPost.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
      ToastHandler("success", "Comment Added Successfully");
    },
    [addCommentToPost.rejected]: (state) => {
      state.postLoading = false;
    },
    [deleteCommentFromPost.pending]: (state) => {
      state.postLoading = true;
    },
    [deleteCommentFromPost.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.allPosts = action.payload;
      ToastHandler("success", "Comment Removed Successfully");
    },
    [deleteCommentFromPost.rejected]: (state) => {
      state.postLoading = false;
    },
  },
});

export const postReducer = postsSlice.reducer;
export const { changeFilter } = postsSlice.actions;
