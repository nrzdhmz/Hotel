import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import placeholderData from "../data/placeholderData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = placeholderData.find((item) => item.id === parseInt(id));

  const [bookingDetails, setBookingDetails] = useState({
    startDate: "",
    endDate: "",
    guests: 1,
    roomType: "",
  });

  const [error, setError] = useState("");

  if (!property) {
    return <div className="error">Property not found. Please check the property ID.</div>;
  }

  const handleBooking = (e) => {
    e.preventDefault();

    if (!bookingDetails.startDate || !bookingDetails.endDate || !bookingDetails.roomType) {
      setError("Please fill in all required fields.");
      return;
    }

    navigate("/booking-confirmation", { state: { property, bookingDetails } });
  };

  return (
    <div className="property-details">
      <div className="container">
      <h1>{property.title}</h1>
      <Carousel
        className="carousel"
        showThumbs={false}
        showStatus={false}
        emulateTouch
        infiniteLoop
      >
        {(property.images && property.images.length > 0 ? property.images : ["https://via.placeholder.com/300x300"]).map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${property.title} - Slide ${index + 1}`}
              className="property-image"
            />
          </div>
        ))}
      </Carousel>

      <div className="content">

      <div className="property-info">
        <p>{property.description}</p>
        <h2>Room Types and Pricing</h2>
        <ul>
          {property.roomTypes.map((room, index) => (
            <li key={index}>
              <strong>{room.type}</strong>: ${room.price} per night
            </li>
          ))}
        </ul>
      </div>

      <div className="booking-form">
        <h2>Book Now</h2>
        <form onSubmit={handleBooking}>
          <div className="info">
          <div className="date">
            <div className="check-in">
            <label>
            Check-in Date:
            </label>
            <input
              type="date"
              value={bookingDetails.startDate}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, startDate: e.target.value })
              }
              required
            />
          </div>
          <div className="check-out">
          <label>
            Check-out Date:
            </label>
            <input
              type="date"
              value={bookingDetails.endDate}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, endDate: e.target.value })
              }
              required
            />
              </div>
          </div>
          <div className="guests">
          <label>
            Number of Guests:
            </label>
            <input
              type="number"
              value={bookingDetails.guests}
              min="1"
              max={property.maxGuests}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, guests: parseInt(e.target.value) })
              }
              required
            />
          </div>
          <label>
            Room Type:
            <select
              value={bookingDetails.roomType}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, roomType: e.target.value })
              }
              required
            >
              <option value="">Select a room type</option>
              {property.roomTypes.map((room, index) => (
                <option key={index} value={room.type}>
                  {room.type} - ${room.price} per night
                </option>
              ))}
            </select>
          </label>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Book Now</button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
