// import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './contactsOps';

// export const initialState = {
//   contacts: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   filters: {
//     name: '',
//   },
// };

// const slice = createSlice({
//   name: 'contacts',
//   initialState: initialState.contacts,

//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//       })

//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })

//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           contact => contact.id !== action.payload
//         );
//       })

//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContact.pending,
//           deleteContact.pending
//         ),
//         state => {
//           state.loading = true;
//           state.error = false;
//         }
//       )

//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected
//         ),
//         state => {
//           state.loading = false;
//           state.error = true;
//         }
//       )

//       .addMatcher(
//         isAnyOf(
//           fetchContacts.fulfilled,
//           addContact.fulfilled,
//           deleteContact.fulfilled
//         ),
//         state => {
//           state.loading = false;
//         }
//       );
//   },
// });

// export const selectContacts = state => state.contacts.items;
// export const selectFilterValue = state => state.filters.name;
// export const selectError = state => state.contacts.error;
// export const selectLoading = state => state.contacts.loading;
// export const contactsReducer = slice.reducer;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilterValue],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
