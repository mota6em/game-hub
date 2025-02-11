import useGameQueryStore, { useDarkMode } from "../store";
import { getNavDarkModeClasses } from "../assets/ts/classUtils";
import SearchBar from "./SearchBar";
import logo from "../assets/imgs/logo.jpg";
import { Link } from "react-router-dom";
const NavBar = () => {
  const gameQueryStore = useGameQueryStore();
  const { dark, toggleMode } = useDarkMode();

  return (
    <div className="row">
      <div
        className={getNavDarkModeClasses(
          dark,
          "col-12 py-1 x-0 d-flex justify-content-between fixed-top"
        )}
      >
        <Link to={"/"} className="logo-title">
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={() => {
              gameQueryStore.setGenreId(undefined);
              gameQueryStore.setSearchText("");
              gameQueryStore.setSortSelector("");
              gameQueryStore.setPlatformId(undefined);
            }}
          >
            <img
              src={logo}
              className="rounded float-start logo-img"
              alt="logo"
            />
            <a className="m-0 text-white fw-bold px-1 logo-title">Game-Hub</a>
          </div>
        </Link>
        <SearchBar />
        <div
          id="switch-mod"
          className="d-flex flex-nowrap justify-content-center btn px-1 px-md-3 align-items-center text-white"
        >
          <i
            onClick={() => toggleMode()}
            className={`fa-solid fa-${dark ? "sun" : "moon"} fs-5`}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
