import React from "react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  isDarkMode: boolean;
  gameQuery: GameQuery;
}
const GameGrid = ({ isDarkMode, gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  if (error) return <p>{error.message} </p>;
  return (
    <>
      <div className="container-fulid">
        <div className="row d-flex justify-content-center">
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton} isDarkMode={isDarkMode}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page) => (
            <React.Fragment key={page.next}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id} isDarkMode={isDarkMode}>
                  <GameCard isDarkMode={isDarkMode} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="d-flex justify-content-start mx-5 my-3">
          {hasNextPage && (
            <button
            className="btn btn-warning fw-bold"
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? "Loading" : "Load More"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
