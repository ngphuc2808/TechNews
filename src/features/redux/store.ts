import { configureStore } from '@reduxjs/toolkit';
import { WebStorage, persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import darkModeReducer from './slices/darkModeSlice';
import categoryReducer from './slices/cateogrySlice';
import authReducer from './slices/authSlice';
import errorPageReducer from './slices/errorPageSlice';
import userReducer from './slices/userSlice';
import navItemReducer from './slices/navItemSlice';

import auth from '@/pages/api/features/auth';

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
    error: errorPageReducer,
    user: userReducer,
    navItem: navItemReducer,
    authentication: auth,
  },
  middleware: [thunk],
});

export const persistStor = persistStore(store);

export default store;
