import React from "react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => {
      return acc + page.results.length;
    }, 0) || 0;
  return (
    <div className="container g-container overflow-x-hidden">
      <div className="container-fulid overflow-x-hidden">
        <InfiniteScroll
          dataLength={fetchedGamesCount}
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={
            isFetchingNextPage && (
              <div className="d-flex justify-content-center align-items-center m-3 p-3">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )
          }
        >
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
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default GameGrid;
