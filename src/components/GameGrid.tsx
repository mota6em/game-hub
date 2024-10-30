import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
function GameGrid() {
  const skeltons = [1, 2, 4, 5, 6, 7];
  const { data, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>Error 404</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={"10px"}
      >
        {isLoading &&
          skeltons.map((s) => (
            <GameCardContainer>
              <GameCardSkeleton key={s}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
