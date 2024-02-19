import React, { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
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
  useToast,
} from "@chakra-ui/react";
import { ChatState } from "../context/chatProvider";
import UsersBadge from "./UsersBadge";
const UpdateGroupChatModal = ({ fetchAgain, setFetchAgain }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData, setSelectedChat, selectedChat } = ChatState();
  const [search, setSearch] = useState("");
  const [groupChatName, setGroupChatName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameLoading, setRenameLoading] = useState(false);
  const toast = useToast();
  const handleRemove = () => {};
  return (
    <>
      <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      <Modal size="lg" isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader
              fontSize={"35px"}
              fontFamily={"Work sans"}
              display={"flex"}
              justifyContent={"center"}
            >
              {selectedChat.chatName}
            </ModalHeader>
          </Center>
          <ModalCloseButton />
          <Center>
            <ModalBody
              d="flex"
              flexDir="column"
              justifyContent="space-between"
              alignItems="center" // Add this line
            >
              <Box>
                {selectedChat.users.map((user) => (
                  <UsersBadge
                    key={user._id}
                    user={user}
                    handleUser={() => handleRemove(user)}
                  />
                ))}
              </Box>
            </ModalBody>
          </Center>

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

export default UpdateGroupChatModal;
