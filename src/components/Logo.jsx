import React from "react";

const Logo = ({ header, para }) => {
  return (
    <div className="mb-3.5">
      <img
        src="https://res.cloudinary.com/dzhhpr7f1/image/upload/v1748992655/IMG_2744_th2yxo.jpg"
        alt="logo"
        className="h-[5.5rem]"
      />
      <h3 className="font-bold capitalize text-[22px] mb-2">{header}</h3>
      <p className="text-[14px]">{para}</p>
    </div>
  );
};

export default Logo;
