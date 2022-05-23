import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
    firstName: "Aman",
    lastName: "Jain",
    username: "amanjain",
    password: "amanjain1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "An aspiring Full Stack Developer! Growing with NeoG!",
    websiteURL: "https://portfolio-amanjain.netlify.app/",
    avatarURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653216526/Social%20Media/4333609_iftyzl.webp",
    followers: [],
    following: [],
    bookmarks: [],  
    posts: [],
  },
];
