import axios from "axios";

export const getCommentsByPostIdService = (postId) =>
  axios.get(`/api/comments/${postId}`);

export const addCommentToPostService = (postId, commentData, encodedToken) =>
  axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const editCommentInPostService = (
  postId,
  commentId,
  commentData,
  encodedToken
) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteCommentOnPostService = (postId, commentId, encodedToken) =>
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

export const likeCommentService = (postId, commentId, encodedToken) =>
  axios.post(
    `/api/comments/upvote/${postId}/${commentId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
