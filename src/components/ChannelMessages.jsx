import React, { useContext } from "react";
import Message from "./Message";

import { ChatContext } from "../context/Context";
import AddMessageInput from "./AddMessageInput";
const ChannelMessages = ({ position, displayProfilePopup, isVisible }) => {
  const { messages, titleName, isChannel, fetchUserById, selectedChat } =
    useContext(ChatContext);
  console.log(selectedChat);
  return (
    <div className="bg-gray-400 flex flex-col h-full p-4">
      <div className="text-5xl border-b border-gray-700 pb-4 flex items-center">
        {isChannel ? (
          <div className="flex items-center">
            <div className="font-bold">#</div>
            <div>{titleName}</div>
          </div>
        ) : (
          <div className="flex items-center">
            <img src={titleName.img} className="rounded-full w-12 h-12 mr-2" />
            <div>{titleName}</div>
          </div>
        )}
      </div>

      <br />

      <div className="flex-grow overflow-y-auto">
        <div className="flex flex-col">
          {isChannel ? (
            <div className="flex items-center justify-center text-gray-600 font-bold mb-5 pb-3">
              <p className="flex-grow">
                This is the start of the #{titleName} channel
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center text-gray-600 font-bold mb-5 pb-3">
              <p className="flex-grow">
                This is the beginning of your message history with {titleName}
              </p>
            </div>
          )}
        </div>
        {messages.map(
          (messageData, index) => (
            console.log(messageData),
            (
              <Message
                key={messageData.id + index}
                profilePic={messageData.user.profilePhoto}
                name={messageData.user.firstName}
                lastName={messageData.user.lastName}
                message={messageData.text}
                timestamp={messageData.createdAt}
                position={position}
                displayProfilePopup={displayProfilePopup}
                isVisible={isVisible}
              />
            )
          )
        )}
      </div>

      <AddMessageInput selectedChat={selectedChat} />
    </div>
  );
};

export default ChannelMessages;
