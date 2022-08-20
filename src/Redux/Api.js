import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://amazon-clone-deploy.herokuapp.com/",
  }),
  tagTypes: ["Product", "Department", "Category", "Cart"],

  endpoints: (builder) => ({
    getAllProdacts: builder.query({
      query: (pageNum) => {
        return {
          url: `/product?page=${pageNum}`,
        };
      },
      providesTags: ["Product"],
    }),
    getSingleProdact: builder.query({
      query: (id) => `product/one/${id}`,
    }),

    getAllCategories: builder.query({
      query: () => `category`,
      providesTags: ["Category"],
    }),
    getProdactCategories: builder.query({
      query: (id) => {
        return {
          url: `/product?category=${id}`,
          method: "GET",
          // product?page=1&category=22
          // /product/search?category=122
        };
      },
      providesTags: ["Product"],
    }),
    getdAlldepartment: builder.query({
      query: () => `department`,
      providesTags: ["Department"],
    }),
    getCategorydepartment: builder.query({
      query: (id) => `category/dept/${id}`,
    }),
    addDepartment: builder.mutation({
      query: ({ token, body }) => ({
        url: `department`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Department"],
    }),
    DeleteDepartment: builder.mutation({
      query: ({ token, id }) => ({
        url: `department/${id}`,
        method: "DELETE",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
      invalidatesTags: ["Department"],
    }),
    //Review
    addReview: builder.mutation({
      query: ({ token, body }) => ({
        url: `review`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    allProductReviews: builder.query({
      query: (id) => `review/product/${id}`,
      providesTags: ["Product"],
    }),

    //cart
    addToCart: builder.mutation({
      query: ({ token, body }) => ({
        url: `cart/incItem`,
        method: "PUT",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    getUserCart: builder.query({
      query: (token) => ({
        url: `cart`,
        method: "GET",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
      providesTags: ["Cart"],
    }),
    removeFromCart: builder.mutation({
      query: ({ token, body }) => ({
        url: `cart/removeItem`,
        method: "PUT",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    emptyCart: builder.mutation({
      query: ({ token }) => ({
        url: `cart/emptyCart`,
        method: "PUT",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    //address
    addAddress: builder.mutation({
      query: ({ token, body }) => ({
        url: `address`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
    }),
    getAdress: builder.query({
      query: (token) => ({
        url: `address`,
        method: "GET",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
    }),
    //orders
    getAllOrder: builder.query({
      query: (token) => ({
        url: `order`,
        method: "GET",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
    }),
    //admin
    addProduct: builder.mutation({
      query: ({ token, body }) => ({
        url: `product`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: ({ token, id }) => ({
        url: `product/${id}`,
        method: "DELETE",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
      invalidatesTags: ["Product"],
    }),
    addCategory: builder.mutation({
      query: ({ token, body }) => ({
        url: `category`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: ({ token, id }) => ({
        url: `category/${id}`,
        method: "DELETE",
        headers: {
          "x-access-token": `${token}`,
        },
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: ({ token, body }) => ({
        url: `category`,
        method: "PUT",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    AddCategoryImage: builder.mutation({
      query: ({ token, body, id }) => ({
        url: `category/img/${id}`,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllProdactsQuery,
  useGetSingleProdactQuery,
  useGetAllCategoriesQuery,
  useGetProdactCategoriesQuery,
  useGetdAlldepartmentQuery,
  useGetCategorydepartmentQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useDeleteCategoryMutation,
  useAddCategoryMutation,
  useAddToCartMutation,
  useGetUserCartQuery,
  useRemoveFromCartMutation,
  useUpdateCategoryMutation,
  useAddReviewMutation,
  useAllProductReviewsQuery,
  useAddAddressMutation,
  useAddCategoryImageMutation,
  useGetAdressQuery,
  useAddDepartmentMutation,
  useEmptyCartMutation,
  useGetAllOrderQuery,
  useDeleteDepartmentMutation,
} = Api;
