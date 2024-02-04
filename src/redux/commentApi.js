import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/coments";
const BASE_URL = "https://6597dc8a668d248edf238def.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],

  endpoints: (builder) => ({
    getComents: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
    updateCommentCount: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetComentsQuery,
  useAddCommentMutation,
  useUpdateCommentCountMutation,
} = commentApi;
