import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { RxEyeClosed } from "react-icons/rx";
import { LuEye } from "react-icons/lu";

const Inputs = ({ type, id, label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const leftIcon = type === "email" ? <FiMail /> : <FiLock />;
  const rightIcon = isPassword ? (
    showPassword ? (
      <LuEye />
    ) : (
      <RxEyeClosed />
    )
  ) : null;

  return (
    <div className="mb-5">
      <label htmlFor={id} className="block capitalize mb-1 font-medium">
        {label}
      </label>

      <div className="relative">
        {/* Left icon */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500">
          {leftIcon}
        </span>

        {/* Input field */}
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#dde8ff] placeholder-gray-500 focus:outline-none"
        />

        {/* Right eye emoji */}
        {isPassword && (
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Inputs;
