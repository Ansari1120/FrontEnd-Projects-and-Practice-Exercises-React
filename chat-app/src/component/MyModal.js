import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const MyModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}> {children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>{user.name}</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            justifyContent="space-between"
            alignItems="center" // Add this line
          >
            <Center>
              <Image
                borderRadius={"full"}
                boxSize={"150px"}
                src={user.profilePicture}
                alt={user.name}
              />
            </Center>

            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily={"Work sans"}
              textAlign={"center"}
            >
              Email:{user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
