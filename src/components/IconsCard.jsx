import React from "react";
import Icons from "./Icons";
import { RiHome5Line } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";

const IconsCard = () => {
  return (
    <div className="flex justify-between pb-8 pt-2 px-11 w-screen">
      <Icons title={"Home"} icon={<RiHome5Line />} />
      <Icons title={"Explore"} icon={<FaRegCompass />} />
      <Icons title={"Bookings"} icon={<PiBookBookmarkDuotone />} />
      <Icons title={"Profile"} icon={<RiContactsLine />} />
    </div>
  );
};

export default IconsCard;
