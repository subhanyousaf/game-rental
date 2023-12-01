import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Tag,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import RawgGame from "../../entities/RawgGame";
import getCroppedImageUrl from "../../utils/rawg-image";
import PlatformIconList from "../stats/PlatformIconList";
import CriticScore from "../stats/CriticScore";
import AddGameModel from "./AddGameModal";

interface Props {
  game: RawgGame;
}

const GameBrowserCard = ({ game }: Props) => {
  return (
    <Card bg={useColorModeValue("gray.50", "gray.800")} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
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
          <AddGameModel game={game} />
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default GameBrowserCard;
