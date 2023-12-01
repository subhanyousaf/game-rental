import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/apiClient";
import { useCustomersStore } from "../../store";
import { AxiosError } from "axios";
import Customer from "../../entities/Customer";

const apiClient = new APIClient<Customer>("/customers");

const useCustomers = () => {
  const customerQuery = useCustomersStore((state) => state.customerQuery);
  return useQuery<Customer[], AxiosError>({
    queryKey: ["customers", customerQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          search: customerQuery.search,
        },
      }),
    staleTime: 1 * 60 * 1000, // 1 minute
    keepPreviousData: true,
  });
};

export default useCustomers;
