import { clothing } from './clothingBaseApis';

const cat = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'category/get-all',
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery } = cat;
