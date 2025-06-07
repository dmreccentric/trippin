import { Recommendation } from "../constants/data";
import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import Cardheader from "./Cardheader";
import PopUp from "./PopUp";

const Recommendations = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <Cardheader text={"Recommendation"} linkText={"View more"} />
      <div className="flex ml-5 gap-5 overflow-auto scrollbar-hide">
        {Recommendation.map((item, index) => (
          <div
            onClick={() => setSelectedItem(item)}
            key={index}
            className="h-[17rem] min-w-[18rem] bg-white mt-1  rounded-2xl "
          >
            <div className="relative w-full">
              <img
                src={item.img}
                alt={item.city}
                className="w-full h-[8rem] rounded-t-2xl object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-23 bg-gradient-to-t from-white to-transparent" />
              <h6 className="capitalize absolute bottom-1.5 left-4 text-[20px] font-normal">
                {item.city}
              </h6>
            </div>

            <div className=" bg-white h-35 rounded-b-2xl mx-4 text-[12px] font-normal  text-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1 items-center">
                  <GrLocation className="text-[15px]" />
                  <h6 className="capitalize">{item.country}</h6>
                </div>

                <div className="flex gap-1 text-xs">
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
              <p>{item.about.split(".")[0].trim() + "."}</p>
            </div>
          </div>
        ))}

        {selectedItem && (
          <>
            <div
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-[#18171759] z-40"
            />
            <PopUp item={selectedItem} onClose={() => setSelectedItem(null)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
