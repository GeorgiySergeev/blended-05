import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/coments';
const BASE_URL = 'https://6597dc8a668d248edf238def.mockapi.io';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],

  endpoints: (builder) => ({
    getComents: builder.query({
      query: () => API_ENDPOINT,
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: comment,
      })
    })
  }),
});

export const { useGetComentsQuery, useAddCommentMutation } = commentApi;

