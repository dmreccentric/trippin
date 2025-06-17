import React, { useEffect, useState } from "react";
import IconsCard from "../components/IconsCard";
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";
import Categories from "../components/Categories";
import useFetch from "../hooks/useFetch";
const url = "https://youtube138.p.rapidapi.com/v2/trending";
// const url =
//   "https://vacations-details-your-ultimate-guide.p.rapidapi.com/api/countries";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "067acfe94amsh9fcb387bc73f939p1dcad4jsne9ab995c8025",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "067acfe94amsh9fcb387bc73f939p1dcad4jsne9ab995c8025",
//     "x-rapidapi-host": "vacations-details-your-ultimate-guide.p.rapidapi.com",
//   },
// };

const Home = () => {
  const { data } = useFetch(url, options);
  console.log(data);

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
