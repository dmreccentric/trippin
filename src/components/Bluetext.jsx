import React from "react";
import { Link } from "react-router-dom";

const Bluetext = ({ text, link }) => {
  return (
    <Link to={link}>
      <p className="text-[#0554f2] text-center">{text}</p>
    </Link>
  );
};

export default Bluetext;
