import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Game } from "../assets/ts/types";

import apiClient, { FetchResponse } from "../services/api-client";

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortSelector,
            search: gameQuery.search,
          },
        })
        .then((res) => res.data),
  });

export default useGame;
