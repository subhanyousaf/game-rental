import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../services/apiClient";
import Game from "../../entities/Game";
import { useGamesStore } from "../../store";

const apiClient = new APIClient<Game>("/games");

const useAddGame = (onAdd: () => void) => {
  const gameQuery = useGamesStore((state) => state.gameQuery);
  const queryClient = useQueryClient();
  return useMutation<Game, Error, Game>({
    mutationFn: (game: Game) => {
      return apiClient.post(game);
    },
    onSuccess: (savedGame) => {
      onAdd();
      queryClient.setQueryData<Game[]>(["games", gameQuery], (games) => [
        savedGame,
        ...(games || []),
      ]);
    },
  });
};

export default useAddGame;
