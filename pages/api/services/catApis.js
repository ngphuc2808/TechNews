import { clothing } from './clothingBaseApis';

const cat = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'category/get-all',
    }),
    getCategoryById: builder.query({
      query: (catId) => `/category/${catId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = cat;
