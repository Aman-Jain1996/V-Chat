import axios from "axios";

export const getAllUsersService = async () => axios.get("/api/users");

export const getUserDetailsService = async (username) => {
  return axios.get(`/api/users/${username}`);
};

export const updateUserDetailsService = (userData, encodedToken) =>
  axios.post(
    `/api/users/edit`,
    {
      userData,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
