import useGame from "../hooks/useGames";

const GameGrid = () => {
 const {games, error} = useGame();
  return (
    <>
      {error && <p>{error} </p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
