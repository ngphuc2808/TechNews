import { clothing } from './clothingBaseApis';

const cat = clothing.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'category/get-all',
    }),
    getActiveCategories: builder.query({
      query: () => 'category/get-all-active',
    }),
    getCategoryById: builder.query({
      query: (catId) => `/category/${catId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery, useGetActiveCategoriesQuery, useGetCategoryByIdQuery } = cat;
