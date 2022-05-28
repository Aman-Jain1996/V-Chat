import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
    username: "amanjain",
    name: "Aman",
    firstName: "Aman",
    lastName: "Jain",
    password: "amanjain1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "An aspiring Full Stack Developer! Growing with NeoG!",
    websiteURL: "https://portfolio-amanjain.netlify.app/",
    avatarURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653216526/Social%20Media/4333609_iftyzl.webp",
    followers: [
      {
        _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
        username: "divya",
      },
      {
        _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
        username: "vishal_singh",
      },
      {
        _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
        username: "akash_singh",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
      {
        _id: "ea7f256f-e212-4a36-a490-eb0c6955a41f",
        username: "alex_pandian",
      },
      {
        _id: "4c06334c-9a26-4ba3-8b42-06ec53f63245",
        username: "jain_priyanka",
      },
    ],
    following: [
      {
        _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
        username: "divya",
      },
      {
        _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
        username: "akash_singh",
      },
      {
        _id: "4c06334c-9a26-4ba3-8b42-06ec53f63245",
        username: "jain_priyanka",
      },
    ],
    bookmarks: [],
    id: "0",
  },
  {
    _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
    username: "divya",
    firstName: "Divya",
    lastName: "Gupta",
    password: "divya1234",
    createdAt: "2022-01-25T10:38:12+05:30",
    updatedAt: "2022-05-17T10:33:36+05:30",
    avatarURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653216526/Social%20Media/4333609_iftyzl.webp",
    websiteURL: "https://google.com",
    bio: "Hi this is Divya , an ETL Developer working in Infosys",
    followers: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
        username: "vishal_singh",
      },
      {
        _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
        username: "akash_singh",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    following: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
        username: "vishal_singh",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    bookmarks: [],
    id: "1",
  },
  {
    _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
    username: "vishal_singh",
    firstName: "Vishal",
    lastName: "Singh",
    password: "vishal1234",
    createdAt: "2022-03-21T10:12:12+05:30",
    updatedAt: "2022-05-17T11:07:58+05:30",
    avatarURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653216526/Social%20Media/4333609_iftyzl.webp",
    websiteURL: "https://google.com",
    bio: "Hi, I am Vishal Singh , aspiring Java Developer",
    followers: [
      {
        _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
        username: "divya",
      },
      {
        _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
        username: "akash_singh",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    following: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
        username: "divya",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    bookmarks: [],
    id: "2",
  },
  {
    _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
    username: "akash_singh",
    firstName: "Akash",
    lastName: "Singh",
    password: "aksah1234",
    createdAt: "2022-05-12T08:30:12+05:30",
    updatedAt: "2022-05-17T11:07:58+05:30",
    avatarURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653216526/Social%20Media/4333609_iftyzl.webp",
    websiteURL: "https://google.com",
    bio: "Senior Data Analyst @OYO",
    followers: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    following: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
        username: "divya",
      },
      {
        _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
        username: "vishal_singh",
      },
    ],
    bookmarks: [],
    id: "3",
  },
  {
    _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
    username: "vishal_gta",
    firstName: "Vishal",
    lastName: "Gupta",
    password: "vishal1234",
    createdAt: "2022-04-09T09:30:12+05:30",
    updatedAt: "2022-05-17T11:07:27+05:30",
    avatarURL:
      "https://res.cloudinary.com/donqbxlnc/image/upload/v1652425327/images_jt3uha.jpg",
    websiteURL: "https://google.com",
    bio: "Solution Advisor @Deloitte | SAP Professional | Scrum Certified (SFC) | Ex-Birlasoftian | Learning Cloud Technology",
    followers: [
      {
        _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
        username: "divya",
      },
      {
        _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
        username: "vishal_singh",
      },
    ],
    following: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
        username: "akash_singh",
      },
      {
        _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
        username: "divya",
      },
      {
        _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
        username: "vishal_singh",
      },
      {
        _id: "ea467968-392d-4fa4-b287-efcedb836163",
        username: "sparrow_jack",
      },
      {
        _id: "ea7f256f-e212-4a36-a490-eb0c6955a41f",
        username: "alex_pandian",
      },
      {
        _id: "4c06334c-9a26-4ba3-8b42-06ec53f63245",
        username: "jain_priyanka",
      },
    ],
    bookmarks: [],
    id: "4",
  },
  {
    _id: "ea467968-392d-4fa4-b287-efcedb836163",
    firstName: "Jack",
    lastName: "Sparrow",
    username: "sparrow_jack",
    password: "jack1234",
    createdAt: "2022-02-10T09:30:12+05:30",
    updatedAt: "2022-05-17T10:24:04+05:30",
    avatarURL:
      "https://res.cloudinary.com/donqbxlnc/image/upload/v1652427577/ro2zurljoctvqo2kwyya.jpg",
    websiteURL: "https://google.com",
    bio: "Certified Bussiness Analyst",
    followers: [
      {
        _id: "ea7f256f-e212-4a36-a490-eb0c6955a41f",
        username: "alex_pandian",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    following: [],
    bookmarks: [],
    id: "5",
  },
  {
    _id: "ea7f256f-e212-4a36-a490-eb0c6955a41f",
    firstName: "Alex",
    lastName: "Pandian",
    username: "alex_pandian",
    password: "alex1234",
    createdAt: "2022-02-17T09:30:12+05:30",
    updatedAt: "2022-05-17T10:33:36+05:30",
    avatarURL:
      "https://res.cloudinary.com/donqbxlnc/image/upload/v1652427682/images_fsjfno.jpg",
    websiteURL: "https://google.com",
    bio: "SDE-1 at Google",
    followers: [
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    following: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "ea467968-392d-4fa4-b287-efcedb836163",
        username: "sparrow_jack",
      },
    ],
    bookmarks: [],
    id: "6",
  },
  {
    _id: "4c06334c-9a26-4ba3-8b42-06ec53f63245",
    firstName: "Priyanka",
    lastName: "Jain",
    username: "jain_priyanka",
    password: "priyanka1234",
    createdAt: "2022-03-19T09:30:12+05:30",
    updatedAt: "2022-05-16T18:11:01+05:30",
    avatarURL:
      "https://res.cloudinary.com/donqbxlnc/image/upload/v1652427968/images_dmm7fi.jpg",
    websiteURL: "https://sarithachandra.netlify.app",
    bio: "Hey , I am Priyanka working @Genpact",
    followers: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
      {
        _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
        username: "vishal_gta",
      },
    ],
    following: [
      {
        _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
        username: "amanjain",
      },
    ],
    id: "7",
  },
  {
    _id: "aa5a4587-9687-41c5-be61-f5b9c0001ae7",
    firstName: "Aadarsh",
    lastName: "Balak",
    username: "aadarsh_balak",
    password: "balak1234",
    createdAt: "2022-03-20T09:30:12+05:30",
    updatedAt: "2022-05-16T18:11:01+05:30",
    avatarURL:
      "https://res.cloudinary.com/donqbxlnc/image/upload/v1652428194/images_misbxu.jpg",
    websiteURL: "https://aashitajha.netlify.app",
    bio: "Learing new Technologies in frontend",
    followers: [],
    following: [],
    bookmarks: [],
    id: "8",
  },
];
