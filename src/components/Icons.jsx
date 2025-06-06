import React from "react";

const Icons = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center active:text-[#0554f2] space-y-2 text-5xl">
      {icon}
      <p className="text-[13px]">{title}</p>
    </div>
  );
};

export default Icons;
