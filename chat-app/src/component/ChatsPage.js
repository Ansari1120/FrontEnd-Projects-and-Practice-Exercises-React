import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChatState } from "../context/chatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import MyChats from "./MyChats";
import ChatBox from "./ChatBox";

const ChatsPage = () => {
  const { userData } = ChatState();
  console.log("user", userData);
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    await axios
      .get("http://localhost:5000/api/chat/", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        setChats([...data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {userData && <SideDrawer />}
      {chats.map((data, index) => (
        <div key={index}>{data.chatName}</div>
      ))}
      <Box>
        {userData && <MyChats />}
        {userData && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatsPage;