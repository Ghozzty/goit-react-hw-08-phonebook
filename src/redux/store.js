import { configureStore } from '@reduxjs/toolkit';

import { contReducer } from './contactsSlice';

import { persistStore, PERSIST } from 'redux-persist';

export const store = configureStore({
  reducer: {
    book: contReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
