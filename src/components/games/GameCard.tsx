import moment from "moment";
import { Game } from "../../hooks/games/useGames";
import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  StackDivider,
  useColorModeValue,
  useToast,
  Text,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import useDeleteGame from "../../hooks/games/useDeleteGame";
import PlatformIconList from "../stats/PlatformIconList";
import CriticScore from "../stats/CriticScore";
import PriceTag from "../stats/PriceTag";
import StockCount from "../stats/StockCount";

interface Props {
  game: Game;
  preview?: boolean;
}

const GameCard = ({ game, preview = false }: Props) => {
  const toast = useToast();
  const deleteGame = useDeleteGame((game) => {
    toast({
      title: "Game Deleted!",
      description: "We've deleted " + game.name + ".",
      status: "success",
      duration: 5000,
      isClosable: true,
      variant: "left-accent",
      position: "top",
    });
  });

  return (
    <Card
      overflow="hidden"
      bg={useColorModeValue("gray.100", "gray.700")}
      variant={preview ? "outline" : "solid"}
    >
      <Image src={game.gameArtUrl} />
      <CardBody pb={0}>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platforms} />
          <HStack wrap="wrap">
            <PriceTag price={game.price} />
            <StockCount stock={game.stock} />
          </HStack>
        </HStack>
        <Heading mt={3} fontSize="2xl">
          {game.name}
        </Heading>
        <Stack divider={<StackDivider />} spacing="1" my={5}>
          <HStack justifyContent="space-between">
            <Text>Release Date:</Text>
            <Text>{moment(game.releaseDate).format("LL")}</Text>
          </HStack>
          <HStack justifyContent="space-between" wrap="wrap">
            <Text>Genres:</Text>
            <Text>{game.genres.join(", ")}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Critic Score:</Text>
            <CriticScore score={game.criticScore} />
          </HStack>
        </Stack>
      </CardBody>
      <CardFooter>
        {(preview || game._id !== undefined) && (
          <IconButton
            aria-label="Delete Game"
            icon={<DeleteIcon />}
            colorScheme="red"
            variant="outline"
            isDisabled={preview}
            isLoading={deleteGame.isLoading}
            onClick={() => deleteGame.mutate(game._id || "")}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default GameCard;
