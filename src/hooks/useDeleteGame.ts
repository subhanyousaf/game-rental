import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game } from "./useGames";
import { useGamesStore } from "../store/store";

const useDeleteGame = (onRemove: (game: Game) => void) => {
  const gameQuery = useGamesStore((state) => state.gameQuery);
  const queryClient = useQueryClient();
  return useMutation<Game, Error, string>({
    mutationFn: (id: string) => {
      const apiClient = new APIClient<Game>("/games/" + id);
      return apiClient.delete();
    },
    onSuccess: (savedGame: Game) => {
      onRemove(savedGame);
      queryClient.setQueryData<Game[]>(["games", gameQuery], (games) =>
        games?.filter((game) => game._id !== savedGame._id)
      );
    },
  });
};

export default useDeleteGame;
