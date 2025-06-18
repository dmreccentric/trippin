import React, { useState } from "react";
import { flight, Recommendation } from "../constants/data";
import IconCtn from "./IconCtn";
import { VscLocation } from "react-icons/vsc";
import Reuseablebtn from "./Reuseablebtn";
import { uniqBy } from "lodash";

const TripForm = ({ data }) => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  if (!data) return null;

  const uniqueItems = uniqBy(flight, "from");
  return (
    <form>
      <div className="flex flex-col">
        <label htmlFor="takeoff">From</label>
        <div className="relative w-full">
          <select
            name="takeof"
            id="takeoff"
            defaultValue=""
            className="bg-gray-200 py-4 rounded-lg text-sm w-full pl-8"
          >
            <option value="" disabled>
              Select place of departure
            </option>
            {uniqueItems.map((item) => (
              <option key={item.id} value={item.from}>
                {item.from}
              </option>
            ))}
          </select>
          <IconCtn dark position icon={<VscLocation />} />
        </div>
      </div>

      <div className="flex flex-col mt-1">
        <label htmlFor="destination">To</label>
        <div className="relative w-full">
          <select
            name="destination"
            id="destination"
            defaultValue={data.city}
            className="bg-gray-200 py-4 pl-8 rounded-lg text-sm w-full capitalize"
          >
            {Recommendation.map((item) => (
              <option
                key={item.id}
                value={item.city}
                className="capitalize text-xs w-[4rem]"
              >
                {item.city}
              </option>
            ))}
          </select>
          <IconCtn dark position icon={<VscLocation />} />
        </div>
      </div>
      <div className="flex gap-5 mt-1">
        <div className="flex flex-col w-full">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-200 py-4 px-5  rounded-lg text-sm w-full uppercase"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="passenger">Passenger</label>
          <select
            name="passenger"
            id="passenger"
            className="bg-gray-200 py-4 px-5 rounded-lg text-sm w-full capitalize"
          >
            {[...Array(3)].map((_, i) => (
              // console.log(i);

              <option key={i} value={`${i + 1} Adult`}>
                {i + 1} Adult{i + 1 > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 mb-3 px-5">
        <Reuseablebtn type={"submit"} title={"search flight"} />
      </div>
    </form>
  );
};

export default TripForm;
