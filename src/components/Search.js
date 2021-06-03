import React from "react";
import searchIcon from "./searchIcon.svg";
const Search = ({ handleSearchQuery }) => {
  return (
    <div className="search">
      <img src={searchIcon} height="20rem" />
      <input
        onChange={(event) => handleSearchQuery(event.target.value)}
        type="text"
        placeholder="search"
      />
    </div>
  );
};

export default Search;
