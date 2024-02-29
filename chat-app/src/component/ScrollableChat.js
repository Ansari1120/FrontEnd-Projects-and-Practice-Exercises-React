import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { ChatState } from "../context/chatProvider";
import { isLastMessage, isSameSender, isSameUser } from "../config/constants";
import { Avatar, Tooltip } from "@chakra-ui/react";

const ScrollableChat = ({ messages }) => {
  const { userData } = ChatState();
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((message, index) => (
          <div
            style={{ display: "flex", marginBottom: "10px" }}
            key={message._id}
          >
            {(isSameSender(messages, message, index, userData._id) ||
              isLastMessage(messages, index, userData._id)) && (
              <Tooltip
                label={message.sender.name}
                placement="bottom-start"
                hasArrow
              >
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor={"pointer"}
                  name={message.sender.name}
                  src={message.sender.profilePicture}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  message.sender._id === userData._id ? "#BEE3F8" : "#B9F5D0"
                }`,

                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                // marginLeft:
                //   message.sender._id === userData._id
                //     ? 540
                //     : !isSameSender(messages, message, index, userData._id) &&
                //       !isLastMessage(messages, index, userData._id) &&
                //       message.sender._id !== userData._id
                //     ? 38
                //     : 0,
                marginLeft:
                  message.sender._id === userData._id
                    ? "auto" // Align to the right for sender's messages
                    : !isSameSender(messages, message, index, userData._id) &&
                      !isLastMessage(messages, index, userData._id) &&
                      message.sender._id !== userData._id
                    ? 38
                    : 0, // No margin for recipient's messages
                marginRight:
                  message.sender._id === userData._id
                    ? 0 // No margin for sender's messages
                    : "auto", // Align to the left for recipient's messages
                marginTop: isSameUser(messages, message, index, userData._id)
                  ? 3
                  : 10,
              }}
            >
              {message.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
