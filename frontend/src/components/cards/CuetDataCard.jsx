import React from "react";

const CuetDataCard = ({ data, text }) => {
  return (
    <>
      <div className="px-5 py-5 flex flex-col justify-center items-center rounded-md tracking-wider bg-linear-to-r from-cyan-600 to-blue-700 shadow-2xl drop-shadow-lg">
        <p className="text-3xl font-semibold mb-3 text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.5)]">
          {data.length}
        </p>
        <p className="text-stone-200 text-sm ">{text}</p>
      </div>
    </>
  );
};

export default CuetDataCard;
