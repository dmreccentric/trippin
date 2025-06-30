import { RecBit } from "./RecBit";
import { Recommendation } from "../constants/data";
import { useState } from "react";
import { useGlobalContext } from "./context/GlobalContext";
import Cardheader from "./Cardheader";
import PopUp from "./PopUp";

const Recommendations = ({
  search,
  widthFull,
  flex,
  text = "Search results",
  margin,
  filteredItems = [],
  mightLike,
}) => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const { selectedItem, setSelectedItem } = useGlobalContext();
  const fullWidth = widthFull ? "w-full" : "min-w-[18rem]";
  const useGrid = flex ? "flex flex-col" : "flex";
  const rightMargin = margin ? "ml-5 h-fit" : "h-80";
  return (
    <div className="mt-3">
      <Cardheader text={`${filteredItems?.length || 0} ${text}`} blueText />
      <div
        className={`${rightMargin} gap-5 overflow-auto scrollbar-hide ${useGrid}`}
      >
        {!search
          ? Recommendation.map((item, index) => (
              <RecBit
                setSelectedItem={setSelectedItem}
                item={item}
                index={index}
                fullWidth={fullWidth}
              />
            ))
          : filteredItems.map((item, index) => (
              <RecBit
                setSelectedItem={setSelectedItem}
                item={item}
                index={index}
                fullWidth={fullWidth}
              />
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
      <div className={`mt-3 ${useGrid}`}>
        {mightLike && filteredItems.length > 1 && (
          <>
            <Cardheader text={"You might also like"} blueText />
            <div>
              {Recommendation.map((item, index) => (
                <RecBit
                  setSelectedItem={setSelectedItem}
                  item={item}
                  index={index}
                  fullWidth={fullWidth}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
