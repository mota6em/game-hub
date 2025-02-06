import { Link } from "react-router-dom";
import { gameProps } from "../assets/ts/types";
import getCroppedImageURL from "../services/getCrippedImageURL";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: gameProps) => {
  return (
    <div className="game-card">
      {game.background_image === null ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
          className="card-img-top game-card-img img-not-found"
          alt="img not found"
        ></img>
      ) : (
        <img
          src={getCroppedImageURL(game.background_image)}
          className="game-card-img card-img-top"
          alt={game.name + " img"}
        ></img>
      )}
      <div className="card-body pb-2 overflow-hidden">
        <div className="d-flex row pe-1 pt-1 py-2">
          {game.parent_platforms && (
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          )}
          <CriticScore score={game.metacritic} />
        </div>
        <h5 className="card-title fs-4 ">
          <Link
            className="text-white text-decoration-none"
            to={`/games/${game.slug}`}
          >
            {game.name}
          </Link>
          <Emoji rating={game.rating_top} />
        </h5>
      </div>
    </div>
  );
};

export default GameCard;
