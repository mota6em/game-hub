import { Game, Platform } from "../assets/ts/types";
import useData from "./useData";
import { Genre } from "./useGenres";

const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
export default useGame;
