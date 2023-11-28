import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="65px" />
      <CardBody>
        <SkeletonText noOfLines={5} skeletonHeight={9} />
      </CardBody>
      <Skeleton height="80px" />
    </Card>
  );
};

export default GameCardSkeleton;
