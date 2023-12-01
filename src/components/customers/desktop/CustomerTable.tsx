import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import useCustomers from "../../../hooks/customers/useCustomers";
import CustomerTableSkeleton from "./CustomerTableSkeleton";
import CustomerDeleteButton from "../CustomerDeleteButton";

const CustomerTable = () => {
  const { data, isLoading } = useCustomers();

  if (isLoading) {
    return <CustomerTableSkeleton />;
  }

  return (
    <TableContainer my={5}>
      <Table variant="simple">
        <TableCaption>Customers Registered With Us</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Contact</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((customer) => (
            <Tr key={customer._id}>
              <Td>{customer.name}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.phone}</Td>
              <Td>
                <CustomerDeleteButton customerId={customer._id as string} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
