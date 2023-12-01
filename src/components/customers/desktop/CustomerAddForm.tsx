import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import CustomerForm from "../CustomerForm";

const CustomerAddForm = () => {
  return (
    <Card size="sm">
      <CardHeader px={6} pt={5}>
        <Heading size="md">Add New Customer</Heading>
      </CardHeader>
      <CardBody px={6}>
        <CustomerForm />
      </CardBody>
    </Card>
  );
};

export default CustomerAddForm;
