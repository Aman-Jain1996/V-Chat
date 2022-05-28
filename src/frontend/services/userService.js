import axios from "axios";

export const getAllUsersService = async () => axios.get("/api/users");

export const getUserDetailsService = async (username) =>
  axios.get(`/api/users/${username}`);
