import React from "react";
import Bluetext from "./Bluetext";

const Cardheader = ({ text, noView, link, blueText }) => {
  if (noView) {
    return (
      <div className="flex justify-between mx-5">
        <p className="font-semibold text-2xl">{text}</p>
      </div>
    );
  } else
    return (
      <div className="flex justify-between mx-5">
        <p className="font-semibold text-[20px]">{text}</p>
        <Bluetext small link={link} text={blueText ? "" : "View More"} />
      </div>
    );
};

export default Cardheader;
