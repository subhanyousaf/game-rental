import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/apiClient";
import { useGamesStore } from "../../store";
import Game from "../../entities/Game";

const apiClient = new APIClient<Game>("/games");

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
