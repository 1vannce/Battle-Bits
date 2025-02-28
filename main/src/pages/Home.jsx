"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ServiceGrid from "../components/ServiceGrid";
import ServiceCard from "../components/ServiceCard";

const Home = ({ username = "USER" }) => {
  const navigate = useNavigate();
  const chatbots = [
    "ENERGO",
    "SUSTAINA",
    "GASTRO",
    "COMMUTO",
    "AQUEO",
    "CARBONIS",
    "RECYLO",
    "ECOFIN",
  ];

  // Handle chatbot selection
  const handleSelectChatbot = (bot) => {
    navigate(`/chatbot/${bot.toLowerCase()}`);
  };

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-5 py-16 bg-white lg:px-20 lg:py-32 min-h-screen">
      <div className="flex flex-col w-full max-w-full lg:max-w-[1209px]">
        <h1 className="self-start text-4xl font-bold leading-none text-zinc-800 lg:text-6xl">
          HI, {username.toUpperCase()}!
        </h1>
        <ServiceGrid>
          {chatbots.map((bot) => (
            <div
              key={bot}
              onClick={() => handleSelectChatbot(bot)}
              className="cursor-pointer"
            >
              <ServiceCard name={bot} />
            </div>
          ))}
        </ServiceGrid>
      </div>
    </main>
  );
};

export default Home;
