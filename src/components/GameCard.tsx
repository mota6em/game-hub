import { getGameCardDarkModeClasses } from "../assets/ts/classUtils";
import { gameProps } from "../assets/ts/types";

const GameCard = ({ game, isDarkMode }: gameProps) => {
  return (
    <div className={getGameCardDarkModeClasses(isDarkMode ,"card col-12 col-md-2 col-lg-3 m-2 p-0 game-card")}  >
      <img
        src={game.background_image}
        className="card-img-top"
        alt={game.name + " img"}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
      </div>
    </div>
  );
};

export default GameCard;
