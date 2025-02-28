import React from "react";
import { useParams } from "react-router-dom";

function ChatGreeting({ username = "USER" }) {
  const { botName } = useParams();

  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-5xl font-bold">HI, {username.toUpperCase()}!</h1>
      <h2 className="text-5xl font-bold">
        I AM {botName ? botName.toUpperCase() : "ENERGO"}
      </h2>
    </header>
  );
}

export default ChatGreeting;
