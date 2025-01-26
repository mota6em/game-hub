import useGame from "../hooks/useGames";
import GameCard from "./GameCard";

interface Props{
  isDarkMode:boolean;
}
const GameGrid = ({isDarkMode} : Props) => {
  const { games, error } = useGame();
  return (
    <>
      {error && <p>{error} </p>}
      <div className="container-fulid">
        <div className="row d-flex justify-content-center">
          {games.map((game) => (
            <GameCard isDarkMode={isDarkMode} game={game} key={game.id} />
            // <p key={game.id}>{game.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
