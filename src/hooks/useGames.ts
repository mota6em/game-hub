import apiClient from "../services/api-client";
import { FetchGamesResponse, Game } from "../assets/ts/types";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";
const useGame = () => {
  const [error, setError] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const controller = new AbortController();
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // return () => controller.abort();
  }, []);
  return { games, error };
};
export default useGame;
