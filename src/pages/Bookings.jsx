import React, { useState } from "react";
import Icons from "../components/Icons";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import IconCtn from "../components/IconCtn";
import TripForm from "../components/TripForm";
import Bluetext from "../components/Bluetext";
import { flight } from "../constants/data";

const Bookings = ({ onClose, items }) => {
  const [selectedTrip, setSelectedTrip] = useState("one-way");

  return (
    <div className="bg-[#e9e9e9] h-screen px-5">
      <div className="flex justify-center relative  py-2">
        <IconCtn
          //   link={"/home"}
          onClick={onClose}
          icon={<MdOutlineKeyboardArrowLeft />}
          position
        />
        <h2 className="text-2xl">Add Trip details</h2>
      </div>
      <div className="rounded-3xl bg-white">
        <div className="mx-5 my-2">
          <p className="pt-4 mb-2">Flight</p>
          <div className=" bg-gray-400 rounded-lg">
            <div className="flex h-[3rem] items-center">
              <h4
                onClick={() => setSelectedTrip("one-way")}
                className={`rounded-sm ml-2 py-2 w-full h-[80%]  text-center ${
                  selectedTrip === "one-way"
                    ? `bg-white text-black`
                    : "bg-gray-400 text-black"
                }`}
              >
                One-way
              </h4>
              <h4
                onClick={() => setSelectedTrip("round-trip")}
                className={`rounded-sm ml-2 py-2 w-full h-[80%]  text-center ${
                  selectedTrip === "round-trip"
                    ? `bg-white text-black`
                    : "bg-gray-400 text-black"
                }`}
              >
                Round trip
              </h4>
            </div>
          </div>
          {selectedTrip === "one-way" && (
            <div className="mt-3 pb-1">
              <TripForm data={items} />
            </div>
          )}
          {selectedTrip === "round-trip" && (
            <div>
              <h4>hello round trip</h4>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl">Available flight</h4>
          <Bluetext text={"See more"} />
        </div>
        <div>
          {flight.map((flight) => (
            <div key={flight.id} className="pl-4">
              <div className="flex justify-between ">
                <h3 className="text-red-500 capitalize">{flight.airline}</h3>
                <h6 className="text-green-600 border-1 rounded-sm  w-[4rem] h-4 pb-0.5 capitalize flex items-center justify-center text-xs tracking-7">
                  {flight.cheap ? `cheapest` : `normal`}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
