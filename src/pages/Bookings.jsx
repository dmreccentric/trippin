import { Available } from "../components/Available";
import BookAccomodation from "../components/BookAccomodation";
import React, { useState } from "react";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import IconCtn from "../components/IconCtn";
import TripForm from "../components/TripForm";

import { flight } from "../constants/data";

import { parse, format } from "date-fns";

const Bookings = ({ onClose, items }) => {
  const [selectedTrip, setSelectedTrip] = useState("one-way");
  const timeStringToDate = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    const now = new Date();
    now.setHours(hours, minutes, 0, 0);
    return now;
  };

  const getFlightDuration = (startStr, endStr) => {
    const start = timeStringToDate(startStr);
    const end = timeStringToDate(endStr);
    if (end < start) end.setDate(end.getDate() + 1);

    const diffMs = end - start;
    const diffMins = Math.floor(diffMs / 1000 / 60);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;
    return `${hours}h ${minutes}m`;
  };
  const today = new Date().toISOString().split("T")[0];
  const [formValue, setFormValue] = useState({
    from: "",
    to: "bankok",
    date: today,
    passenger: "",
  });

  const [filteredFlight, setFilteredFlight] = useState(() =>
    flight.filter((item) => {
      const formattedItemDate = format(
        parse(item.date, "dd MMMM yyyy", new Date()),
        "yyyy-MM-dd"
      );
      return formattedItemDate === today;
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const results = flight.filter((item) => {
      const fromMatch =
        item.from.toLowerCase() === formValue.from.toLowerCase();
      const toMatch = item.to.toLowerCase() === formValue.to.toLowerCase();

      const formattedItemDate = format(
        parse(item.date, "dd MMMM yyyy", new Date()),
        "yyyy-MM-dd"
      );
      const formattedFormDate = formValue.date;

      const dateMatch = formattedItemDate === formattedFormDate;

      return fromMatch && toMatch && dateMatch;
    });
    // setFormValue(e.target.value);
    setFilteredFlight(results);
    // console.log("handle submit", formValue);
    // console.log("filtered flight", results);
  };
  const airportCodes = {
    abuja: "ABK",
    lagos: "LGV",
    bankok: "BGK",
    panama: "PNM",
    bali: "BAL",
    tokyo: "TKY",
  };

  const getCode = (city) => airportCodes[city.toLowerCase()] || "UNK";
  const [selectedFlight, setSelectedFlight] = useState(null);
  return (
    <div className="bg-[#e9e9e9] h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-center relative py-2">
        <IconCtn
          onClick={onClose}
          icon={<MdOutlineKeyboardArrowLeft />}
          position
        />
        <h2 className="text-2xl">Add Trip details</h2>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 pb-6">
        <div className="rounded-3xl bg-white mb-4">
          <div className="mx-5 my-2">
            <p className="pt-4 mb-2">Flight</p>
            <div className="bg-gray-400 rounded-lg">
              <div className="flex h-[3rem] items-center">
                <h4
                  onClick={() => setSelectedTrip("one-way")}
                  className={`rounded-sm ml-2 py-2 w-full h-[80%] text-center ${
                    selectedTrip === "one-way"
                      ? "bg-white text-black"
                      : "bg-gray-400 text-black"
                  }`}
                >
                  One-way
                </h4>
                <h4
                  onClick={() => setSelectedTrip("round-trip")}
                  className={`rounded-sm ml-2 py-2 w-full h-[80%] text-center ${
                    selectedTrip === "round-trip"
                      ? "bg-white text-black"
                      : "bg-gray-400 text-black"
                  }`}
                >
                  Round trip
                </h4>
              </div>
            </div>
            {selectedTrip === "one-way" && (
              <div className="mt-3 pb-1">
                <TripForm
                  formValue={formValue}
                  setFormValue={setFormValue}
                  onSubmit={handleSubmit}
                  data={items}
                />
              </div>
            )}
            {selectedTrip === "round-trip" && <h4>hello round trip</h4>}
          </div>
        </div>

        {selectedTrip === "one-way" && (
          <Available
            setSelectedFlight={setSelectedFlight}
            flight={flight}
            getCode={getCode}
            parseInt={parseInt}
            getFlightDuration={getFlightDuration}
            filteredFlight={filteredFlight}
            formValue={formValue}
          />
        )}
      </div>

      {selectedFlight && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <BookAccomodation
            items={selectedFlight}
            onClose={() => setSelectedFlight(null)}
            getCode={getCode}
            getFlightDuration={getFlightDuration}
            formValue={formValue}
          />
        </div>
      )}
    </div>
  );
};

export default Bookings;
