import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshoots from "../components/GameScreenshoots";
import { useDarkMode } from "../store";
import { getDarkModeClasses } from "../assets/ts/classUtils";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const { dark } = useDarkMode();
  if (isLoading) {
    return (
      <div
        className={getDarkModeClasses(
          dark,
          `d-flex align-items-center justify-content-center min-vh-100 `
        )}
      >
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error || !game) {
    throw error;
  }
  return (
    <div className={getDarkModeClasses(dark, `game-detail px-md-2 px-lg-3`)}>
      <h1>{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <div className="d-flex px-md-4 px-lg-5 pt-2 align-items-up justify-content-center row">
        <GameAttributes game={game} />
        <div className="d-flex flex-column col-md-8">
          <GameTrailer gameId={game.id} />
          <GameScreenshoots gameId={game.id} />
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
