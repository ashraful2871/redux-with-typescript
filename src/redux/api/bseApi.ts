import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bseApi = createApi({
  reducerPath: "basApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
  }),
});
export const { useGetTasksQuery } = bseApi;
