import React from "react";

const SelectsCard = ({ bg, text }) => {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
        <p className="absolute text-white left-4 bottom-4 text-xl font-bold">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
