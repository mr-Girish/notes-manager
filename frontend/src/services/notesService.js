import API from "./api";

export const getAllNotes = () => API.get('/notes');

export const createNote = (note) => API.post('/notes', note);

export const deleteNote = (id) => API.delete(`/notes/${id}`);

export const updateNote = (id, updatedNote) =>
  API.put(`/notes/${id}`, updatedNote);
