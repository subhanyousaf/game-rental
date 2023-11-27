import { create } from "zustand";
import { Game } from "../hooks/useGames";

interface GameQuery {
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (search: string) => void;
}

export const useGamesStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (search: string) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, search } })),
}));

interface GameDataStore {
  game: Game;
  setName: (name: string) => void;
  setGenre: (genre: string) => void;
  setPlatform: (platform: string) => void;
  setPrice: (price: number) => void;
  setReleaseDate: (releaseDate: Date) => void;
  setStock: (stock: number) => void;
  reset: () => void;
}

export const useGameDataStore = create<GameDataStore>((set) => ({
  game: {} as Game,
  setName: (name: string) =>
    set((state) => ({ game: { ...state.game, name } })),
  setGenre: (genre: string) =>
    set((state) => ({ game: { ...state.game, genre } })),
  setPlatform: (platform: string) =>
    set((state) => ({ game: { ...state.game, platform } })),
  setPrice: (price: number) =>
    set((state) => ({ game: { ...state.game, price } })),
  setReleaseDate: (releaseDate: Date) =>
    set((state) => ({ game: { ...state.game, releaseDate } })),
  setStock: (stock: number) =>
    set((state) => ({ game: { ...state.game, stock } })),
  reset: () => set({ game: {} as Game }),
}));
