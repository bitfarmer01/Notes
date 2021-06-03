import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { v4 as uuidv4 } from "uuid";
import Setdate from "./components/Setdate";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      text: "Lorem ipsum dolo amet",
      date: <Setdate />,
    },
  ]);

  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState("");

  const addingNote = (text) => {
    const newNote = {
      id: uuidv4(),
      text: text,
      date: <Setdate />,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchQuery={setSearch} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(search)
          )}
          handleAddNote={addingNote}
          handleDeleteNote={deletingNote}
        />
      </div>
    </div>
  );
}

export default App;
