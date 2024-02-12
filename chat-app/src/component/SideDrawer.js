import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React, { useState } from "react";
import { ChatState } from "../context/chatProvider";
import MyModal from "./MyModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDisclosure } from "@chakra-ui/hooks";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import UsersList from "./UsersList";

const SideDrawer = () => {
  const { userData, setSelectedChat, chats, setChats } = ChatState();
  const history = useHistory();
  console.log("user", userData);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleLogout = async () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
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
        `${process.env.REACT_APP_BACKEND_URL}/api/user?search=${search}`,
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

  const handleAccessUser = async (recipientId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/chat/`,
        {
          recipientId,
        },
        config
      );
      setLoadingChat(false);
      console.log(data);
      setSelectedChat(data.data);
      onClose();
    } catch (error) {
      setLoadingChat(false);
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
      <Flex
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
        justifyContent="space-between"
        alignContent="space-between"
      >
        <Tooltip label="Search Users to Chat" hasArrow placement="right-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work Sans" ml="4">
          Truss
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={userData.name}
                src={userData.profilePicture}
              />
            </MenuButton>
            <MenuList>
              <MyModal user={userData}>
                <MenuItem>My Profile</MenuItem>
              </MyModal>
              <MenuDivider />

              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Search Users</DrawerHeader>
          <DrawerBody>
            <Flex pb={2} d="flex">
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Flex>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResults?.map((user) => (
                <UsersList
                  key={user._id}
                  user={user}
                  handleAccessUser={() => handleAccessUser(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
