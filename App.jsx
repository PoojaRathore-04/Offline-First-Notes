import { useEffect, useState } from "react";
import "./App.css";

import NoteForm from "./components/NoteForm";
import NoteItem from "./components/NoteItem";
import StatusBar from "./components/StatusBar";
import useOnlineStatus from "./hooks/useOnlineStatus";

const App = () => {
  const online = useOnlineStatus();
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Auto-sync when online
  useEffect(() => {
    if (online) {
      setTimeout(() => {
        setNotes((prevNotes) =>
          prevNotes.map((note) => ({ ...note, synced: true }))
        );
      }, 2000);
    }
  }, [online]);

  const addNote = ({ title, content }) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      updatedAt: Date.now(),
      synced: online
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <StatusBar online={online} />

      <div className="app-container">
        <NoteForm addNote={addNote} />

        {notes.length === 0 && (
          <p className="empty-text">No notes available</p>
        )}

        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App
