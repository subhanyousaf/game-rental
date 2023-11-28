import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Button,
  Stack,
} from "@chakra-ui/react";
import GameBrowserGrid from "./GameBrowserGrid";
import SearchBar from "../global/SearchBar";

const GameBrowserDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="gray">
        Add Game
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Game Browser</DrawerHeader>
          <DrawerBody>
            <Stack spacing={5}>
              <SearchBar type="rawg_games" />
              <GameBrowserGrid />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GameBrowserDrawer;
