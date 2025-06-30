import { Recommendation } from "../constants/data";
import { useState } from "react";
import PopUp from "./PopUp";
import { useGlobalContext } from "./context/GlobalContext";
import { CiWifiOff } from "react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { IoSnowOutline } from "react-icons/io5";
import { MdOutlineBed } from "react-icons/md";
import { BsCupHot } from "react-icons/bs";

const Belowpopup = ({ items, hotels, filteredHotel }) => {
  // const location = formValue?.to?.toLowerCase() || "";
  // const filteredHotel = hotel.filter(
  //   (item) => item.location.toLowerCase() === location
  // );

  const [selectedItem, setSelectedItem] = useState(null);
  const { setSelectedHotel } = useGlobalContext();
  if (!hotels) {
    return (
      <div>
        <div className="flex gap-9 mx-6 my-6 overflow-auto scrollbar-hide">
          {Recommendation.map((item, i) => (
            <div
              onClick={() => setSelectedItem(item)}
              key={i}
              className="w-16 h-16"
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
            <div className="bg-white pt-3 w-full rounded-2xl">
              <p className="mb-1 text-xs text-center">Temperature</p>
              <p className=" text-center text-[20px] text-blue-600">
                {items.temperature}°C
              </p>
            </div>
            <div className="bg-white py-3 w-full  rounded-2xl ">
              <p className="mb-1 text-xs text-center">Reviews</p>
              <p className=" text-center text-[20px] text-blue-600">
                {items.reviews}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex gap-7 mx-6 my-6 overflow-auto scrollbar-hide">
          {filteredHotel.map((item, i) => (
            <div
              onClick={() => setSelectedHotel(item)}
              key={i}
              className="w-18 h-18"
            >
              <img
                src={item.img}
                alt={item.name}
                className={`w-full h-full rounded-2xl object-cover ${
                  item.id === items.id ? "border-2 border-blue-500" : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex mx-6 gap-6">
            <div className="bg-white pt-3 w-full rounded-lg flex flex-col justify-center items-center">
              <p className="mb-1 text-sm text-center">Wi-Fi</p>
              <p className=" text-center text-[30px] pb-2 text-blue-600">
                {items.wifi ? <CiWifiOn /> : <CiWifiOff />}
              </p>
            </div>
            <div className="bg-white pt-3 w-full rounded-lg flex flex-col justify-center items-center">
              <p className="mb-1 text-sm text-center">A/C</p>
              <p className=" text-center text-[30px] pb-2 text-blue-600">
                <IoSnowOutline />
              </p>
            </div>
            <div className="bg-white pt-3 w-full rounded-lg flex flex-col justify-center items-center">
              <p className="mb-1 text-sm text-center">
                {items.beds} Bed{items.beds > 1 ? "s" : ""}
              </p>

              <p className=" text-center text-[30px] pb-2 text-blue-600">
                <MdOutlineBed />
              </p>
            </div>

            <div className="bg-white pt-3 w-full rounded-lg flex flex-col justify-center items-center">
              <p className="mb-1 text-sm text-center">Temperature</p>
              <p className=" text-center text-[30px] pb-2 text-blue-600">
                <BsCupHot />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Belowpopup;
