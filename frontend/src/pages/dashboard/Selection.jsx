import React from "react";
import Sidebar from "../../components/Sidebar";
import sendSelectionEmail from "../../utils/sendSelectionEmail";

const Selection = () => {
  return (
    <div className="flex flex-row">
      <Sidebar page="selection" />
      <div className=" w-[80%] pt-[5em] ml-[20%]">
        <p>Selection</p>
        <button
          className="bg-amber-300 px-6 py-2 cursor-pointer"
          onClick={sendSelectionEmail}
        >
          Onclick
        </button>
      </div>
    </div>
  );
};

export default Selection;
