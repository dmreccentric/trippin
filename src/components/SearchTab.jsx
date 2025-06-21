// components/SearchTab.jsx
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import IconCtn from "../components/IconCtn";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsFunnel } from "react-icons/bs";
import Recommendations from "./Recommendations";
import { Recommendation } from "../constants/data";

const SearchTab = ({ onClose }) => {
  const [searchData, setSearchData] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const searchSubmit = (e) => {
    const searchResult = Recommendation.filter((item) => {
      const query = e.target.value.toLowerCase();
      return (
        item.city.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query)
      );
    });
    setSearchData(e.target.value);
    setFilteredItems(searchResult);
  };
  return (
    <div className="fixed z-50 inset-0 bg-[#e9e9e9]  flex flex-col">
      <div className="flex pl-3 items-center shrink-0 pb-3 shadow-2xl">
        <div className="pt-4">
          <IconCtn onClick={onClose} icon={<MdOutlineKeyboardArrowLeft />} />
        </div>
        <div className="relative mt-4 mx-5">
          <input
            type="search"
            placeholder="Search"
            name="search"
            value={searchData}
            onChange={searchSubmit}
            className="px-14 py-4 bg-white rounded-2xl w-full"
          />
          <div className="absolute top-4 left-3 text-2xl">
            <CiSearch />
          </div>
        </div>
        <BsFunnel className="text-3xl" />
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide px-5">
        <Recommendations
          text={"Search Result"}
          filteredItems={filteredItems}
          search
          flex
          widthFull
          mightLike
        />
      </div>
    </div>
  );
};

export default SearchTab;
