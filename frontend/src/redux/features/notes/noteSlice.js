import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../../services/api';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const res = await API.get('/notes');
  return res.data;
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
  await API.delete(`/notes/${id}`);
  return id;
});

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((note) => note._id !== action.payload);
      });
  },
});

// ✅ Only exporting reducer as default
export default notesSlice.reducer;
