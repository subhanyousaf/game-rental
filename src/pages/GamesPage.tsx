import { Grid, GridItem, Show } from "@chakra-ui/react";
import GamesGrid from "../components/GamesGrid";

const GamesPage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}
      templateColumns={{
        base: "fr",
        lg: "1fr",
      }}
    >
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}></GridItem>
      </Show>
    </Grid>
  );
};

export default GamesPage;
