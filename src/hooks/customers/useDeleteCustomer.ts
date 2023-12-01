import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../services/apiClient";
import Customer from "../../entities/Customer";
import { useCustomersStore } from "../../store";
import { AxiosError } from "axios";

const useDeleteCustomer = (
  onDelete: (customer: Customer | null, error: AxiosError | null) => void
) => {
  const queryClient = useQueryClient();
  const customerQuery = useCustomersStore((state) => state.customerQuery);
  return useMutation<Customer, AxiosError, string | undefined>({
    mutationFn: (id: string | undefined) => {
      const apiClient = new APIClient<Customer>("/customers/" + id);
      return apiClient.delete();
    },
    onSuccess: (deletedCustomer: Customer) => {
      onDelete(deletedCustomer, null);
      queryClient.invalidateQueries(["customers", customerQuery]);
    },
    onError: (error: AxiosError) => {
      onDelete(null, error);
    },
  });
};

export default useDeleteCustomer;
