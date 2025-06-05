import React from "react";

const Icons = ({ icon, title }) => {
  return (
    <div className="flex flex-col active:text-[#0554f2]">
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Icons;
