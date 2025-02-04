import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Game } from "../assets/ts/types";
import APICLIENT, { FetchResponse } from "../services/api-client";
const apiClient = new APICLIENT<Game>("/games");
const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortSelector,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : null;
    },
    staleTime: 1000 * 60 * 60 * 24,// 24 hours
  });

export default useGame;
