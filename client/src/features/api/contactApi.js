import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CONTACT_API = "http://localhost:8080/api/v1/contact";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: CONTACT_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: ({ name, email, message }) => ({
        url: "",
        method: "POST",
        body: { name, email, message },
      }),
    }),
  }),
});

export const { useSubmitContactMutation } = contactApi;
