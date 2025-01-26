import { getGameCardDarkModeClasses } from "../assets/ts/classUtils";
import { gameProps } from "../assets/ts/types";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game, isDarkMode }: gameProps) => {
  return (
    <div
      className={getGameCardDarkModeClasses(
        isDarkMode,
        "card col-12 col-md-2 col-lg-3 m-2 p-0 game-card"
      )}
    >
      <img
        src={game.background_image}
        className="card-img-top"
        alt={game.name + " img"}
      ></img>
      <div className="card-body overflow-hidden">
        <h5 className="card-title fs-4">{game.name}</h5>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </div>
    </div>
  );
};

export default GameCard;
