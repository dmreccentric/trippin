import React from "react";
import Cardheader from "./Cardheader";
import { categories } from "../constants/data";

const Categories = () => {
  return (
    <div className="mt-7">
      <Cardheader text={"Categories"} />
      <div className="flex ml-5 gap-7 overflow-auto scrollbar-hide mt-2">
        {categories.map((item, index) => (
          <div key={index} className="relative h-[23rem] min-w-[24rem]">
            <img
              src={item.img}
              alt={item.name}
              className="object-cover w-full h-full rounded-2xl"
            />
            <p className="absolute bottom-13 left-6 z-10 text-white font-normal text-2xl capitalize">
              {item.name}
            </p>

            <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[#0d0d0ef6] to-transparent rounded-b-2xl " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
