import {
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorSwitchToggle from "./ColorSwitchToggle";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <div>
        <HStack>
          <Image src={logo} boxSize="70px" margin={2} />
          <Show above="lg">
            <Button variant="ghost" isActive={true}>
              Games
            </Button>
            <Button variant="ghost">Customers</Button>
            <Button variant="ghost">Rentals</Button>
          </Show>
          <Show below="lg">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Games</MenuItem>
                <MenuItem>Customers</MenuItem>
                <MenuItem>Rentals</MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </HStack>
      </div>
      <div>
        <HStack paddingX={3}>
          <ColorSwitchToggle />
          <Button variant="ghost">Login</Button>
          <Button colorScheme="purple">Register</Button>
        </HStack>
      </div>
    </HStack>
  );
};

export default NavBar;
