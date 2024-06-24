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
    getSearchProducts: build.query({
        query: (params) => ({
          url: `/products/search`,
          method: "GET",
          params,
        }),
        providesTags: ["Product"],
      }),
  }),
});

export const {
    useGetProductQuery,
    useGetSearchProductsQuery
} = productApi;

