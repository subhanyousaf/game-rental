import { useMutation, useQueryClient } from "@tanstack/react-query";
import Customer from "../../entities/Customer";
import APIClient from "../../services/apiClient";
import { AxiosError } from "axios";
import { useCustomersStore } from "../../store";

const apiClient = new APIClient<Customer>("/customers");

const useAddCustomer = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  const customerQuery = useCustomersStore((state) => state.customerQuery);
  return useMutation<Customer, AxiosError, Customer>({
    mutationFn: (customer: Customer) => {
      return apiClient.post(customer);
    },
    onSuccess: () => {
      onAdd();
      queryClient.invalidateQueries(["customers", customerQuery]);
    },
  });
};

export default useAddCustomer;
