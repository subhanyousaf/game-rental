import { useQuery } from "@tanstack/react-query";
import RawgAPIClient from "../../services/rawgApiClient";
import { useRawgGameStore } from "../../store";
import { RawgGame } from "../../entities/RawgGame";

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
