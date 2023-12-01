import { Popover, useDisclosure } from "@chakra-ui/react";

const GameEditPopover = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
    
  </Popover>;
};

export default GameEditPopover;
