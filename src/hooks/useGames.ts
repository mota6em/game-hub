import { useEffect, useState } from "react";
import apiClients from "../sevices/api-clients";
import { CanceledError } from "axios";
import { flatten } from "@chakra-ui/react";
import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [
    selectedGenre?.id,
      selectedPlatform?.id
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
