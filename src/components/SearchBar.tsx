import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useGamesStore } from "../store/store";
import { useRef } from "react";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGamesStore((state) => state.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("test");
        if (ref.current) {
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          ref={ref}
          variant="filled"
          size="md"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
