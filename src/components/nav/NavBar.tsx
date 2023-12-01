import {
  Button,
  ButtonGroup,
  HStack,
  Hide,
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
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <div>
        <HStack>
          <Image src={logo} boxSize="70px" margin={2} />
          <Show above="lg">
            <ButtonGroup variant="ghost">
              <NavLink to="/">
                {({ isActive }) => <Button isActive={isActive}>Games</Button>}
              </NavLink>
              <NavLink to="/customers">
                {({ isActive }) => (
                  <Button isActive={isActive}>Customers</Button>
                )}
              </NavLink>
              <NavLink to="/purchases">
                {({ isActive }) => (
                  <Button isActive={isActive}>Purchases</Button>
                )}
              </NavLink>
            </ButtonGroup>
          </Show>
          <Hide above="lg">
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
                  <Link to="/purchases">Purchases</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Hide>
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
