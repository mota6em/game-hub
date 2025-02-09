import { Game } from "../../entities/Game";

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export interface gameProps {
  game: Game;
  isDarkMode: boolean;
}
