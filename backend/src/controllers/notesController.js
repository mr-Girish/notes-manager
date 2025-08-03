const notes = require('../data/notesData');
const { v4: uuidv4 } = require('uuid');

const getNotes = (req, res) => {
  res.json(notes);
};

const createNote = (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: uuidv4(),
    title,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  notes.push(newNote);
  res.status(201).json(newNote);
};

const updateNote = (req, res) => {
  const noteId = req.params.id;
  const { title, content } = req.body;

  const note = notes.find((n) => n.id === noteId);
  if (!note) return res.status(404).json({ message: 'Note not found' });

  note.title = title;
  note.content = content;
  note.updatedAt = new Date();

  res.json(note);
};

const deleteNote = (req, res) => {
  const noteId = req.params.id;
  const index = notes.findIndex((n) => n.id === noteId);
  if (index === -1) return res.status(404).json({ message: 'Note not found' });

  notes.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
