import React from "react";
import { TbBell } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ text }) => {
  return (
    <div className="mx-5 pt-3">
      <div className="flex justify-between text-[1.5rem] items-center font-semibold ">
        <h2>{text}</h2>
        <TbBell />
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
