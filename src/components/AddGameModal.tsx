import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
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
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Stack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Game } from "../hooks/useGames";
import { FaDollarSign } from "react-icons/fa";
import useAddGame from "../hooks/useAddGame";
import GameCard from "./GameCard";
import { useGameDataStore } from "../store/store";

const schema = z.object({
  name: z.string().min(3).max(255),
  genre: z.string().min(1),
  platform: z.string().min(1),
  price: z.number().min(0),
  releaseDate: z.date(),
  stock: z.number().min(0),
});

type FormData = z.infer<typeof schema>;

const AddGameModel = () => {
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

  const {
    game: gameData,
    setName,
    setGenre,
    setPlatform,
    setPrice,
    setReleaseDate,
    setStock,
  } = useGameDataStore((state) => state);

  const onSubmit = (data: FieldValues) => {
    const newGame: Game = {
      name: data.name,
      genre: data.genre,
      platform: data.platform,
      price: data.price,
      releaseDate: data.releaseDate,
      stock: data.stock,
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
        size="lg"
      >
        <ModalOverlay />
        <ModalContent overflow={"hidden"}>
          <ModalHeader bg={useColorModeValue("white", "gray.700")}>
            Add a Game
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6} bg={useColorModeValue("gray.100", "gray.800")}>
              <Stack spacing={2} mt={4}>
                {addGame.error && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>An error has occured!</AlertTitle>
                    <AlertDescription>{addGame.error.message}</AlertDescription>
                  </Alert>
                )}
                <FormControl isInvalid={errors.name ? true : false} isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    {...register("name")}
                    type="text"
                    focusBorderColor="purple.200"
                    placeholder="Insert Game Title"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.genre ? true : false} isRequired>
                  <FormLabel>Genre</FormLabel>
                  <Select
                    {...register("genre")}
                    focusBorderColor="purple.200"
                    placeholder="Select genre..."
                    onChange={(event) => setGenre(event.target.value)}
                  >
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="rpg">RPG</option>
                    <option value="strategy">Strategy</option>
                    <option value="sports">Sports</option>
                    <option value="simulation">Simulation</option>
                    <option value="puzzle">Puzzle</option>
                    <option value="idle">Idle</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.genre && errors.genre.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={errors.platform ? true : false}
                  isRequired
                >
                  <FormLabel>Platform</FormLabel>
                  <RadioGroup
                    variant="filled"
                    onChange={(event) => setPlatform(event)}
                  >
                    <HStack spacing="24px" wrap="wrap">
                      <Radio {...register("platform")} value="pc">
                        PC
                      </Radio>
                      <Radio {...register("platform")} value="xbox">
                        Xbox
                      </Radio>
                      <Radio {...register("platform")} value="playstation">
                        Playstation
                      </Radio>
                      <Radio {...register("platform")} value="nintendo">
                        Nintendo
                      </Radio>
                    </HStack>
                  </RadioGroup>
                  <FormHelperText>
                    Select the platform the game is on.
                  </FormHelperText>
                </FormControl>

                <FormControl isInvalid={errors.price ? true : false} isRequired>
                  <FormLabel>Price</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                    >
                      <FaDollarSign />
                    </InputLeftElement>
                    <Input
                      {...register("price", { valueAsNumber: true })}
                      type="number"
                      focusBorderColor="purple.200"
                      placeholder="29.99"
                      onChange={(event) =>
                        setPrice(parseFloat(event.target.value))
                      }
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.price && errors.price.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={errors.releaseDate ? true : false}
                  isRequired
                >
                  <FormLabel>Release Date</FormLabel>
                  <InputGroup>
                    <Input
                      {...register("releaseDate", { valueAsDate: true })}
                      type="date"
                      focusBorderColor="purple.200"
                      onChange={(event) =>
                        setReleaseDate(new Date(event.target.value))
                      }
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.releaseDate && errors.releaseDate.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.stock ? true : false} isRequired>
                  <FormLabel>Stock Count</FormLabel>
                  <NumberInput min={0} focusBorderColor="purple.200">
                    <NumberInputField
                      {...register("stock", { valueAsNumber: true })}
                      onChange={(event) =>
                        setStock(parseInt(event.target.value))
                      }
                    />
                  </NumberInput>
                  <FormErrorMessage>
                    {errors.stock && errors.stock.message}
                  </FormErrorMessage>
                </FormControl>
                <Heading pt={2} size="md">
                  Preview
                </Heading>
                <GameCard game={gameData} preview={true} />
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
