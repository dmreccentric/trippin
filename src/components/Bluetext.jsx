import React from "react";
import { Link } from "react-router-dom";

const Bluetext = ({ text, link, auto, small }) => {
  const marginAuto = auto ? `mt-13 text-end` : "text-center";
  const smallText = small ? `text-[14px]` : null;
  return (
    <Link to={link}>
      <p className={`text-[#0554f2] ${marginAuto} ${smallText} `}>{text}</p>
    </Link>
  );
};

export default Bluetext;
