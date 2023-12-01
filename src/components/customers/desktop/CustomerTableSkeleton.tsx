import {
  Skeleton,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const CustomerTableSkeleton = () => {
  const skeletonRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <TableContainer my={5}>
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Skeleton height="20px" />
            </Th>
            <Th>
              <Skeleton height="20px" />
            </Th>
            <Th>
              <Skeleton height="20px" />
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {skeletonRows.map((skeleton) => (
            <Tr key={skeleton}>
              <Td>
                <SkeletonText noOfLines={2} />
              </Td>
              <Td>
                <SkeletonText noOfLines={2} />
              </Td>
              <Td>
                <SkeletonText noOfLines={2} />
              </Td>
              <Td>
                <Skeleton height={10} width="25%" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTableSkeleton;
