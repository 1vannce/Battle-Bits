import React from "react";

function ChatMessage({ message }) {
  return (
    <article className="px-4 py-4 mt-20 text-base bg-gray-50 rounded-lg border border-solid border-zinc-300 max-md:mt-10">
      {message}
    </article>
  );
}

export default ChatMessage;
