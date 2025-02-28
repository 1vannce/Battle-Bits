"use client";
import React, { useState } from "react";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Call the callback function with the message
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 self-stretch mt-8 text-base text-black max-md:mt-6 max-md:max-w-full"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="grow shrink-0 px-4 py-5 bg-gray-50 rounded-lg border border-solid basis-0 border-zinc-300 w-fit max-md:pr-5 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Message input"
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-green-500 w-14 h-14 rounded-lg hover:bg-green-600 transition duration-300"
        aria-label="Send message"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
}

export default ChatInput;
