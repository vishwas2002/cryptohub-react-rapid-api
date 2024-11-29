

import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,   // Add the reducer for cryptoApi
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,   // Add the reducer for cryptoNewsApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)   // Add middleware for cryptoApi
      .concat(cryptoNewsApi.middleware),   // Add middleware for cryptoNewsApi
});

export default store;
