import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IIGStory {
  id: number;
  name: string;
  avatar: string;
}

interface IIGPost {
  id: number;
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getIGPosts: builder.query<IIGPost[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `posts/${id}`;
        }
        return "posts";
      },
    }),
    getIGStories: builder.query<IIGStory[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `stories/${id}`;
        }
        return "stories";
      },
    }),
  }),
});

export const { useGetIGStoriesQuery, useGetIGPostsQuery } = homeApi;
