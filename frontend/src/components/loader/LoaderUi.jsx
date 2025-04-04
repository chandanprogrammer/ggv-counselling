import { Loader } from "lucide-react";
import React from "react";

const LoaderUi = () => {
  return (
    <div className="fixed w-[80%] h-[70%] flex justify-center items-center ">
      <span className="absolute animate-[spin_3s_linear_infinite] ">
        {" "}
        <Loader size={60} className="text-stone-700" />{" "}
      </span>
    </div>
  );
};

export default LoaderUi;
