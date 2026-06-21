import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
});

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetchContacts
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchContacts.rejected, handleRejected)
      // addContact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        contactsAdapter.addOne(state, action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      // deleteContact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        contactsAdapter.removeOne(state, action.payload);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsSelectors = contactsAdapter.getSelectors((state) => state.contacts);

export const contactsReducer = contactsSlice.reducer;
