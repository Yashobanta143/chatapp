import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const ChatThread = ({ chat, onSelectChat }) => {
  return (
    <div onClick={() => onSelectChat(chat)} className='chat-thread'>
      <h4>{chat.name}</h4>
      <p>{chat.lastMessage}</p>
    </div>
  );
};

ChatThread.propTypes = {
  chat: PropTypes.object.isRequired,
  onSelectChat: PropTypes.func.isRequired,
};

export default ChatThread;
