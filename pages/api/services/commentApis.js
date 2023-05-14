import { clothing } from './clothingBaseApis';
import { PYTHON_URL, LIMIT } from '../utils/globalVariables';

const comment = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommentByPostId: builder.query({
      query: (postId) => `/comment/get-all-by-post-id/${postId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCommentByPostIdQuery } = comment;
