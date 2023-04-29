import { configureStore } from '@reduxjs/toolkit';
import { WebStorage, persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import darkModeReducer from './slices/darkModeSlice';
import categoryReducer from './slices/cateogrySlice';

interface iPersistConfig {
  key: string;
  storage: WebStorage;
}

const persistConfig: iPersistConfig = {
  key: 'root',
  storage,
};

const persistedDarkMode = persistReducer(persistConfig, darkModeReducer);
const persistedCategory = persistReducer(persistConfig, categoryReducer);

export const store = configureStore({
  reducer: {
    darkMode: persistedDarkMode,
    category: persistedCategory,
  },
  middleware: [thunk],
});

export const persistStor = persistStore(store);

export default store;
