import React from "react";
import Bluetext from "./Bluetext";

const Cardheader = ({ text, view, link }) => {
  if (view) {
    return (
      <div className="flex justify-between mx-5">
        <p className="font-semibold text-2xl">{text}</p>
      </div>
    );
  } else
    return (
      <div className="flex justify-between mx-5">
        <p className="font-semibold text-2xl">{text}</p>
        <Bluetext link={link} text={"View more"} />
      </div>
    );
};

export default Cardheader;
