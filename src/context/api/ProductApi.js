import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Get request
    getProduct: build.query({
      query: () => ({
        url: "/product",
      }),
      providesTags: ["Product"],
    }),
    getProductDetail: build.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    postProduct: build.mutation({
      query: (body) => ({
        url: `/product`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    putProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
   
    getSearchProducts: build.query({
      query: (params) => ({
        url: `/product`,
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
