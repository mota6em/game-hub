export interface Game {
  id: string;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export interface gameProps {
  game: Game;
  isDarkMode: boolean;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
