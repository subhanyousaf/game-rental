import { IconButton } from "@chakra-ui/react";
import useDeleteCustomer from "../../hooks/customers/useDeleteCustomer";
import { DeleteIcon } from "@chakra-ui/icons";
import showToast from "../../utils/showToast";

interface Props {
  customerId: string;
}

const CustomerDeleteButton = ({ customerId }: Props) => {
  const deleteCustomer = useDeleteCustomer((customer, error) => {
    if (customer)
      showToast({
        title: "Customer Deleted!",
        description: "We've deleted " + customer.name + ".",
        status: "success",
      });

    if (error)
      showToast({
        title: "Error Deleting Customer!",
        description: error.message,
        status: "error",
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
