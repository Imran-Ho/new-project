import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getTaskByName: build.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetTaskByNameQuery } = taskApi;
