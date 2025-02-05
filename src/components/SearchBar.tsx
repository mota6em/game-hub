import { useRef } from "react";
import "../App.css";
import useGameQueryStore from "../store";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchInput = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchInput(ref.current.value);
        }
      }}
    >
      <div className="input-group text-white my-1 bg-dark-subtle ">
        <span className="input-group-text border-0 search-icon">
          <i className="fa-solid fa-magnifying-glass "></i>
        </span>
        <input
          ref={ref}
          type="text"
          className="form-control bg-dark-subtle"
          aria-label="search"
          placeholder="Search +880,000 game"
        />
      </div>
    </form>
  );
};

export default SearchBar;
