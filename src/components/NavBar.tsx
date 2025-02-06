import React, { useState } from "react";
import useGameQueryStore from "../store";
import { getNavDarkModeClasses } from "../assets/ts/classUtils";
import SearchBar from "./SearchBar";
import logo from "../assets/imgs/logo.jpg";
const NavBar = () => {
  const gameQueryStore = useGameQueryStore();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="row">
      <div
        className={getNavDarkModeClasses(
          isDarkMode,
          "col-12 py-1 x-0 d-flex justify-content-between fixed-top"
        )}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          onClick={() => {
            gameQueryStore.setGenreId(undefined);
            gameQueryStore.setSearchText("");
            gameQueryStore.setSortSelector("");
            gameQueryStore.setPlatformId(undefined);
          }}
        >
          <img src={logo} className="rounded float-start logo-img" alt="logo" />
          <a className="m-0 text-white fw-bold px-1 logo-title">Game-Hub</a>
        </div>
        <SearchBar
          setSearchInput={(search) => gameQueryStore.setSearchText(search)}
        />
        <div
          id="switch-mod"
          className="d-flex flex-nowrap justify-content-center btn px-1 px-md-3 align-items-center text-white"
        >
          <i
            onClick={toggleMode}
            className={`fa-solid fa-${isDarkMode ? "sun" : "moon"} fs-5`}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
