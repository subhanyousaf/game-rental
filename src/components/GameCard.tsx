import moment from "moment";
import { Game } from "../hooks/useGames";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  IconButton,
  StackDivider,
  Tag,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import useDeleteGame from "../hooks/useDeleteGame";

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
      bg={useColorModeValue("blackAlpha.100", "gray.700")}
      variant={preview ? "outline" : "solid"}
    >
      <CardHeader>
        <Heading size="md">{game.name || "No Name"}</Heading>
      </CardHeader>
      <CardBody>
        <HStack justifyContent={"space-between"} divider={<StackDivider />}>
          <Box>
            <Heading size="sm">Genre</Heading>
            <Text>{game.genre || "No Genre"}</Text>
          </Box>
          <Box>
            <Heading size="sm">Platform</Heading>
            <Text>{game.platform || "No Platform"}</Text>
          </Box>
          <Box>
            <Heading size="sm">Release Date</Heading>
            <Text>{moment(game.releaseDate).format("ll")}</Text>
          </Box>
        </HStack>
        <HStack pt={5} justifyContent="space-between">
          <Tag
            fontWeight="bold"
            size="lg"
            paddingX={2}
            variant="subtle"
            colorScheme="yellow"
          >
            ${(game.price || 0).toLocaleString()}
          </Tag>
          <Tag size="lg" paddingX={2} variant="subtle" colorScheme="green">
            {(game.stock || 0).toLocaleString()} in stock
          </Tag>
        </HStack>
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
