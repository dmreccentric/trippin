import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import Belowpopup from "./Belowpopup";
import Reuseablebtn from "./Reuseablebtn";
import { useEffect } from "react";

const PopUp = ({ item }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#e9e9e9] min-h-[90%] rounded-t-3xl z-40 shadow-lg transition-transform duration-300">
      <div className="relative">
        <img
          src={item.img}
          alt={item.city}
          className="w-full h-[14rem] rounded-t-3xl object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-23 bg-gradient-to-t from-white to-transparent" />
        <h6 className="capitalize absolute bottom-1.5 left-4 text-[20px] font-semibold">
          {item.city}
        </h6>
      </div>

      <div className=" relative pt-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-white" />
        <div className="bg-white px-4 min-h-[8rem] rounded-b-3xl">
          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center text-gray-600 my-2">
              <GrLocation className="text-[18px]" />
              <span className="capitalize">{item.country}</span>
            </div>
            <div className="flex gap-1 mb-2 text-[9px]">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < item.stars ? "text-amber-400" : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-700">{item.about}</p>
        </div>
        <Belowpopup items={item} />
        <div className="mt-8 px-5">
          <Reuseablebtn title={"book"} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
