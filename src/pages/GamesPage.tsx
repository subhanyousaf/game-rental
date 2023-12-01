import { Grid, GridItem } from "@chakra-ui/react";
import GamesGrid from "../components/games/GamesGrid";

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
    </Grid>
  );
};

export default GamesPage;
