import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const CustomerAccordionSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Accordion my={6}>
      {skeletons.map((skeleton) => (
        <div key={skeleton}>
          <AccordionItem isDisabled>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Skeleton height="20px" width="100%" />
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <SkeletonText noOfLines={4} />
            </AccordionPanel>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
};

export default CustomerAccordionSkeleton;
