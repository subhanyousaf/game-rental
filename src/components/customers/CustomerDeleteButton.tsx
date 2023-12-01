import { IconButton, useToast } from "@chakra-ui/react";
import useDeleteCustomer from "../../hooks/customers/useDeleteCustomer";
import { DeleteIcon } from "@chakra-ui/icons";

interface Props {
  customerId: string;
}

const CustomerDeleteButton = ({ customerId }: Props) => {
  const toast = useToast();
  const deleteCustomer = useDeleteCustomer((customer, error) => {
    if (customer)
      toast({
        title: "Customer Deleted!",
        description: "We've deleted " + customer.name + ".",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

    if (error)
      toast({
        title: "Error!",
        description: error.response?.data as string,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
  });

  return (
    <IconButton
      aria-label="Delete"
      colorScheme="red"
      icon={<DeleteIcon />}
      variant="outline"
      isLoading={deleteCustomer.isLoading}
      onClick={() => deleteCustomer.mutate(customerId)}
    />
  );
};

export default CustomerDeleteButton;
