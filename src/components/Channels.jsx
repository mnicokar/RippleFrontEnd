import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/Context";
import ChannelSettingsPopup from "./ChannelSettingsPopup/ChannelSettingsPopup";

function Channels() {
  const { channels, fetchChannels, fetchSingleChannel } =
    useContext(ChatContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    fetchChannels();
  }, []);

  const handleSelect = (channelId) => {
    fetchSingleChannel(channelId);
  };

  const handleOpenPopup = (e, channelId) => {
    e.stopPropagation();
    setShowPopup(true);
    setSelectedChannel(channelId);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="text-white">
      {channels.map((channel) => (
        <div
          key={channel._id}
          id={channel._id}
          className="border-b border-gray-800 p-4 hover:bg-gray-800 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis"
          onClick={() => handleSelect(channel._id)}
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-green-600">#</span>
              <span>{channel.chatName}</span>
            </div>
            <div onClick={(e) => handleOpenPopup(e, channel)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-gray-500 cursor-pointer transition-colors duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
      {showPopup && (
        <ChannelSettingsPopup
          onClose={handleClosePopup}
          selectedChannel={selectedChannel}
        />
      )}
    </div>
  );
}

export default Channels;
