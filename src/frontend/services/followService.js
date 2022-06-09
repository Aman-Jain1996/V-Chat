import axios from "axios";

export const followUserService = async (followUserId, encodedToken) =>
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const unFollowUserService = async (followUserId, encodedToken) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
