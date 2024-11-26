import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";

const FilterComponent = ({ searchData, setSearchData, handleFilter }) => {
  const [searchLocation, setSearchLocation] = useState(searchData.location || "");
  const [checkInDate, setCheckInDate] = useState(searchData.startDate ? new Date(searchData.startDate) : null);
  const [checkOutDate, setCheckOutDate] = useState(searchData.endDate ? new Date(searchData.endDate) : null);

  const [adults, setAdults] = useState(searchData.adults || 2); 
  const [children, setChildren] = useState(searchData.children || 0);
  const [infants, setInfants] = useState(searchData.infants || 0);
  const [pets, setPets] = useState(searchData.pets || 0);

  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    setSearchData({
      location: searchLocation,
      startDate: checkInDate,
      endDate: checkOutDate,
      adults,
      children,
      infants,
      pets,
    });
  }, [searchLocation, checkInDate, checkOutDate, adults, children, infants, pets, setSearchData]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsGuestDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <div className="filter-box">
      <div className="filter-item border-right filter-where">
        <label>Where</label>
        <input
          type="text"
          placeholder="Search destinations"
          value={searchLocation}
          className="place"
          onChange={(e) => setSearchLocation(e.target.value)}
        />
      </div>

      <div className="filter-item border-right check-in">
        <label>Check in</label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          placeholderText="Add dates"
          dateFormat="MMMM d, yyyy"
        />
      </div>

      <div className="filter-item border-right check-out">
        <label>Check out</label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          placeholderText="Add dates"
          dateFormat="MMMM d, yyyy"
          minDate={checkInDate}
        />
      </div>

      <div className="filter-item guest-who" ref={dropdownRef}>
        <label>Who</label>
        <div className="guest-selector" onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}>
          <span>{adults + children + infants} guests</span>
        </div>

        {isGuestDropdownOpen && (
          <div className="guest-dropdown">
            <div className="guest-row border-bottom">
              <span>Adults</span>
              <span>Ages 13 or above</span>
              <div className="counter">
                <button onClick={() => decrement(setAdults, adults)}>-</button>
                <span>{adults}</span>
                <button onClick={() => increment(setAdults, adults)}>+</button>
              </div>
            </div>

            <div className="guest-row border-bottom">
              <span>Children</span>
              <span>Ages 2–12</span>
              <div className="counter">
                <button onClick={() => decrement(setChildren, children)}>-</button>
                <span>{children}</span>
                <button onClick={() => increment(setChildren, children)}>+</button>
              </div>
            </div>

            <div className="guest-row border-bottom">
              <span>Infants</span>
              <span>Under 2</span>
              <div className="counter">
                <button onClick={() => decrement(setInfants, infants)}>-</button>
                <span>{infants}</span>
                <button onClick={() => increment(setInfants, infants)}>+</button>
              </div>
            </div>

            <div className="guest-row">
              <span>Pets</span>
              <span>Service animals</span>
              <div className="counter">
                <button onClick={() => decrement(setPets, pets)}>-</button>
                <span>{pets}</span>
                <button onClick={() => increment(setPets, pets)}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className="search-button" onClick={handleFilter}>
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
};

export default FilterComponent;
