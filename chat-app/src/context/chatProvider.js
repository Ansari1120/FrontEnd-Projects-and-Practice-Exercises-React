import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Context = createContext();

const ChatProvider = ({ children }) => {
  const history = useHistory();
  const [userData, setuserData] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    setuserData(data);

    if (!data) {
      history.push("/");
    }
  }, [history]);

  return (
    <Context.Provider
      value={{
        userData,
        setuserData,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const ChatState = () => {
  return useContext(Context);
};
export default ChatProvider;
