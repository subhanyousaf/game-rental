import { Badge } from "@chakra-ui/react";

interface Props {
  price: number;
}

const PriceTag = ({ price }: Props) => {
  return (
    <Badge
      colorScheme="green"
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      variant="solid"
    >
      ${price}
    </Badge>
  );
};

export default PriceTag;
