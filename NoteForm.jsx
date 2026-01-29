import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="4"
        placeholder="Note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
