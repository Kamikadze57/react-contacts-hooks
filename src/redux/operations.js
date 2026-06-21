import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "./api";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const userId = state.user?.user?.id;
    const response = await privateApi.get("/contacts", {
      params: {
        userId: userId,
      },
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, phone }, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    // id поточного користувача
    const userId = state.user?.user?.id;

    // Відправка запиту разом із userId
    const response = await privateApi.post("/contacts", {
      name,
      phone,
      userId,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const userId = state.user?.user?.id;

    const response = await privateApi.delete(`/contacts/${contactId}`, {
      data: {
        userId: userId,
      },
    });
    return contactId;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
