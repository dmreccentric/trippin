import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import Belowpopup from "./Belowpopup";
import Reuseablebtn from "./Reuseablebtn";
import { useEffect, useState } from "react";
import Bookings from "../pages/Bookings";

const PopUp = ({ item, hotel, filteredHotel }) => {
  const [book, setBook] = useState(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  if (!hotel) {
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
            <Reuseablebtn onClick={() => setBook(true)} title={"book"} />
          </div>
        </div>
        {book && (
          <div className="">
            <Bookings items={item} onClose={() => setBook(null)} />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-[#e9e9e9] min-h-[90%] rounded-t-3xl z-40 shadow-lg transition-transform duration-300">
        <div className="relative">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-[14rem] rounded-t-3xl object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-23 bg-gradient-to-t from-white to-transparent" />
          <h6 className="capitalize absolute bottom-0 left-6 text-[20px] font-normal">
            {item.name}
          </h6>
        </div>

        <div className=" relative pt-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-white" />
          <div className="bg-white px-5 min-h-[8rem] rounded-b-3xl">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex gap-1 items-center text-gray-600 my-2">
                <GrLocation className="text-[18px]" />
                <span className="capitalize text-xs font-semibold">
                  {item.address}
                </span>
              </div>
              <div className="flex gap-1 mb-2 text-[11px]">
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
          <Belowpopup filteredHotel={filteredHotel} hotels items={item} />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[15%] bg-white rounded-t-3xl">
          <div className="flex mt-4 mx-5 items-center">
            <span className="text-2xl font-semibold w-full">
              ${Number(item.price).toLocaleString()}/
              <span className="text-base font-normal text-gray-500">Night</span>
            </span>
            <div className="w-full">
              <Reuseablebtn onClick={() => setBook(true)} title={"book Now"} />
            </div>
          </div>
        </div>
        {/* {book && (
          <div className="">
            <Bookings items={item} onClose={() => setBook(null)} />
          </div>
        )} */}
      </div>
    );
  }
};

export default PopUp;
