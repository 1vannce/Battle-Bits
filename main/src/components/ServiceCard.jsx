import React from "react";

const ServiceCard = ({ name }) => {
  const getLogoImage = (botName) => {
    const imageMap = {
      ENERGO: "/images/ENERGO.png",
      SUSTAINA: "/assets/sustaina.png",
      GASTRO: "/assets/gastro.png",
      COMMUTO: "/assets/commuto.png",
      AQUEO: "/assets/aqueo.png",
      CARBONIS: "/assets/carbonis.png",
      RECYLO: "/assets/recylo.png",
      ECOFIN: "/assets/ecofin.png",
    };
    return imageMap[botName] || "/assets/default.png";
  };

  return (
    <article className="flex flex-col justify-center items-center p-8 w-full text-base font-medium text-black bg-transparent rounded-lg border border-zinc-300 hover:bg-gray-50 hover:scale-95 transition duration-300 ease-in-out cursor-pointer">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <img
          src={getLogoImage(name)}
          alt={`${name} logo`}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-4 text-center text-lg font-semibold">{name}</h2>
    </article>
  );
};

export default ServiceCard;
