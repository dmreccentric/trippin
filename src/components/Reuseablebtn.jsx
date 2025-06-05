import React from "react";

const Reuseablebtn = ({ title, bg, type, width, onClick }) => {
  const bgColor = bg ? "bg-[#dde8ff]" : "bg-[#0554f2]";
  const btnWidth = width ? "w-fit px-6" : "w-full";
  return (
    <button
      onClick={onClick}
      type={type}
      className={`capitalize ${btnWidth} ${bgColor} rounded-[12px] py-2 font-medium text-white text-[25px]`}
    >
      {title}
    </button>
  );
};

export default Reuseablebtn;
