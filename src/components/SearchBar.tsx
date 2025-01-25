import React from "react";
import "../APP.css";

const SearchBar = () => {
  return (
    <div className="input-group text-white my-1 bg-dark-subtle search-bar">
      <span className="input-group-text border-0">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        className="form-control bg-dark-subtle"
        aria-label="search"
        placeholder="Search +880,000 game"
      />
    </div>
  );
};

export default SearchBar;
