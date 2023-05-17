import { clothing } from './clothingBaseApis';
import { PYTHON_URL, LIMIT } from '../utils/globalVariables';

const post = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => '/post/get-all',
    }),
    getAllPostsSortByView: builder.query({
      query: () => '/post/sort-by-view',
    }),
    getAllPostsSortByComment: builder.query({
      query: () => '/post/sort-by-comment',
    }),
    getAllPostsByCat: builder.query({
      query: ({ pageNo, pageSize, catId }) =>
        `/post/get-all-by-category/${catId}?pageNo=${pageNo}&pageSize=${pageSize}`,
    }),
    getPostDetailById: builder.query({
      query: (postId) => `/post/${postId}`,
      providesTags: ['Like'],
    }),
    getPostsByUserId: builder.query({
      query: ({ userId, pageNo, pageSize }) => `/post/get-all-by-user/${userId}?pageNo=${pageNo}&pageSize=${pageSize}`,
    }),
    getAllPostsByUserId: builder.query({
      query: (userId) => `/post/get-all-by-user/${userId}`,
    }),
    likePost: builder.mutation({
      query: (postId) => ({
        url: `/user/like/${postId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Like'],
    }),
    dislikePost: builder.mutation({
      query: (postId) => ({
        url: `/user/dislike/${postId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Like'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllPostsQuery,
  useGetAllPostsSortByViewQuery,
  useGetAllPostsSortByCommentQuery,
  useGetAllPostsByCatQuery,
  useGetPostDetailByIdQuery,
  useGetPostsByUserIdQuery,
  useGetAllPostsByUserIdQuery,
  useLikePostMutation,
  useDislikePostMutation,
} = post;
