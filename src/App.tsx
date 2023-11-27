import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main"`,
      }}
      templateColumns={{
        base: "fr",
        lg: "1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}></GridItem>
      </Show>
    </Grid>
  );
}

export default App;
