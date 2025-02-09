 import { getDarkModeClasses } from "../assets/ts/classUtils";
import GenreList from "../components/GenreList";
import GameGridHeader from "../components/GameGridHeader";
import PlattformSelector from "../components/PlattformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
// import useGameQueryStore from "../store";

const HomePage = () => {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const isDarkMode = true;

  return (
    <div className="container-fluid">
      <div className="row min-vh-100 mt-5">
        <div
          className={getDarkModeClasses(
            isDarkMode,
            "pt-3 d-none d-md-block col-md-2 ps-3 aside"
          )}
        >
          <GenreList
            
            isDarkMode={isDarkMode}
          />
        </div>
        <div
          className={getDarkModeClasses(
            isDarkMode,
            "d-flex flex-column justify-content-center align-items-center col-12 col-md-10 pt-3"
          )}
        >
          <GameGridHeader />
          <div className="d-flex align-item-start w-100 pb-3 ms-5">
            <PlattformSelector />
            <SortSelector />
          </div>
          <GameGrid isDarkMode={isDarkMode}></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
