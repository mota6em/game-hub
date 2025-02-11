import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshoots from "../components/GameScreenshoots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || !game) {
    throw error;
  }
  return (
    <div className="game-detail px-md-5">
      <h1>{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <div className="d-flex align-items-up justify-content-center row">
        <GameAttributes game={game} />
        <div className="d-flex flex-column col-md-6">
          <GameTrailer gameId={game.id} />
          <GameScreenshoots gameId={game.id} />
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
