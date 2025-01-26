import apiClient from "../services/api-client";
import { FetchGamesResponse, Game } from "../assets/ts/types";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";
const useGame = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const controller = new AbortController();
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};
export default useGame;
