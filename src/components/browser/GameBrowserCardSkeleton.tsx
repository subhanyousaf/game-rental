import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameBrowserCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText noOfLines={5} />
        <Skeleton height="30px" width="20" mt={2} />
      </CardBody>
    </Card>
  );
};

export default GameBrowserCardSkeleton;
