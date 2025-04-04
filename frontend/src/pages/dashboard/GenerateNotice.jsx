import React from "react";
import Sidebar from '../../components/Sidebar'

const GenerateNotice = () => {
  return (
    <div className="flex flex-row">
      <Sidebar page="generate-notice" />
      <div className=" w-[80%] pt-[5em]">
        <p>Cuet Data</p>
      </div>
    </div>
  );
};

export default GenerateNotice;
