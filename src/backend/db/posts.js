/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "0fb61929-295b-40b6-a4fe-3e74d17124dd",
    content: "Made an E-Commerce App using ReactJs and ContextAPI",
    mediaURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653590879/Social%20Media/Screenshot_7_cbropa.webp",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "0ccca08e-783f-48c2-93ea-376ecacc82e7",
        content: "Nice Work Aman!",
        user: {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        replies: [
          {
            _id: "49b03be9-bdd2-464e-bbc1-95587fd55810",
            user: {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
            content: "Thanks Divya!",
          },
        ],
        votes: {
          upvotedBy: [
            {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
          ],
        },
        createdAt: "2022-05-17T10:47:16+05:30",
        updatedAt: "2022-05-17T10:51:51+05:30",
      },
      {
        _id: "67a0302a-4237-4ec2-b5e4-960800515b91",
        content: "Loved It",
        user: {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        replies: [
          {
            _id: "9151ca25-bc81-4b8e-81a2-b3baba0a9b06",
            user: {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
            content: "Thanks Vishal!",
          },
        ],
        votes: {
          upvotedBy: [
            {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
          ],
        },
        createdAt: "2022-05-17T10:50:38+05:30",
        updatedAt: "2022-05-17T10:51:50+05:30",
      },
    ],
    username: "amanjain",
    createdAt: "2022-05-12T10:45:18+05:30",
    updatedAt: "2022-05-17T10:51:13+05:30",
    id: "1",
  },
  {
    _id: "468e07ed-9872-4bac-83ae-b83ac110fb20",
    content:
      "I am learning web Development while making new projects , do check those out",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "7e060580-0009-48a9-8040-37b8505e0adf",
        content: "Link Please",
        user: {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        replies: [
          {
            _id: "eeb7af5e-36c9-47b9-818c-2a0028cf8424",
            user: {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
            content: "https://portfolio-amanjain.netlify.app",
          },
        ],
        votes: {
          upvotedBy: [
            {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
            {
              _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
              username: "vishal_singh",
            },
          ],
        },
        createdAt: "2022-05-17T10:46:58+05:30",
        updatedAt: "2022-05-17T10:48:47+05:30",
      },
      {
        _id: "424bb3b5-6372-41b6-895b-e64bd25adb26",
        content: "Nice work man",
        user: {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        replies: [],
        votes: {
          upvotedBy: [
            {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
          ],
        },
        createdAt: "2022-05-17T10:50:07+05:30",
        updatedAt: "2022-05-17T10:50:07+05:30",
      },
      {
        _id: "5d4cae57-4e10-4c2c-b581-90a48a64b5d6",
        content: "It also have blogs",
        user: {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
        replies: [],
        votes: {
          upvotedBy: [],
        },
        createdAt: "2022-05-17T10:50:57+05:30",
        updatedAt: "2022-05-17T10:50:57+05:30",
      },
    ],
    username: "amanjain",
    createdAt: "2022-03-27T10:46:21+05:30",
    updatedAt: "2022-05-17T10:50:51+05:30",
    id: "2",
  },
  {
    _id: "c2d6e79f-79f4-4a71-bb83-a2064e34d4fc",
    content: "Started my own page on food blogs , check out the page 😇",
    mediaURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653591630/Social%20Media/Minimalist-Baker-1010x1024_fyulyv.webp",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "73ea112a-d98b-483a-b798-4443c53f8232",
        content: "Looks good",
        user: {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
        replies: [],
        votes: {
          upvotedBy: [],
        },
        createdAt: "2022-05-17T10:48:27+05:30",
        updatedAt: "2022-05-17T10:48:27+05:30",
      },
    ],
    username: "divya",
    createdAt: "2022-01-07T10:47:52+05:30",
    updatedAt: "2022-05-17T10:49:14+05:30",
    id: "3",
  },
  {
    _id: "63867ea9-8609-48d7-82cb-3c9a47ea2039",
    content:
      "I have made my own component library using HTML CSS and Javascript. It has various built-in components to get started in your next project and takes care of all your styling needs. Link in first comment",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "522563f0-a5b4-448b-a917-6a33b07531af",
        content: "https://knights-watch-ui.netlify.app/index.html",
        user: {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
        replies: [],
        votes: {
          upvotedBy: [
            {
              _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
              username: "vishal_singh",
            },
            {
              _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
              username: "divya",
            },
          ],
        },
        createdAt: "2022-05-17T10:54:09+05:30",
        updatedAt: "2022-05-17T10:54:09+05:30",
      },
      {
        _id: "862d453e-bb3b-4715-893d-d41ba8a57d99",
        content: "I am using it in my project",
        user: {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        replies: [],
        votes: {
          upvotedBy: [],
        },
        createdAt: "2022-05-17T10:59:28+05:30",
        updatedAt: "2022-05-17T10:59:28+05:30",
      },
    ],
    username: "amanjain",
    createdAt: "2022-04-13T10:52:44+05:30",
    updatedAt: "2022-05-17T10:59:01+05:30",
    id: "4",
  },
  {
    _id: "4fdb917d-98a4-4b16-85ca-b8b9ada33a13",
    content:
      "Checkout my blogs on Javascript concepts on hashnode. URL -> https://aj-creations.hashnode.dev/",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "d327558b-a759-4f57-99fd-92b836d92fde",
        content: "nice work",
        user: {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        replies: [
          {
            _id: "776d75cb-fc19-4db2-ac14-36e3ca7dd1e6",
            user: {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
            content: "Thanks",
          },
        ],
        votes: {
          upvotedBy: [
            {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
          ],
        },
        createdAt: "2022-05-17T10:53:36+05:30",
        updatedAt: "2022-05-17T11:01:20+05:30",
      },
      {
        _id: "793118f3-b675-40d2-8c93-1d2ad6d2452c",
        content: "I like it",
        user: {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        replies: [
          {
            _id: "368d67b4-354c-4b0d-9138-c50eb00e9c3f",
            user: {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
            content: "Thanks",
          },
        ],
        votes: {
          upvotedBy: [
            {
              _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
              username: "amanjain",
            },
          ],
        },
        createdAt: "2022-05-17T10:59:09+05:30",
        updatedAt: "2022-05-17T11:01:30+05:30",
      },
    ],
    username: "amanjain",
    createdAt: "2022-05-17T10:53:12+05:30",
    updatedAt: "2022-05-17T11:01:41+05:30",
    id: "5",
  },
  {
    _id: "e5c77a2f-d41b-4ea6-a173-afb9b62d4ad7",
    content: "Started learning Java Microservices",
    mediaURL:
      "https://res.cloudinary.com/ajain8479/image/upload/v1653592100/Social%20Media/JAva-Microservices_nvk1ig.webp",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "vishal_singh",
    createdAt: "2022-05-11T10:54:43+05:30",
    updatedAt: "2022-05-17T10:55:10+05:30",
    id: "6",
  },
  {
    _id: "f9d553f7-ea98-4cae-a7f3-88ad0fe5da72",
    content: "Lets' crack it",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "vishal_singh",
    createdAt: "2022-04-17T10:55:22+05:30",
    updatedAt: "2022-05-17T10:55:54+05:30",
    id: "7",
  },
  {
    _id: "91447c3c-1deb-48c2-adf4-cb4311c41578",
    content: "See this new video",
    mediaURL:
      "https://res.cloudinary.com/ajain8479/video/upload/v1653731868/dok0tssuxubnxvthrlrb.mp4",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "akash_singh",
    createdAt: "2022-04-21T10:55:42+05:30",
    updatedAt: "2022-05-17T10:55:52+05:30",
    id: "8",
  },
  {
    _id: "c4b02fee-d5e2-47b4-85ff-d85353fff48c",
    content:
      "I have successfully completed the certification on SAP-MM and AWS on udemy",
    mediaURL: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "2e229e5e-f0c5-4c8d-aa25-4c96bcd2b859",
        content: "great",
        user: {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        replies: [
          {
            _id: "5ccea543-d241-49f7-9bd2-c30a52200b83",
            user: {
              _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
              username: "vishal_gta",
            },
            content: "Thanks",
          },
        ],
        votes: {
          upvotedBy: [
            {
              _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
              username: "vishal_gta",
            },
          ],
        },
        createdAt: "2022-05-17T10:57:43+05:30",
        updatedAt: "2022-05-17T11:00:49+05:30",
      },
      {
        _id: "139b7761-9ab0-431d-959b-dfc0c78db01f",
        content: "I'm curious how you did all that in one go",
        user: {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        replies: [
          {
            _id: "d549f218-1ac9-4a01-9db6-b7dc21e50f98",
            user: {
              _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
              username: "vishal_gta",
            },
            content: "It's easy ping me",
          },
        ],
        votes: {
          upvotedBy: [
            {
              _id: "bc52269c-355e-4404-b7a7-a3d2b7bfcb7c",
              username: "vishal_gta",
            },
          ],
        },
        createdAt: "2022-05-17T10:58:45+05:30",
        updatedAt: "2022-05-17T11:01:06+05:30",
      },
    ],
    username: "vishal_gta",
    createdAt: "2022-03-27T10:56:30+05:30",
    updatedAt: "2022-05-17T11:00:44+05:30",
    id: "9",
  },
  {
    _id: "e3ecb1d2-ad45-4a1f-bade-d1585e1f74f5",
    content:
      "If you like my projects , folloe me on github at https://github.com/Aman-Jain1996 , on twitter at https://twitter.com/_Aman__Jain and on linkedIn at https://www.linkedin.com/in/aman-jain-8082b510a/",
    mediaURL: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "e5f3dda1-32a9-40ff-8d21-d5249d5e06f2",
        content: "👍",
        user: {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        replies: [],
        votes: {
          upvotedBy: [],
        },
        createdAt: "2022-05-17T11:02:23+05:30",
        updatedAt: "2022-05-17T11:02:23+05:30",
      },
      {
        _id: "b4ab9a29-2157-4890-be9b-40a6fad00b86",
        content: "🤝",
        user: {
          _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
          username: "akash_singh",
        },
        replies: [],
        votes: {
          upvotedBy: [],
        },
        createdAt: "2022-05-17T11:02:43+05:30",
        updatedAt: "2022-05-17T11:02:43+05:30",
      },
    ],
    username: "amanjain",
    createdAt: "2022-05-17T11:02:05+05:30",
    updatedAt: "2022-05-17T11:03:34+05:30",
    id: "10",
  },
  {
    _id: "e3ecb1d2-ad45-4a1f-bade-d1585e1f74fa",
    content: "I am starting my new journey @Genpact , wish me luck!",
    mediaURL: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "983b0d96-ede2-4ce2-ada7-7aae018bc83a",
          username: "divya",
        },
        {
          _id: "032e9071-3996-425f-9de1-70a7a4ff93c5",
          username: "vishal_singh",
        },
        {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "e5f3dda1-32a9-40ff-8d21-d5249d5e06f2",
        content: "👍",
        user: {
          _id: "6a21ad3b-5f98-4af8-a00f-e92965b94c3b",
          username: "amanjain",
        },
        replies: [],
        votes: {
          upvotedBy: [],
        },
        createdAt: "2022-05-17T11:02:23+05:30",
        updatedAt: "2022-05-17T11:02:23+05:30",
      },
      {
        _id: "b4ab9a29-2157-4890-be9b-40a6fad00b86",
        content: "All the best!",
        user: {
          _id: "7db8194d-c54d-4b8b-8c75-eecb6417485b",
          username: "akash_singh",
        },
        replies: [],
        votes: {
          upvotedBy: [],
        },
        createdAt: "2022-05-17T11:02:43+05:30",
        updatedAt: "2022-05-17T11:02:43+05:30",
      },
    ],
    username: "jain_priyanka",
    createdAt: "2022-05-24T11:02:05+05:30",
    updatedAt: "2022-05-17T11:03:34+05:30",
    id: "10",
  },
];
