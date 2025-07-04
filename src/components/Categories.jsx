import React from "react";
import Cardheader from "./Cardheader";
import { categories } from "../constants/data";

const Categories = () => {
  return (
    <div className="mt-4 bg-[#e9e9e9]">
      <Cardheader text={"Categories"} />
      <div className="flex ml-5 gap-5 overflow-auto scrollbar-hide bg-[#e9e9e9] mt-1 pb-50">
        {categories.map((item, index) => (
          <div key={index} className="relative h-[18rem] min-w-[18rem]">
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
