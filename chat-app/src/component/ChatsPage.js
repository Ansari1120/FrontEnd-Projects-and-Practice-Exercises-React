import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatsPage = () => {
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
    <div>
      {chats.map((data, index) => (
        <div key={index}>{data.chatName}</div>
      ))}
    </div>
  );
};

export default ChatsPage;
