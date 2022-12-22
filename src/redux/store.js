import { configureStore } from '@reduxjs/toolkit';

import { contReducer } from './contactsSlice';

import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    book: contReducer,
    filter: filterReducer,
  },
});
