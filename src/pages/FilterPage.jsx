import React, { useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import FilterComponent from "../components/FilterComponent";
import placeholderData from "../data/placeholderData";

const FilterPage = () => {
  const { searchData, setSearchData } = useSearchContext();
  const [filteredData, setFilteredData] = useState(placeholderData);

  const handleFilter = () => {
    const { location, startDate, endDate, adults, children, infants, pets } = searchData;

    const filtered = placeholderData.filter((item) => {
      const totalGuests = adults + children + (infants || 0);

      const locationMatch = location
        ? item.title.toLowerCase().includes(location.toLowerCase())
        : true;

      const dateMatch =
        (!startDate || new Date(startDate) >= new Date(item.availableFrom)) &&
        (!endDate || new Date(endDate) <= new Date(item.availableTo));

      const guestsMatch = totalGuests <= item.maxGuests;
      const petsMatch = pets === 0 || item.petsAllowed;

      return locationMatch && dateMatch && guestsMatch && petsMatch;
    });

    setFilteredData(filtered);
  };

  return (
    <>
      <div className="filter-container">
        <FilterComponent
          searchData={searchData}
          setSearchData={setSearchData}
          handleFilter={handleFilter}
        />
      </div>

      <div className="card-grid">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-details">
                <div className="card-title">{item.title}</div>
                <div className="card-distance">{item.distance}</div>
                <div className="card-date">{item.date}</div>
                <div className="card-price">{item.price}</div>
                <div className="card-rating">⭐ {item.rating}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No results found. Please adjust your filters.</div>
        )}
      </div>
    </>
  );
};

export default FilterPage;
