import { clothing } from './clothingBaseApis';
import { PYTHON_URL, LIMIT } from '../utils/globalVariables';

const post = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => '/post/get-all',
    }),
    getAllPostsByCat: builder.query({
      query: ({ pageNo, pageSize, catId }) =>
        `/post/get-all-by-category/${catId}?pageNo=${pageNo}&pageSize=${pageSize}`,
    }),
    getPostDetailById: builder.query({
      query: (postId) => `/post/${postId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllPostsQuery, useGetAllPostsByCatQuery, useGetPostDetailByIdQuery } = post;
