import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColorSwitchToggle from "./ColorSwitchToggle";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <div>
        <HStack>
          <Image src={logo} boxSize="70px" margin={2} />
          <Show above="lg">
            <ButtonGroup variant="ghost">
              <Button>
                <Link to="/">Games</Link>
              </Button>
              <Button>
                <Link to="/customers">Customers</Link>
              </Button>
              <Button>
                <Link to="/rentals">Rentals</Link>
              </Button>
            </ButtonGroup>
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
                <MenuItem>
                  <Link to="/">Games</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/customers">Customers</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/rentals">Rentals</Link>
                </MenuItem>
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
