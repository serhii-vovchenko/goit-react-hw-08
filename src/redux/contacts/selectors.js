import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilterValue = state => state.filters.name;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
