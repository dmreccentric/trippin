import React from "react";
import { Link } from "react-router-dom";

const Bluetext = ({ text, link, auto }) => {
  const marginAuto = auto ? `mt-11 text-end` : "text-center";
  return (
    <Link to={link}>
      <p className={`text-[#0554f2] ${marginAuto} `}>{text}</p>
    </Link>
  );
};

export default Bluetext;
