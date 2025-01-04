import React from 'react';
import PropTypes from 'prop-types';
import ChatThread  from './ChatThread';
import './index.css';


const ChatListContainer = ({ chats, onSelectChat }) => {
  return (
    <div className='chat-list'>
      {chats.map((chat, index) => (
        <ChatThread key={index} chat={chat} onSelectChat={onSelectChat} />
      ))}
    </div>
  );
};

ChatListContainer.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectChat: PropTypes.func.isRequired,
};

export default ChatListContainer;

