import axios from "axios";

export const LoginService = async ({ username, password }) =>
  axios.post("/api/auth/login", {
    username,
    password,
  });

export const SignUpService = (formData) =>
  axios.post("/api/auth/signup", {
    ...formData,
    bio: `Hey! I am ${formData.fName}`,
    websiteURL: "",
    avatarURL: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
  });
