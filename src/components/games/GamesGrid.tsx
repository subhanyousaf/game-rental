import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import useGames from "../../hooks/games/useGames";
import GameCard from "./GameCard";
import SearchBar from "../global/SearchBar";
import GameCardSkeleton from "./GameCardSkeleton";
import GameBrowserDrawer from "../browser/GameBrowserDrawer";

const GamesGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <Stack margin={5} spacing={5}>
        <Box>
          <GameBrowserDrawer />
        </Box>
        <SearchBar type="games" />
        <Heading>Games</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>An error has occured!</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
          spacing={3}
        >
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {data?.map((game) => (
            <Box>
              <GameCard key={game._id} game={game} />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default GamesGrid;
