import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChatState } from "../context/chatProvider";
import { Box, Flex } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import MyChats from "./MyChats";
import ChatBox from "./ChatBox";

const ChatsPage = () => {
  const { userData } = ChatState();
  console.log("user", userData);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [chats, setChats] = useState([]);

  return (
    <div style={{ width: "100%" }}>
      {userData && <SideDrawer />}
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"91.5vh"}
        padding={"10px"}
        // flexDirection={"row"}
        // // alignItems={"center"}
        // // justifyContent={"center"}
      >
        {userData && <MyChats fetchAgain={fetchAgain} />}
        {userData && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatsPage;
