import { useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import API from '../services/api';

const CreateNote = () => {
  const navigate = useNavigate();

  const addNote = async (note) => {
    await API.post('/notes', note);
    navigate('/');
  };

  return (
    <div>
      <h2>Create a Note</h2>
      <NoteForm onSubmit={addNote} />
    </div>
  );
};

export default CreateNote;
