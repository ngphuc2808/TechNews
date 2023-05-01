import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { clothing } from '../services/clothingBaseApis';

const store = configureStore({
  reducer: {
    [clothing.reducerPath]: clothing.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(clothing.middleware),
});

setupListeners(store.dispatch);

export default store;
