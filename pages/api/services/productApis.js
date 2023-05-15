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
    getPostsByUserId: builder.query({
      query: ({ userId, pageNo, pageSize }) => `/post/get-all-by-user/${userId}?pageNo=${pageNo}&pageSize=${pageSize}`,
    }),
    getAllPostsByUserId: builder.query({
      query: (userId) => `/post/get-all-by-user/${userId}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllPostsQuery,
  useGetAllPostsByCatQuery,
  useGetPostDetailByIdQuery,
  useGetPostsByUserIdQuery,
  useGetAllPostsByUserIdQuery,
} = post;
