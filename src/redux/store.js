import { configureStore } from '@reduxjs/toolkit';

import { contReducer } from './contacts/contactsSlice';

import { filterReducer } from './contacts/filterSlice';

import {
  persistStore,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    book: contReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
