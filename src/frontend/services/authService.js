import axios from "axios";

export const LoginService = async ({ username, password }) =>
  axios.post("/api/auth/login", {
    username,
    password,
  });

export const SignUpService = (formData) =>
  axios.post("/api/auth/signup", {
    ...formData,
    followers: [],
    following: [],
    bookmarks: [],
    posts: [],
    bio: `Hey! I am ${formData.firstName}`,
    websiteURL: "",
    avatarURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653216526/Social%20Media/4333609_iftyzl.webp",
  });
