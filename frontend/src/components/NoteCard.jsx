    const NoteCard = ({ note, onDelete }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '1rem', padding: '1rem' }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteCard;
