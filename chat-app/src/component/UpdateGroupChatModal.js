import React, { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ChatState } from "../context/chatProvider";
import UsersBadge from "./UsersBadge";
import UsersList from "./UsersList";
import axios from "axios";
const UpdateGroupChatModal = ({ fetchAgain, setFetchAgain }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData, setSelectedChat, selectedChat } = ChatState();
  const [search, setSearch] = useState("");
  const [groupChatName, setGroupChatName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameLoading, setRenameLoading] = useState(false);
  const toast = useToast();
  const handleRemove = async (user) => {
    // const isNotMe = user._id !== userData._id;
    // const isAdmin = selectedChat.groupAdmin._id !== user._id;

    if (
      selectedChat.groupAdmin._id !== userData._id &&
      user._id !== userData._id
    ) {
      return toast({
        title: "Error Occured !",
        description: "only admins can remove someone from the group.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/chat/removeFromGroup`,
        {
          chatId: selectedChat._id,
          userId: user._id,
        },
        config
      );

      console.log(data);
      user._id === userData._id
        ? setSelectedChat()
        : setSelectedChat(data.data);
      setLoading(false);
      toast({
        title: "Success",
        description: data?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
      onClose();
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        title: "Error Occured",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const handleAddUser = async (user) => {
    const isExist = selectedChat.users.find((u) => u._id === user._id);
    const isAdmin = selectedChat.groupAdmin._id !== user._id;
    if (isExist) {
      return toast({
        title: "Error Occured !",
        description: "user already exist in the group",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
    if (!isAdmin) {
      return toast({
        title: "Validation Warning",
        description: "only admins can add someone in the group",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/chat/addToGroup`,
        {
          chatId: selectedChat._id,
          userId: user._id,
        },
        config
      );

      setLoading(false);
      console.log(data);
      setSelectedChat(data.data);
      toast({
        title: "Success",
        description: data?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
      onClose();
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        title: "Error Occured",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const handleRename = async () => {
    if (!groupChatName) {
      return toast({
        title: "Validation Warning!",
        description: "Please fill chat rename field",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
    try {
      setRenameLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/chat/renameGroup`,
        {
          chatId: selectedChat._id,
          chatName: groupChatName,
        },
        config
      );
      setSelectedChat(data.data);
      setFetchAgain(!fetchAgain);
      setRenameLoading(false);
      setGroupChatName("");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const handleSearch = async (query) => {
    if (!query) {
      return toast({
        title: "Please Enter Something to search",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/user?search=${query}`,
        config
      );

      setLoading(false);
      console.log(data);
      setSearchResults([...data.data]);
      // setSearchResults(data.data)
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        title: "Error Occured",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
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
              <Box width={"100%"} display={"flex"} flexWrap={"wrap"} pb={3}>
                {selectedChat.users
                  .filter((u) => u._id !== userData._id)
                  .map((user) => (
                    <UsersBadge
                      key={user._id}
                      user={user}
                      handleUser={() => handleRemove(user)}
                    />
                  ))}
              </Box>
              <FormControl display={"flex"}>
                <Input
                  placeholder="chat name"
                  mb={3}
                  value={groupChatName}
                  onChange={(e) => setGroupChatName(e.target.value)}
                />

                <Button
                  variant={"solid"}
                  colorScheme="teal"
                  ml={1}
                  isLoading={renameLoading}
                  onClick={handleRename}
                >
                  Update
                </Button>
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Add user to the group"
                  mb={1}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </FormControl>
              {loading ? (
                <Spinner size="lg" />
              ) : (
                searchResults?.map((user) => (
                  <UsersList
                    key={user._id}
                    user={user}
                    handleAccessUser={() => handleAddUser(user)}
                  />
                ))
              )}
            </ModalBody>
          </Center>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => handleRemove(userData)}
            >
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateGroupChatModal;
