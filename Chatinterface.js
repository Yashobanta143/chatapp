import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';


const ChatInterface = ({ selectedChat, onMessageSend }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Send message logic here
    const id = selectedChat.id;
    // console.log('Message sent:', message, id);
    onMessageSend(message, id);
    setMessage(" ");
  };

  return (
    <div className='message-container'>
      <div className='chat-header'>
        <img src= {selectedChat.img} className='new-img'/>
        <h2>{selectedChat.name}</h2>
      </div>
      <div>
        {selectedChat.messages.map((message, index) => (
          <p key={index} className='message'>{message}</p>
        ))}
      </div>
      <input className='msg-input'
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage} className='send-button'>Send</button>
    </div>
  );
};

ChatInterface.propTypes = {
  selectedChat: PropTypes.object.isRequired,
};

export default ChatInterface;




