import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, {Platform} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery : GameQuery
}

const GameGrid = ({gameQuery} : Props) => {
  const skeltons = [1, 2, 4, 5, 6, 7,8,9,10,11,12,13,15,16,17,18,19,20];
  const { data, error, isLoading } = useGames(gameQuery);
  return (
    <>
      {error && <Text>Error 404</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={"10px"}
      >
        {isLoading &&
          skeltons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
