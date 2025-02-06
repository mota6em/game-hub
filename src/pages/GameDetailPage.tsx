import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

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
    <div className="game-detail">
      <h1>{game.name}</h1>
      <div>{game.description_raw}</div>
    </div>
  );
};

export default GameDetailPage;
