import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import NoteCard from '../components/NoteCard';
import { fetchNotes } from '../redux/features/notes/noteSlice';
import { deleteNote } from '../services/notesService';
// import { fetchNotes, deleteNote } from '../redux/features/notes/notesSlice';

const Home = () => {
  const dispatch = useDispatch();

  const { notes, loading, error } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h2>All Notes</h2>
      <Link to="/create">+ Create Note</Link>

      {loading && <p>Loading notes...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;
