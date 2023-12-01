import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import useCustomers from "../../../hooks/customers/useCustomers";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Card,
  Heading,
  Stack,
  StackDivider,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
import CustomerAccordionSkeleton from "./CustomerAccordionSkeleton";
import CustomerDeleteButton from "../CustomerDeleteButton";

const CustomerAccordian = () => {
  const { data, error, isLoading } = useCustomers();

  if (isLoading) {
    return <CustomerAccordionSkeleton />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Accordion allowToggle my={6}>
      {data?.map((customer) => (
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{
                bg: useColorModeValue("gray.200", "gray.650"),
                borderTop: "none",
              }}
            >
              <Box as="span" flex="1" textAlign="left">
                {customer.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={2}
            px={0}
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            <Card variant="filled" borderRadius={0}>
              <Stack
                direction={{ base: "column", md: "row" }}
                divider={<StackDivider />}
                p={4}
                justifyContent="space-evenly"
              >
                <Stack direction="column" spacing={2}>
                  <Heading size="sm">Contact Details</Heading>
                  <Text>
                    <EmailIcon mr={1} /> {customer.email}
                  </Text>
                  <Text>
                    <PhoneIcon mr={1} /> {customer.phone}
                  </Text>
                </Stack>
                <Stack direction="column" spacing={2}>
                  <Heading size="sm">Orders</Heading>
                  <Text>
                    <Badge colorScheme="blue">0</Badge>
                  </Text>
                </Stack>
                <Stack direction="column" spacing={2}>
                  <Heading size="sm">Registration Date</Heading>
                  <Tag colorScheme="facebook">
                    {moment(customer.joinedOn).format("LLLL")}
                  </Tag>
                </Stack>
                <CustomerDeleteButton customerId={customer._id as string} />
              </Stack>
            </Card>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomerAccordian;
