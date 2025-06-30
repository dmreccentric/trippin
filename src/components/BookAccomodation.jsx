import React from "react";
import IconCtn from "../components/IconCtn";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import AvailCard from "./AvailCard";
import { hotel } from "../constants/data";
import { GrLocation } from "react-icons/gr";
import { RecBit } from "./RecBit";
import { useGlobalContext } from "./context/GlobalContext";
import PopUp from "./PopUp";

const BookAccomodation = ({
  items,
  getCode,
  getFlightDuration,
  formValue,
  onClose,
}) => {
  const filteredHotel = hotel.filter(
    (item) => item.location.toLowerCase() === formValue.to
  );
  const randomHotels = hotel
    .filter((item) => item.location.toLowerCase() === formValue.to)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const { setSelectedHotel, selectedHotel } = useGlobalContext();
  return (
    <div className="bg-[#e9e9e9] h-screen  ">
      <div className="flex justify-center relative py-2 mb-5 mx-5">
        <IconCtn
          onClick={onClose}
          icon={<MdOutlineKeyboardArrowLeft />}
          position
        />
        <h2 className="text-2xl">Book Accomodation</h2>
      </div>
      <div className="px-5">
        <h2 className="mb-2">Available flight</h2>
        <AvailCard
          flight={items}
          getCode={getCode}
          getFlightDuration={getFlightDuration}
          formValue={formValue}
        />
      </div>
      <div>
        <div className="flex justify-between items-center my-2 px-5">
          <p>Select Hotel(Recommended)</p>
          <div className="flex items-center bg-white rounded-lg py-1 px-2">
            <GrLocation className="text-[15px]" />
            <span>{formValue.to}</span>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide pl-5">
          <div className="flex gap-6 w-max">
            {filteredHotel.map((item, index) => (
              <RecBit key={index} hotel item={item} />
            ))}
          </div>
        </div>
        <div className="my-2 pl-5">
          <p className="pb-2">Others</p>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 w-max">
              {randomHotels.map((item, index) => (
                <RecBit key={index} hotel item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedHotel && (
        <>
          <div
            onClick={() => setSelectedHotel(null)}
            className="fixed inset-0 bg-[#18171759] z-40"
          />
          <PopUp
            hotel
            item={selectedHotel}
            onClose={() => setSelectedHotel(null)}
            filteredHotel={filteredHotel}
          />
        </>
      )}
    </div>
  );
};

export default BookAccomodation;
