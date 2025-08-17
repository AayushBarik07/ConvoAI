import React from "react";

const ChatMessage = ({ sender, text }) => {
  const isUser = sender === "user";
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: 14,
        alignItems: "flex-end",
      }}
    >
      {/* Avatar */}
      {!isUser && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#1976d2",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 8,
            fontSize: 16,
          }}
        >
          🤖
        </div>
      )}

      <div>
        {/* Chat Bubble */}
        <div
          style={{
            maxWidth: "70%",
            padding: "10px 16px",
            borderRadius: 16,
            background: isUser ? "#1976d2" : "#e3eafc",
            color: isUser ? "#fff" : "#222",
            boxShadow: "0 1px 4px #0001",
            fontSize: 15,
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
            alignSelf: isUser ? "flex-end" : "flex-start",
          }}
        >
          {text}
        </div>

        {/* Timestamp */}
        <div
          style={{
            fontSize: 11,
            color: "#888",
            marginTop: 4,
            textAlign: isUser ? "right" : "left",
          }}
        >
          {timestamp}
        </div>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#e0e0e0",
            color: "#444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 8,
            fontSize: 16,
          }}
        >
          🧑
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
