import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage.jsx";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    };

    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      //Call backend API
      const res = await axios.post("http://localhost:3000/api/chat", {
        message: input,
      });

      if (res.data.reply) {
        const botMsg = {
          id: userMsg.id + 1,
          sender: "bot",
          text: res.data.reply,
        };
        setMessages((msgs) => [...msgs, botMsg]);
      } 
      else {
        const botMsg = {
          id: userMsg.id + 1,
          sender: "bot",
          text: "⚠️ Error: No reply from server.",
        };
        setMessages((msgs) => [...msgs, botMsg]);
      }  
    }
    catch (error) {
      console.error("Error fetching chat:", error);
      const botMsg = {
        id: messages.length + 2,
        sender: "bot",
        text: "⚠️ Error: Failed to connect to server.",
      };
      setMessages((msgs) => [...msgs, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="chatbot-container"
      style={{
        maxWidth: 700,
        margin: "40px auto",
        border: "1px solid #e0e0e0",
        borderRadius: 12,
        boxShadow: "0 2px 12px #0001",
        display: "flex",
        flexDirection: "column",
        height: 640,
        background: "#fff",
      }}
    >
      <div
        style={{
          padding: 16,
          borderBottom: "1px solid #eee",
          fontWeight: 600,
          fontSize: 20,
          background: "#f7f7f7",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        ConvoAI
      </div>

      {/* Chat Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 16,
          background: "#fafbfc",
        }}
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
        {loading && (
          <ChatMessage sender="bot" text="Typing..." />
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          borderTop: "1px solid #eee",
          padding: 12,
          background: "#f7f7f7",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
            outline: "none",
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: 8,
            padding: "0 18px",
            borderRadius: 8,
            border: "none",
            background: "#1976d2",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
