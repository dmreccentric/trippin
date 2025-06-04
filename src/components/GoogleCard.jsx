import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleCard = () => {
  return (
    <div className="border-1 border-blue-600 flex rounded-[12px] py-3 justify-center gap-2 text-3xl items-center mt-[10px]">
      <FcGoogle />
      <p className="text-[17px]">Sign up with Google account</p>
    </div>
  );
};

export default GoogleCard;
