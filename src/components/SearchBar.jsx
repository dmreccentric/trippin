import React from "react";
import { TbBell } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { list } from "../constants/data";

const SearchBar = ({ text, change, iconSize, lists }) => {
  const someChanges = change ? `text-[1.1rem]` : "";
  if (list) {
    return (
      <div className=" pt-3">
        <div
          className={`flex justify-between text-[1.5rem] items-center font-semibold mx-5`}
        >
          <h2 className={`${someChanges}`}>{text}</h2>
          <TbBell className={iconSize ? "text-3xl" : ""} />
        </div>
        <div className="relative mt-4 mx-5">
          <input
            type="search"
            placeholder="What's your destination"
            className="px-14 py-4 bg-white rounded-2xl w-full"
          />
          <div className="absolute top-4 left-3 text-3xl">
            <CiSearch />
          </div>
        </div>
        <div className="flex overflow-auto scrollbar-hide gap-4 mt-4 ml-4">
          {list.map((items, i) => (
            <div
              key={i}
              className="px-5 py-3 bg-white w-fit rounded-2xl capitalize whitespace-nowrap"
            >
              {items}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-5 pt-3">
        <div
          className={`flex justify-between text-[1.5rem] items-center font-semibold`}
        >
          <h2 className={`${someChanges}`}>{text}</h2>
          <TbBell className={iconSize ? "text-3xl" : ""} />
        </div>
        <div className="relative mt-4">
          <input
            type="search"
            placeholder="What's your destination"
            className="px-14 py-4 bg-white rounded-2xl w-full"
          />
          <div className="absolute top-4 left-3 text-3xl">
            <CiSearch />
          </div>
        </div>
      </div>
    );
  }
};

export default SearchBar;
