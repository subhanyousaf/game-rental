import { Grid, GridItem, Heading, Hide, Show, Stack } from "@chakra-ui/react";
import CustomerAddForm from "../components/customers/desktop/CustomerAddForm";
import CustomerTable from "../components/customers/desktop/CustomerTable";
import SearchBar from "../components/global/SearchBar";
import CustomerAccordian from "../components/customers/mobile/CustomerAccordion";
import CustomerFormData from "../components/customers/mobile/CustomerAddDrawer";

const CustomersPage = () => {
  return (
    <Grid
      margin={3}
      templateAreas={{
        base: `"heading" "main"`,
        lg: `"heading heading" "aside main"`,
      }}
      templateColumns={{
        base: "fr",
        lg: "0.3fr 1fr",
      }}
    >
      <GridItem area="heading" mb={5}>
        <Heading>Customers</Heading>
      </GridItem>
      <GridItem area="main">
        <Stack direction="row">
          <SearchBar type="customers" />
          <Hide above="lg">
            <CustomerFormData />
          </Hide>
        </Stack>
        <Hide above="lg">
          <CustomerAccordian />
        </Hide>
        <Show above="lg">
          <CustomerTable />
        </Show>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" mr={4}>
          <CustomerAddForm />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default CustomersPage;
