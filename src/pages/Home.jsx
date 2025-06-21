import React, { useEffect, useState } from "react";
import IconsCard from "../components/IconsCard";
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";
import Categories from "../components/Categories";
import SearchTab from "../components/SearchTab";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#e9e9e9] h-screen">
      <div className="pb-5 ">
        <SearchBar toggle={() => setShowModal(true)} text={"Hello Kunle"} />
      </div>
      <Recommendations text="Recomendation" margin />
      <Categories />
      <div className="fixed bottom-0 bg-white left-0">
        <IconsCard />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <SearchTab onClose={() => setShowModal(false)} />{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
