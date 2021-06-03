import { useState } from "react";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  const charLimit = 200;

  return (
    <div className="note add">
      <textarea
        row="8"
        cols="10"
        value={noteText}
        placeholder="Enter text"
        onChange={handleChange}
      />

      <div className="note-footer">
        <small>{charLimit - noteText.length}</small>
        <button className="btn-save" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Addnote;
