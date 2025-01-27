import { Game } from "../assets/ts/types";
import useData from "./useData";
import { Genre } from "./useGenres";

const useGame = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
export default useGame;
