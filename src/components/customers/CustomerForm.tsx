import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import useAddCustomer from "../../hooks/customers/useAddCustomer";
import Customer from "../../entities/Customer";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(11),
});

type FormData = z.infer<typeof schema>;

const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  let toast = useToast();

  const addCustomer = useAddCustomer(() => {
    reset();
    toast({
      title: "Customer Added!",
      description: "We've added a new customer.",
      status: "success",
      isClosable: true,
      duration: 5000,
      position: "top",
    });
  });

  const onSubmit = (data: FieldValues) => {
    const customer: Customer = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
    };

    addCustomer.mutate(customer);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {addCustomer.error && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>
              {addCustomer.error?.response?.data as String}
            </AlertDescription>
          </Alert>
        )}
        <FormControl isInvalid={errors.firstName ? true : false} isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            {...register("firstName")}
            variant="filled"
            placeholder="John"
            type="text"
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.lastName ? true : false} isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            {...register("lastName")}
            variant="filled"
            placeholder="Doe"
            type="text"
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email ? true : false} isRequired>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              {...register("email")}
              variant="filled"
              placeholder="john@doe.com"
              type="email"
              pr="5rem"
            />
            <InputRightElement w="4.2rem">
              <Button colorScheme="gray" size="sm">
                Verify
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phone ? true : false} isRequired>
          <FormLabel>Phone</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+92" />
            <Input
              {...register("phone")}
              variant="filled"
              placeholder="123-456-7890"
              type="number"
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <Button
        my={5}
        disabled={addCustomer.isLoading}
        isLoading={addCustomer.isLoading}
        type="submit"
        w="100%"
        colorScheme="gray"
      >
        Add
      </Button>
    </form>
  );
};

export default CustomerForm;
