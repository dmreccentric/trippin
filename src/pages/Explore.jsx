import React from "react";
import SearchBar from "../components/SearchBar";

const Explore = () => {
  return (
    <div className="bg-[#e9e9e9] h-screen">
      <SearchBar
        change
        text={"Hello Kunle, explore different travel destinations on trippin'"}
      />
    </div>
  );
};

export default Explore;
