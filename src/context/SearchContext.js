import React, { createContext, useState, useContext } from "react";

// Create the context
const SearchContext = createContext();

// Custom hook to use the context
export const useSearchContext = () => useContext(SearchContext);

// Context provider
export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    location: "",
    startDate: null,
    endDate: null,
    adults: 2,
    children: 0,
  });

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
