import React from "react";

const InfoCard = ({ info }) => {
  const { name, id, description, img, bgColor } = info;
  return (
      <div
        className={`py-8 px-5 items-center justify-center mx-6 lg:mx-0 rounded-lg flex ${bgColor}`}
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div className="ml-3 text-white text-justify">
          <h2 className="font-semibold text-xl">{name}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
  );
};

export default InfoCard;
