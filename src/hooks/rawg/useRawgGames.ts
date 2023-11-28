import { useQuery } from "@tanstack/react-query";
import RawgAPIClient from "../../services/rawgApiClient";
import { useRawgGameStore } from "../../store";

export interface RawgGame {
  id: number;
  name: string;
  slug: string;
  genres: RawgGenre[];
  background_image: string;
  parent_platforms: { platform: RawgPlatform }[];
  metacritic: number;
  released: string;
}

export interface RawgGenre {
  name: string;
}

export interface RawgPlatform {
  slug: string;
}

const apiClient = new RawgAPIClient<RawgGame>("/games");

const useRawgGames = () => {
  const gameQuery = useRawgGameStore((state) => state.game);
  return useQuery<RawgGame[], Error>({
    queryKey: ["rawgGames", gameQuery],
    queryFn: () => {
      return apiClient.getAll({
        params: {
          search: gameQuery.search,
        },
      });
    },
    staleTime: 1 * 60 * 1000,
  });
};

export default useRawgGames;
