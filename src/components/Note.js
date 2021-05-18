import React from "react";
import deleteIcon from "./deleteIcon.svg";

const today = new Date();
const dd = today.getDate();
const mm = today.getMonth();
const yy = today.getFullYear();
const Note = () => {
  return (
    <div className="note">
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <div className="note-footer">
        <small>{`${dd}/${mm}/${yy}`}</small>
        <img
          src={deleteIcon}
          className="delete-icon"
          alt="delete icon "
          height="25rem"
        />
      </div>
    </div>
  );
};

export default Note;
