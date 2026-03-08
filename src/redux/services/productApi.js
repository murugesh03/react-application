import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/product/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({ query: () => "" }),
    getProductById: builder.query({
      query: (id) => `${id}`
    }),
    updateProducts: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "PUT"
      })
    })
  })
});

export const { useGetAllProductsQuery, useUpdateProductsMutation } = productApi;
