import { Game } from "../assets/ts/types";
import useData from "./useData";
const useGame = () => useData<Game>("/games");
export default useGame;
