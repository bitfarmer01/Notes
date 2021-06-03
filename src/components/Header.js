import React from "react";
import ToggleTheme from "./themeToggle.png";
const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="btn-toggle"
        onClick={() => {
          handleDarkMode((prev) => !prev);
        }}
      >
        <h1>Toggle</h1>
      </button>
    </div>
  );
};

export default Header;
