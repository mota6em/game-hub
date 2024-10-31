import { useEffect, useState } from "react";
import apiClients from "../sevices/api-clients";
import { CanceledError } from "axios";
import { flatten } from "@chakra-ui/react";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  metacritic: number;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery : GameQuery) =>
  useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id , ordering: gameQuery.sortOrder, search: gameQuery.searchText} }, [
   gameQuery
  ]);
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
