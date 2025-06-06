import React from "react";
import IconsCard from "../components/IconsCard";
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="bg-[#e9e9e9] h-screen">
      <div className="pb-5 ">
        <SearchBar text={"Hello Kunle"} />
      </div>
      <Recommendations />
      <Categories />
      <div className="fixed bottom-0 bg-white left-0">
        <IconsCard />
      </div>
    </div>
  );
};

export default Home;
