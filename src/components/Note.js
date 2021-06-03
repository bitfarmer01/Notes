import React from "react";
import deleteIcon from "./deleteIcon1.svg";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const handleClick = () => handleDeleteNote(id);
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <img
          src={deleteIcon}
          className="delete-icon"
          alt="delete icon "
          height="25rem"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Note;
