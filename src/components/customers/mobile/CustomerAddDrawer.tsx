import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import CustomerForm from "../CustomerForm";

const CustomerFormData = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Add Customer</Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Add a Customer</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <CustomerForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomerFormData;
