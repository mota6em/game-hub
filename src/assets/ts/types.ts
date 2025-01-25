export interface Game {
  id: string;
  name: string;
  background_image: string
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export interface gameProps {
  game: Game;
  isDarkMode: boolean
}
