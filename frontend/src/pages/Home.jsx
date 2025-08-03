import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import { Link } from 'react-router-dom';
import API from '../services/api';

const Home = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get('/notes');
    setNotes(res.data);
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  console.log("notestestst",notes)
  return (
    <div>
      <h2>All Notes</h2>
      <Link to="/create">+ Create Note</Link>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </div>
  );
};

export default Home;
