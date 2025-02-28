import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatGreeting from "../components/ChatGreeting";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

function Chatbot() {
  const { botName } = useParams();
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { text, isBot: false }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `Response from ${botName}`, isBot: true },
      ]);
    }, 1000);
  };

  return (
    <main className="flex flex-col justify-between min-h-screen px-6 py-8 bg-white text-gray-800">
      <section className="flex flex-col items-start w-full max-w-3xl mx-auto">
        <ChatGreeting botName={botName} />
        <div className="w-full mt-6 space-y-4 overflow-y-auto flex-grow">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-3/4 ${
                  msg.isBot ? "bg-gray-100" : "bg-green-500 text-white"
                } p-4 rounded-lg`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
}

export default Chatbot;
