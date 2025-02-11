import { getDarkModeClasses } from "../assets/ts/classUtils";
import GenreList from "../components/GenreList";
import GameGridHeader from "../components/GameGridHeader";
import PlattformSelector from "../components/PlattformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import { useDarkMode } from "../store";

const HomePage = () => {
  const {dark} = useDarkMode();

  return (
    <div className="container-fluid">
      <div className="row min-vh-100 mt-5">
        <div
          className={getDarkModeClasses(
            dark,
            "pt-3 d-none d-md-block col-md-2 ps-3 aside"
          )}
        >
          <GenreList isDarkMode={dark} />
        </div>
        <div
          className={getDarkModeClasses(
            dark,
            "d-flex flex-column justify-content-center align-items-center col-12 col-md-10 pt-3"
          )}
        >
          <GameGridHeader />
          <div className="d-flex align-item-start w-100 pb-3 ms-5">
            <PlattformSelector />
            <SortSelector />
          </div>
          <GameGrid isDarkMode={dark}></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
