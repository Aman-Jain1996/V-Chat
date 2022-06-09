import axios from "axios";

export const getAllPostsService = async () => axios.get(`/api/posts`);

export const getPostByIdService = async (postId) =>
  axios.get(`/api/posts/${postId}`);

export const getPostsByUsernameService = async (username) =>
  axios.get(`/api/posts/user/${username}`);

export const createNewPostService = async (postData, encodedToken) =>
  axios.post(
    `/api/posts`,
    { postData },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deletePostByIdService = async (postId, encodedToken) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const editPostByIdService = async (postData, encodedToken) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const likePostService = async (postId, encodedToken) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const dislikePostService = async (postId, encodedToken) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const getAllBookmarksService = async (encodedToken) =>
  axios.get("/api/users/bookmark", {
    headers: {
      authorization: encodedToken,
    },
  });

export const addPostToBookmarkService = async (postId, encodedToken) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const removePostFromBookmarkService = async (postId, encodedToken) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
