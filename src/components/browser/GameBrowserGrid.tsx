import { Box, SimpleGrid } from "@chakra-ui/react";
import useRawgGames from "../../hooks/rawg/useRawgGames";
import GameBrowserCard from "./GameBrowserCard";
import GameBrowserCardSkeleton from "./GameBrowserCardSkeleton";

const GameBrowserGrid = () => {
  const { data, isLoading } = useRawgGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{ sm: 3 }} spacing={2}>
      {isLoading &&
        skeletons.map((skeleton) => <GameBrowserCardSkeleton key={skeleton} />)}
      {data?.map((game) => (
        <Box>
          <GameBrowserCard key={game.id} game={game} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameBrowserGrid;
