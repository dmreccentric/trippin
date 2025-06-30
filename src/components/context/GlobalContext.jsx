import React, { createContext, useContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const GlobalValue = {
    selectedItem,
    setSelectedItem,
    selectedHotel,
    setSelectedHotel,
  };
  return (
    <GlobalContext.Provider value={GlobalValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === null) {
    throw new Error("useGlobalContext must be used within a GlobalProvider ");
  }
  return context;
}

export default GlobalContextProvider;
