import React from "react";
import IconCtn from "../components/IconCtn";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import AvailCard from "./AvailCard";

const BookAccomodation = ({
  items,
  getCode,
  getFlightDuration,
  formValue,
  onClose,
}) => {
  // console.log(item);

  return (
    <div>
      <div className="flex justify-center relative py-2">
        <IconCtn
          onClick={onClose}
          icon={<MdOutlineKeyboardArrowLeft />}
          position
        />
        <h2 className="text-2xl">Add Trip details</h2>
      </div>
      <div>
        <h2>Available flight</h2>
        <AvailCard
          flight={items}
          getCode={getCode}
          getFlightDuration={getFlightDuration}
          formValue={formValue}
        />
      </div>
    </div>
  );
};

export default BookAccomodation;
