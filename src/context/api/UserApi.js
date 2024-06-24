import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Get request
    getUsers: build.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["User"],
    }),
    getUserDetail: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    postUser: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    putUser: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  usePostUserMutation,
  useGetUserDetailQuery,
  usePutUserMutation,
} = userApi;
