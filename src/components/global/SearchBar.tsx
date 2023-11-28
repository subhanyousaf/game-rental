import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useGamesStore, useRawgGameStore } from "../../store";
import { useRef } from "react";

interface Props {
  type: "games" | "rawg_games";
}

const SearchBar = ({ type }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const types = {
    games: useGamesStore((state) => state.setSearchText),
    rawg_games: useRawgGameStore((state) => state.setSearchText),
  };
  const setSearchText = types[type];

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
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
