import { useQuery } from "@tanstack/react-query";

import Screenshoot from "../entities/Screenshoot";
import APICLIENT from "../services/api-client";

const useGameScreenshoots = (gameId: number) => {
  const apiClient = new APICLIENT<Screenshoot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshoots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenshoots;
