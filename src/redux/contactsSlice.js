import { createSlice } from '@reduxjs/toolkit';
//
import { fetchContacts, addContact } from './operations';
// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }

// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".
// https://639f7ac97aaf11ceb89b8935.mockapi.io/:endpoint

// axios.defaults.baseURL = 'https://639f7ac97aaf11ceb89b8935.mockapi.io';
// //
// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// });
//  extraReducers: {
//     [fetchTasks.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },

const contSlice = createSlice({
  name: 'book',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    //   // addContact(state, action) {
    //   //   state.contacts.push(action.payload);
    //   // },
    deleteCont(state, action) {
      state.contacts = state.items.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: {
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
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [action.payload, ...state.items];
      // state.items.unshift(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

export const contReducer = contSlice.reducer;

export const { deleteCont } = contSlice.actions;

// selectors

export const getContacts = state => state.book;
