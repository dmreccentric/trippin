import React from "react";
import Bluetext from "./Bluetext";
import { FaAngleRight } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
export function Available({
  filteredFlight,
  getCode,
  parseInt,
  getFlightDuration,
  formValue,
  setSelectedFlight,
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="text-xl">Available flight</h4>
        <Bluetext text={"See more"} />
      </div>
      <div className="space-y-5 mt-4 overflow-y-auto">
        {filteredFlight.length > 0 ? (
          filteredFlight.map((flight) => (
            <div
              key={flight.id}
              className="pl-4 pr-4 bg-white rounded-2xl relative"
              onClick={() => setSelectedFlight(flight)}
            >
              <div className="flex justify-between items-center pt-2">
                <h3 className="text-red-500 capitalize text-2xl">
                  {flight.airline}
                </h3>
                <h6 className="text-green-600 border-1 rounded-sm  w-[4rem] h-4 pb-0.5 capitalize flex items-center justify-center text-xs ">
                  {flight.cheap ? `cheapest` : `normal`}
                </h6>
              </div>
              <div className="flex justify-between mt-[3rem] text-gray-400">
                <div className="text-[11.5px] capitalize space-y-0">
                  <p className=" tracking-widest">{flight.from}</p>
                  <h6 className="font-bold text-[21px] text-black">
                    {getCode(flight.from)}
                  </h6>
                  <p>
                    {flight.date}, {flight.departureTime}
                    {parseInt(flight.departureTime.split(":")[0], 10) >= 12
                      ? "pm"
                      : "am"}
                  </p>
                </div>
                <div className="text-[11.5px] capitalize space-y-0 text-gray-400 flex flex-col items-end ">
                  <p className=" tracking-widest">{flight.to}</p>
                  <h6 className="font-bold text-[21px] text-black">
                    {getCode(flight.to)}
                  </h6>
                  <p>
                    {flight.date}, {flight.arivalTime}
                    {parseInt(flight.arivalTime.split(":")[0], 10) >= 12
                      ? "pm"
                      : "am"}
                  </p>
                </div>
              </div>
              <hr className="border-0 border-t border-dotted border-gray-600 my-4" />
              <div className="flex justify-between pb-2">
                <p>
                  {flight.cheap ? "Economy " : "Business class"} •{" "}
                  {formValue.passenger}{" "}
                  {formValue.passenger.includes("1") ? "Seat" : "Seats"}
                </p>
                <p>${flight.price}</p>
              </div>
              <div className="text-blue-700 flex text-3xl items-center gap-7 absolute top-[35%] left-[35%]">
                <FaAngleRight />
                <div className="flex flex-col items-center">
                  <IoAirplane className="text-4xl" />
                  <p className="text-sm">
                    {getFlightDuration(flight.departureTime, flight.arivalTime)}
                  </p>
                </div>

                <FaAngleRight />
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-2xl">No flights match your search</h2>
        )}
      </div>
    </div>
  );
}
