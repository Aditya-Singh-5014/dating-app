import React, { useState, useEffect, useCallback } from "react";
import { sendMessage, getMessages } from "../../services/messageService";
import useWebSocket from "../../services/socketService";

const Chat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleWebSocketMessage = useCallback(
    (message) => {
      if (message.type === "newMessage" && message.data.receiverId === userId) {
        setMessages((prevMessages) => [...prevMessages, message.data]);
      }
    },
    [userId]
  );

  const sendWebSocketMessage = useWebSocket(
    "ws://localhost:5000",
    handleWebSocketMessage
  );

  useEffect(() => {
    getMessages(userId).then((response) => {
      setMessages(response.data);
    });
  }, [userId]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = { receiverId: userId, content: newMessage };
    sendMessage(message).then((response) => {
      setMessages([...messages, response.data.message]);
      sendWebSocketMessage({ type: "newMessage", data: response.data.message });
      setNewMessage("");
    });
  };

  return (
    <div>
      <h1>Chat</h1>
      {messages.map((message) => (
        <div key={message._id}>
          <p>{message.content}</p>
        </div>
      ))}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
