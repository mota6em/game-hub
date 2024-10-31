import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSCT from "./components/PlatformSCT";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area={"aside"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={3} >
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={4}>
            <Box marginRight={5}>
              <PlatformSCT
                selectedPlatform={gameQuery.platform}
                onSelectPLatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlatformSCT>
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelecSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
