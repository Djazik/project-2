import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://bazar.ilyosbekdev.uz/docs",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Har so'rovda mana shu token headersda qo'shib jo'natiladi
      headers.set("authentication", `${token}`);
    }
    return headers;
  },
});

// Qayta urinish soni
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "User"], // O'zgarish bo'lmaganda qayta fetch qilish uchun Tag Typelar
  endpoints: () => ({}),
});
