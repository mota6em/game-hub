import { gameProps } from "../assets/ts/types";
import getCroppedImageURL from "../services/getCrippedImageURL";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: gameProps) => {
  return (
    <>
      <img
        src={getCroppedImageURL(game.background_image)}
        className="card-img-top"
        alt={game.name + " img"}
      ></img>
      <div className="card-body overflow-hidden">
        <h5 className="card-title fs-4">{game.name}</h5>
        <div className="d-flex row pe-1">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </>
  );
};

export default GameCard;
