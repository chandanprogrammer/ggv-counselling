import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, navigate }) => {
  return (
    <>
      <Link
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition delay-150"
        to={navigate}
      >
        {text}
      </Link>
    </>
  );
};

export default Button;
