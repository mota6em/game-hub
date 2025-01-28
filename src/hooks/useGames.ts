import { GameQuery } from "../App";
import { Game } from "../assets/ts/types";
import useData from "./useData";

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortSelector,
      },
    },
    [gameQuery]
  );
export default useGame;
