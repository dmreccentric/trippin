import { Recommendation } from "../constants/data";
import { useState } from "react";
import PopUp from "./PopUp";

const Belowpopup = ({ items, show }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div>
      <div className="flex gap-5 mx-6 my-7 overflow-auto scrollbar-hide">
        {Recommendation.map((item, i) => (
          <div
            onClick={() => setSelectedItem(item)}
            key={i}
            className="min-w-20 h-20 "
          >
            <img
              src={item.img}
              alt={item.city}
              className={`w-full h-full rounded-2xl object-cover ${
                item.id === items.id ? "border-2 border-blue-500" : ""
              }`}
            />
          </div>
        ))}
        {selectedItem && (
          <>
            <PopUp item={selectedItem} />
          </>
        )}
      </div>
      <div>
        <div className="flex mx-6 gap-6">
          <div className="bg-white py-3 w-full rounded-2xl">
            <p className="mb-3 text-xs text-center">Temperature</p>
            <p className="mb-3 text-center text-[20px] text-blue-600">
              {items.temperature}°C
            </p>
          </div>
          <div className="bg-white py-3 w-full  rounded-2xl ">
            <p className="mb-3 text-xs text-center">Reviews</p>
            <p className="mb-3 text-center text-[20px] text-blue-600">
              {items.reviews}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belowpopup;
