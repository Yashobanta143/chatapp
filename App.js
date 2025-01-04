import React, { useState } from 'react';
import ChatListContainer from './ChatListContainer';
import ChatInterface from './Chatinterface';
import './index.css';
import UserProfile from './userProfile';

// const chats = [
//   {
//     id: 1,
//     name: 'John Doe',
//     lastMessage: 'Hello!',
//     messages: [],
//   },
//   {
//     id: 2,
//     name: 'Jane Doe',
//     lastMessage: 'Hi!',
//     messages: ['Hi!', "What's up?"],
//   },
// ];

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, updateChats] = useState([
    {
      id: 1,
      name: 'John Doe',
      ph: 8483943,
      email: "johndoe@gmail.com",
      img : "https://images.unsplash.com/photo-1732053890668-1df891b0e8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: 'Hello!',
      messages: ["hii", "This is John"],
    },
    {
      id: 2,
      name: 'Jason Bourne',
      email: "Jasonbourne@gmail.com",
      ph: 36434398,
      img: 'https://images.unsplash.com/photo-1735831435060-845f03ad57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      lastMessage: 'Hi!',
      messages: ['Hi!', "What's up?"],
    },
  ]);

  
  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };
  const handleMessageSend = (message, id) => {
    const updatedMessages = chats.map((chat) => {
      if (chat["id"] === id) {
        return { ...chat, messages: [...chat.messages, message] };
      }
      return chat;
    });
    updateChats(updatedMessages);
  };

  return (
    <div>
      <div className='header'><h1>Chat App</h1></div>
      
      <div style={{ display: 'flex' }}>
        <ChatListContainer chats={chats} onSelectChat={handleSelectChat} />
        {selectedChat && <ChatInterface selectedChat={selectedChat} onMessageSend={handleMessageSend}/>}
        {selectedChat && <UserProfile selectedChat={selectedChat}/>}
      </div>
    </div>
  );
};

export default App;
