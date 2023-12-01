import { Badge } from "@chakra-ui/react";

interface Props {
  stock: number;
}

const StockCount = ({ stock }: Props) => {
  let color = stock > 50 ? "green" : stock > 20 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      variant="outline"
    >
      {stock.toLocaleString()} remaning
    </Badge>
  );
};

export default StockCount;
