import { createSlice } from '@reduxjs/toolkit';
//
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
//

const contSlice = createSlice({
  name: 'book',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    // fetch
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //add
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [action.payload, ...state.items];
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //del
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(el => el.id !== action.payload.id);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // update
    [updateContact.pending](state) {
      state.isLoading = true;
    },
    [updateContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(el => el.id === action.payload.id);
      state.items[index] = action.payload;
    },
    [updateContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
//

//

export const contReducer = contSlice.reducer;

// selectors

export const getContacts = state => state.book;
