import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { useGlobalContext } from "./context/GlobalContext";
export function RecBit({ setSelectedItem, item, fullWidth, hotel }) {
  const { setSelectedHotel } = useGlobalContext();
  if (!hotel) {
    return (
      <div
        onClick={() => setSelectedItem(item)}
        className={` ${fullWidth} h-[17rem]  bg-white mt-1  rounded-2xl hover:cursor-pointer`}
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

        <div className=" bg-white h-35 rounded-b-2xl mx-4 text-[12px] font-normal  text-gray-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-1 items-center">
              <GrLocation className="text-[15px]" />
              <h6 className="capitalize">{item.country}</h6>
            </div>

            <div className="flex gap-1 text-xs">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < item.stars ? "text-amber-400" : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
          <p>{item.about.split(".")[0].trim() + "."}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => setSelectedHotel(item)}
        className={` ${fullWidth} h-fit  bg-white mt-1  rounded-2xl hover:cursor-pointer w-[17.5rem]`}
      >
        <div className="relative w-full">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-[9rem] rounded-t-2xl object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-23 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className=" bg-white h-fit rounded-b-2xl mx-4 text-[12px] font-normal  text-gray-700 pb-4">
          <div className="flex items-center gap-4 mb-0 justify-between">
            <h6 className="capitalize text-[16px] font-normal">{item.name}</h6>

            <div className="flex gap-1 text-[10px]">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < item.stars ? "text-amber-400" : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex gap-1 items-center mb-1.5">
            <GrLocation className="text-[15px]" />
            <h6 className="capitalize text-sm">{item.location}</h6>
          </div>
          <span className="text-lg text-blue-600 tracking-wider">
            ${Number(item.price).toLocaleString()}/Night
          </span>
        </div>
      </div>
    );
  }
}
