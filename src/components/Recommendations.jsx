import React from "react";
import { Recommendation } from "../constants/data";

import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import Cardheader from "./Cardheader";

const Recommendations = () => {
  return (
    <div>
      <Cardheader text={"Recommendation"} linkText={"View more"} />
      <div className="flex ml-5 gap-7 overflow-auto scrollbar-hide">
        {Recommendation.map((item, index) => (
          <div
            key={index}
            className="h-[23rem] min-w-[24rem] bg-white mt-3  rounded-2xl "
          >
            <div className="relative w-full">
              <img
                src={item.img}
                alt={item.city}
                className="w-full h-[13rem] rounded-t-2xl object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-23 bg-gradient-to-t from-white to-transparent" />
              <h6 className="capitalize absolute bottom-1.5 left-4 text-[20px] font-normal">
                {item.city}
              </h6>
            </div>

            <div className=" bg-white h-40 rounded-b-2xl mx-4 text-[15px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1 items-center">
                  <GrLocation />
                  <h6 className="capitalize">{item.country}</h6>
                </div>

                <div className="flex gap-1 text-[12px]">
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
