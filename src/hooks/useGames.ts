import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Game } from "../assets/ts/types";
import ms from "ms";
import APICLIENT, { FetchResponse } from "../services/api-client";
const apiClient = new APICLIENT<Game>("/games");
const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortSelector,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : null;
    },
    staleTime: ms("24h"),
  });

export default useGame;
