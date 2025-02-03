import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Game } from "../assets/ts/types";
import APICLIENT, { FetchResponse } from "../services/api-client";
const apiClient = new APICLIENT<Game>("/games");
const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortSelector,
        search: gameQuery.search,
      },
    }),
  });

export default useGame;
