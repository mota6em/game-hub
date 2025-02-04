import logo from "./assets/imgs/logo.jpg";
import "../src/App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  getDarkModeClasses,
  getNavDarkModeClasses,
} from "./assets/ts/classUtils";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlattformSelector from "./components/PlattformSelector";
import SortSelector from "./components/SortSelector";
import GameGridHeader from "./components/GameGridHeader";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortSelector: string;
  search: string;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className={getNavDarkModeClasses(
            isDarkMode,
            "col-12 py-1 x-0 d-flex justify-content-between fixed-top"
          )}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={logo}
              className="rounded float-start logo-img"
              alt="logo"
            />
            <p className="m-0 text-white fw-bold px-1">Game-Hub</p>
          </div>
          <SearchBar
            setSearchInput={(search) => setGameQuery({ ...gameQuery, search })}
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
      <div className="row min-vh-100 mt-5">
        <div
          className={getDarkModeClasses(
            isDarkMode,
            "pt-3 d-none d-md-block col-md-2 ps-3 aside"
          )}
        >
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onClickGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
            isDarkMode={isDarkMode}
          />
        </div>
        <div
          className={getDarkModeClasses(
            isDarkMode,
            "d-flex flex-column justify-content-center align-items-center col-12 col-md-10 pt-3"
          )}
        >
          <GameGridHeader gameQery={gameQuery} />
          <div className="d-flex align-item-start w-100 pb-3 ms-5">
            <PlattformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              onSelectSort={(sortSelector: string) =>
                setGameQuery({ ...gameQuery, sortSelector })
              }
              selectedSort={gameQuery.sortSelector}
            />
          </div>
          <GameGrid gameQuery={gameQuery} isDarkMode={isDarkMode}></GameGrid>
        </div>
      </div>
    </div>
  );
}

export default App;
