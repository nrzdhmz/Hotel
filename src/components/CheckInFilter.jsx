import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";

const CheckInFilter = () => {
  const { setSearchData } = useSearchContext();
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchData({ location, startDate, endDate, adults, children });

    navigate("/search");
  };

  return (
    <div className="checkin-filter">
      <h1>Halal Holidays for the Muslim traveller</h1>
      <p>Discover entire homes and rooms perfect for any trip.</p>

      <div className="filter-section">
        <div className="input-group">
          <label>LOCATION</label>
          <input
            type="text"
            placeholder="Anywhere"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="date-picker-group">
          <div className="input-group">
            <label>CHECK IN</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Add Date"
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div className="input-group">
            <label>CHECK OUT</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="Add Date"
              dateFormat="MMMM d, yyyy"
              minDate={startDate}
            />
          </div>
        </div>

        <div className="guests-section">
          <div className="input-group">
            <label>ADULTS</label>
            <select value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>CHILDREN</label>
            <select value={children} onChange={(e) => setChildren(Number(e.target.value))}>
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="search-button">
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default CheckInFilter;
