import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  postReducer,
  profileReducer,
  userReducer,
} from "../features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    posts: postReducer,
    user: userReducer,
  },
});
