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
              <p>del</p>
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
