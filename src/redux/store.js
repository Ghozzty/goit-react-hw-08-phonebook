import { configureStore } from '@reduxjs/toolkit';

import { contReducer } from './contactsSlice';

import { filterReducer } from './filterSlice';

import { persistStore, PERSIST } from 'redux-persist';

export const store = configureStore({
  reducer: {
    book: contReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
