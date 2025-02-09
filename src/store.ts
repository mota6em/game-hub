import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortSelector?: string;
  search?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (search: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortSelector: (sortSelector: string) => void;
}
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (search: string) => set(() => ({ gameQuery: { search } })),
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortSelector: (sortSelector: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortSelector } })),
}));

export default useGameQueryStore;
