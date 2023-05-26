import { clothing } from './clothingBaseApis';
import { PYTHON_URL, LIMIT } from '../utils/globalVariables';

const post = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => '/post/get-all',
    }),
    getAllActivePosts: builder.query({
      query: () => '/post/get-all-active',
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
    getBySearchText: builder.query({
      query: (text) => `/post/search?keyword=${text}`,
    }),
    getPostRecommend: builder.mutation({
      query: (formData) => ({
        url: `http://sumels.pythonanywhere.com/`,
        method: 'POST',
        body: formData,
      }),
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
    // create post
    createPost: builder.mutation({
      query: (formData) => ({
        url: '/admin/post/create',
        method: 'POST',
        body: formData,
      }),
    }),
    createPostUserRole: builder.mutation({
      query: (formData) => ({
        url: '/user/post/create',
        method: 'POST',
        body: formData,
      }),
    }),
    createPostImageUserRole: builder.mutation({
      query: ({ id, files }) => {
        return {
          url: `user/post/${id}/image`,
          method: 'POST',
          body: files,
        };
      },
    }),
    createPostImage: builder.mutation({
      query: ({ id, files }) => {
        return {
          url: `admin/post/${id}/image`,
          method: 'POST',
          body: files,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllPostsQuery,
  useGetAllActivePostsQuery,
  useGetAllPostsSortByViewQuery,
  useGetAllPostsSortByCommentQuery,
  useGetAllPostsByCatQuery,
  useGetPostDetailByIdQuery,
  useGetPostsByUserIdQuery,
  useGetAllPostsByUserIdQuery,
  useLikePostMutation,
  useDislikePostMutation,
  useGetPostRecommendMutation,
  useCreatePostMutation,
  useCreatePostUserRoleMutation,
  useCreatePostImageMutation,
  useCreatePostImageUserRoleMutation,
  useGetBySearchTextQuery,
} = post;
