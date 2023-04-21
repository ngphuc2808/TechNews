import { configureStore } from '@reduxjs/toolkit';
import { WebStorage, persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import darkModeReducer from './slices/darkModeSlice';

interface iPersistConfig {
  key: string;
  storage: WebStorage;
}

const persistConfig: iPersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, darkModeReducer);

export const store = configureStore({
  reducer: {
    darkMode: persistedReducer,
  },
  middleware: [thunk],
});

export const persistStor = persistStore(store);

export default store;
