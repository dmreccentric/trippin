import React from "react";
import { TbBell } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ text, change, iconSize }) => {
  const someChanges = change ? `text-[1.1rem]` : "";
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
};

export default SearchBar;
