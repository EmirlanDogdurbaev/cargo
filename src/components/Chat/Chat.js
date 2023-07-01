import React, { useEffect, useState } from 'react';
import socket from './socket';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Event listener for new messages
    socket.on('new_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up the event listener when component unmounts
      socket.off('new_message');
    };
  }, []);

  const sendMessage = () => {
    // Send a message to the backend
    socket.emit('send_message', { text: newMessage });

    setNewMessage('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
