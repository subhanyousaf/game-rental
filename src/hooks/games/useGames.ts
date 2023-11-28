import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/apiClient";
import { useGamesStore } from "../../store";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  _id?: string;
  name: string;
  genres: string[];
  platforms: string[];
  price: number;
  releaseDate: Date;
  stock: number;
  gameArtUrl: string;
  criticScore: number;
}

const useGames = () => {
  const gameQuery = useGamesStore((state) => state.gameQuery);
  return useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          search: gameQuery.search,
        },
      }),
    staleTime: 1 * 60 * 1000,
  });
};

export default useGames;
