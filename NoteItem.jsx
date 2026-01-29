const NoteItem = ({ note, deleteNote }) => {
  return (
    <div className="note-card">
      <div className="note-content">
        <h3>{note.title}</h3>
        <p>{note.content}</p>

        <p className="timestamp">
          Last updated: {new Date(note.updatedAt).toLocaleString()}
        </p>

        <span className={note.synced ? "sync-synced" : "sync-pending"}>
          {note.synced ? "Synced" : "Pending Sync"}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteNote(note.id)}
      >
        ✕
      </button>
    </div>
  );
};

export default NoteItem;
