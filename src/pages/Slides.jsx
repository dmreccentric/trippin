import React, { useState } from "react";
import { data } from "../constants/data";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Reuseablebtn from "../components/Reuseablebtn";
import Bluetext from "../components/Bluetext";

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // FIXED

  const handleNext = () => {
    if (currentIndex === data.length - 1) {
      navigate("/home");
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const item = data[currentIndex];

  return (
    <div>
      <div className="h-[40rem] w-screen">
        <img src={item.img} alt={item.title} className="w-full h-full" />
      </div>
      <div className="mt-14 mx-5">
        <h2 className="font-semibold text-[24px]">{item.title}</h2>
        <p className="text-[15px] mt-2 leading-tight text-gray-400">
          {item.description}
        </p>
        <div className="flex gap-3 mt-16">
          {currentIndex !== 0 && (
            <Reuseablebtn
              bg
              width
              title={<GoArrowLeft className="text-[#0554f2]" />}
              onClick={handlePrev}
            />
          )}
          <Reuseablebtn title={"next"} onClick={handleNext} />
        </div>
        <Bluetext text={"Skip"} link={"/home"} auto />
      </div>
    </div>
  );
};

export default Slides;
