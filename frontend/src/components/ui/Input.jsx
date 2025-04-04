import React from "react";

const Input = ({ type, label, placeholder, value, id, required }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-normal mb-2">
        {label}
        {required === "true" ? (
          <span className="text-red-500 ml-2">*</span>
        ) : (
          ""
        )}
      </label>
      <input
        type={type}
        id={id}
        className="py-3 px-4 block w-100 border-2 border-gray-300 rounded-lg text-base text-stone-900 placeholder-neutral-500 focus:border-1 focus:border-blue-400 focus:outline focus:outline-blue-400"
        placeholder={placeholder}
        value={value}
        required={required}
      ></input>
    </div>
  );
};

export default Input;
