import React from "react";
import { Link } from "react-router-dom";

const IconCtn = ({ icon, size, stuff, link, dark, position, onClick }) => {
  const textSizeClass = size ? `text-[13px] bg-white` : "text-2xl w-9 h-9";
  const bgcolor = stuff ? `bg-[#f7f7f7] ` : "";
  const bgcolor2 = dark ? `bg-none ` : "bg-gray-300";
  const positionx = position ? `absolute top-1.5 left-0` : "";

  if (link)
    return (
      <Link to={link}>
        <div
          onClick={onClick}
          className={`w-8 h-8 font-medium rounded-full  ${textSizeClass} ${bgcolor} ${bgcolor2} flex justify-center items-center ${positionx}
          
          
          `}
        >
          {icon}
        </div>
      </Link>
    );
  else
    return (
      <div
        onClick={onClick}
        className={`w-8 h-8 font-medium rounded-full  ${textSizeClass} ${bgcolor} ${bgcolor2} flex justify-center items-center ${positionx}
          
          
          `}
      >
        {icon}
      </div>
    );
};

export default IconCtn;
