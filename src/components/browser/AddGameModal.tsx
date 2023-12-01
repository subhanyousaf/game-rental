import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Spinner,
  Stack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Game from "../../entities/Game";
import useAddGame from "../../hooks/games/useAddGame";
import RawgGame from "../../entities/RawgGame";
import GameBrowserCardPreview from "./GameBrowserCardPreview";
import moment from "moment";
import getCroppedImageUrl from "../../utils/rawg-image";

interface Props {
  game: RawgGame;
}

const schema = z.object({
  price: z.number().min(0),
  stock: z.number().min(0),
});

type FormData = z.infer<typeof schema>;

const AddGameModel = ({ game }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const toast = useToast();

  const addGame = useAddGame(() => {
    onClose();
    reset();
    toast({
      title: "Game added!",
      description: "We've added your game to the database.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  });

  const onSubmit = (data: FieldValues) => {
    const newGame: Game = {
      name: game.name,
      genres: game.genres?.map((g) => g.name),
      platforms: game.parent_platforms?.map((p) => p.platform.slug),
      price: data.price,
      releaseDate: moment(game.released).toDate(),
      stock: data.stock,
      gameArtUrl: getCroppedImageUrl(game.background_image),
      criticScore: game.metacritic || 0,
    };

    addGame.mutate(newGame);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="gray">
        Add Game
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        <ModalOverlay />
        <ModalContent overflow={"hidden"}>
          <ModalHeader bg={useColorModeValue("white", "gray.700")}>
            Add a Game
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6} bg={useColorModeValue("gray.100", "gray.800")}>
              <Stack mt={3}>
                <GameBrowserCardPreview game={game} />
                <FormControl isInvalid={errors.price ? true : false} isRequired>
                  <FormLabel>Price</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      {...register("price", { valueAsNumber: true })}
                      type="number"
                      focusBorderColor="purple.200"
                      placeholder="29.99"
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.price && errors.price.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.stock ? true : false} isRequired>
                  <FormLabel>Stock Count</FormLabel>
                  <NumberInput min={0} focusBorderColor="purple.200">
                    <NumberInputField
                      {...register("stock", { valueAsNumber: true })}
                    />
                  </NumberInput>
                  <FormErrorMessage>
                    {errors.stock && errors.stock.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="purple"
                mr={3}
                type="submit"
                isLoading={addGame.isLoading}
              >
                {addGame.isLoading ? <Spinner /> : "Add"}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddGameModel;
