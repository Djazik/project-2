import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Get request
    getProduct: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["Product"],
    }),
    getProductDetail: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    postProduct: build.mutation({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    putProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
   
    getSearchProducts: build.query({
      query: (params) => ({
        url: `/products`,
        method: "GET",
        params,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  usePostProductMutation,
  useDeleteProductMutation,
  useGetProductDetailQuery,
  usePutProductMutation,
  useGetSearchProductsQuery,
} = productApi;
