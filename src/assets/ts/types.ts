export interface Game {
  id: string;
  name: string;
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}