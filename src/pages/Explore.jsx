import React from "react";
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";
import { list } from "../constants/data";

const Explore = () => {
  return (
    <div className="bg-[#e9e9e9] h-screen">
      <SearchBar
        lists
        change
        text={"Hello Kunle, explore different travel destinations on trippin'"}
      />
      <div className="mt-5">
        <Recommendations />
      </div>
    </div>
  );
};

export default Explore;
