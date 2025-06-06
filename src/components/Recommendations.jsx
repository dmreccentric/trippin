import React from "react";
import { Recommendation } from "../constants/data";

import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import Cardheader from "./Cardheader";

const Recommendations = () => {
  return (
    <div>
      <Cardheader text={"Recommendation"} linkText={"View more"} />
      <div className="flex ml-5 gap-5 overflow-auto scrollbar-hide">
        {Recommendation.map((item, index) => (
          <div
            key={index}
            className="h-[17rem] min-w-[18rem] bg-white mt-3  rounded-2xl "
          >
            <div className="relative w-full">
              <img
                src={item.img}
                alt={item.city}
                className="w-full h-[8rem] rounded-t-2xl object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-23 bg-gradient-to-t from-white to-transparent" />
              <h6 className="capitalize absolute bottom-1.5 left-4 text-[20px] font-normal">
                {item.city}
              </h6>
            </div>

            <div className=" bg-white h-35 rounded-b-2xl mx-4 text-[12px] font-normal font-extralight text-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1 items-center">
                  <GrLocation className="text-[15px]" />
                  <h6 className="capitalize">{item.country}</h6>
                </div>

                <div className="flex gap-1 text-[10px] ">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-gray-400" />
                </div>
              </div>
              <p>{item.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
