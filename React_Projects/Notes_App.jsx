import { useState } from "react";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input) {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="ml-2 p-2 bg-green-500 text-white" onClick={addNote}>
        Add Note
      </button>
      <ul>
        {notes.map((note, index) => (
          <li key={index} className="mt-2 flex justify-between">
            {note}
            <button
              className="bg-red-500 text-white px-2"
              onClick={() => deleteNote(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
