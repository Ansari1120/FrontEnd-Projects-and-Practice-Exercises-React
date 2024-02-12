import React, { useEffect, useState } from "react";
import { ChatState } from "../context/chatProvider";
import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { AddIcon } from "@chakra-ui/icons";
import ChatLoading from "./ChatLoading";
import { getSender } from "../config/constants";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { userData, setSelectedChat, selectedChat, chats, setChats } =
    ChatState();
  const toast = useToast();
  const handleFetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/chat`,
        config
      );

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      // setLoadingChat(false);
      console.log(data);
      setChats(data.data);
    } catch (error) {
      // setLoading(false);
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

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    handleFetchChats();
  }, [chats, userData]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDirection={"column"}
      alignItems={"center"}
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth={"1px"}
    >
      <Box
        pb={3}
        px={3}
        display={"flex"}
        w="100%"
        gap={4}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize={{ base: "28px", md: "19px" }} fontFamily={"Work sans"}>
          My Chats
        </Text>
        <Button
          display={"flex"}
          fontSize={{ base: "17px", md: "12px", lg: "17px" }}
          rightIcon={<AddIcon />}
        >
          New Group Chat
        </Button>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius={"lg"}
        overflowY={"hidden"}
      >
        {chats ? (
          <Stack overflowY={"scroll"} width={"100%"}>
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor={"pointer"}
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius={"lg"}
                key={chat._id}
              >
                <Text>
                  {/* {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName} */}
                  {chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;