import React, { useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import FilterComponent from "../components/FilterComponent";
import placeholderData from "../data/placeholderData";
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { Carousel } from "react-responsive-carousel";

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
              <IoMdHeartEmpty className="heart" />
              <Carousel
                className="carousel"
                showThumbs={false}
                showStatus={false}
                emulateTouch
                infiniteLoop
                renderIndicator={(clickHandler, isSelected, index, label) => (
                  <button
                    type="button"
                    key={index}
                    onClick={clickHandler}
                    onKeyDown={clickHandler}
                    value={index}
                    className={`custom-dot ${isSelected ? "selected" : ""}`}
                    aria-label={`Slide ${index + 1}`}
                  >
                    <span className="dot-shape"></span>
                  </button>
                )}
                renderArrowPrev={(clickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={clickHandler}
                      className="custom-arrow custom-arrow-prev"
                      aria-label={label}
                    >
                      &#10094; 
                    </button>
                  )
                }
                renderArrowNext={(clickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      onClick={clickHandler}
                      className="custom-arrow custom-arrow-next"
                      aria-label={label}
                    >
                      &#10095; 
                    </button>
                  )
                }
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index}>
                    <img
                      src={item.image}
                      alt={`${item.title} - Slide ${index + 1}`}
                      className="card-image"
                    />
                  </div>
                ))}
              </Carousel>


              <div className="card-details">
                <div className="card-title">{item.title}</div>
                <div className="card-distance">{item.distance}</div>
                <div className="card-date">{item.date}</div>
                <div className="card-price">
                  {item.price} <p>night</p>
                </div>
                <div className="card-rating">
                  <FaStar />
                  {item.rating}
                </div>
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
