import { UseToastOptions, useToast } from "@chakra-ui/react";

const showToast = ({
  title,
  description,
  status,
  duration = 3000,
  isClosable = true,
  variant = "solid",
  position = "top",
}: UseToastOptions) => {
  const toast = useToast();
  toast({
    title,
    description,
    status,
    duration,
    isClosable,
    variant,
    position,
  });
};

export default showToast;
