import { useEffect, useState } from "react";
import apiClients from "../sevices/api-clients";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // const controller = new AbortController();
    apiClients
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
// import React, { Fragment, useEffect, useState } from "react";
// import apiClients from "../sevices/api-clients";

// interface Game {
//   id: number;
//   name: string;
// }
// interface FetchedGames {
//   count: number;
//   results: Game[];
// }

// const useGame = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     apiClients
//       .get<FetchedGames>("/games")
//       .then((res) => setGames(res.data.results))
//       .catch((err) => setError(err.message));
//   }
//   , []);
//   return {games, error}
// };

// export default  useGame;
