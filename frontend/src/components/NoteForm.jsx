import { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={note.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="content" value={note.content} onChange={handleChange} placeholder="Content" required />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
