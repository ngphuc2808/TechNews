import { configureStore } from '@reduxjs/toolkit';
import { WebStorage, persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import darkModeReducer from './slices/darkModeSlice';
import categoryReducer from './slices/cateogrySlice';
import authReducer from './slices/authSlice';

interface iPersistConfig {
  key: string;
  storage: WebStorage;
}

const persistConfig: iPersistConfig = {
  key: 'root',
  storage,
};

const persistedDarkMode = persistReducer(persistConfig, darkModeReducer);

export const store = configureStore({
  reducer: {
    darkMode: persistedDarkMode,
    category: categoryReducer,
    auth: authReducer,
  },
  middleware: [thunk],
});

export const persistStor = persistStore(store);

export default store;
