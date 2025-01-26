import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  isDarkMode: boolean;
}
const GameGrid = ({ isDarkMode }: Props) => {
  const { games, error, isLoading } = useGame();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <>
      {error && <p>{error} </p>}
      <div className="container-fulid">
        <div className="row d-flex justify-content-center">
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer isDarkMode={isDarkMode}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {games.map((game) => (
            <GameCardContainer isDarkMode={isDarkMode}>
              <GameCard isDarkMode={isDarkMode} game={game} key={game.id} />
            </GameCardContainer>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
