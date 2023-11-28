import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Tag,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { RawgGame } from "../../hooks/rawg/useRawgGames";
import PlatformIconList from "../stats/PlatformIconList";
import CriticScore from "../stats/CriticScore";

interface Props {
  game: RawgGame;
}

const GameBrowserCardPreview = ({ game }: Props) => {
  return (
    <Card
      bg={useColorModeValue("gray.50", "gray.800")}
      overflow="hidden"
      variant="outline"
    >
      <CardBody pb={0}>
        <HStack justifyContent="space-between" mb={2}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform.slug)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
      <CardFooter>
        <VStack alignItems="flex-start">
          <Tag colorScheme="facebook">Released {game.released}</Tag>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default GameBrowserCardPreview;
