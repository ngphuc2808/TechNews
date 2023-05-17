import { clothing } from './clothingBaseApis';
import { PYTHON_URL, LIMIT } from '../utils/globalVariables';

const comment = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommentByPostId: builder.query({
      query: (postId) => `/comment/get-all-by-post-id/${postId}`,
      providesTags: ['Comment', 'Like'],
    }),
    createComment: builder.mutation({
      query: (formData) => ({
        url: `/user/comment/create`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCommentByPostIdQuery, useCreateCommentMutation } = comment;
