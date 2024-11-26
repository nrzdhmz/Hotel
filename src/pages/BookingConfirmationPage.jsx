import React from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";

const BookingConfirmationPage = () => {
  const { state } = useLocation();

  if (!state || !state.property || !state.bookingDetails) {
    return <div className="error">No booking details found.</div>;
  }

  const { property, bookingDetails } = state;
  const { startDate, endDate, guests, roomType } = bookingDetails;
  const selectedRoom = property.roomTypes.find((room) => room.type === roomType);

  const calculateTotalCost = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights * selectedRoom.price;
  };

  const downloadReceipt = () => {
    const element = document.getElementById("receipt");
    html2pdf().from(element).save("HalalHolidayCheck_Receipt.pdf");
  };

  return (
    <section className="receipt">
    <div id="receipt" className="booking-confirmation">
      <h1>HalalHolidayCheck</h1>
      <p>Your Trusted Partner in Halal-Friendly Holidays</p>

      <h2>Booking Confirmation</h2>
      <ul>
        <li><strong>Property:</strong> {property.title}</li>
        <li><strong>Room Type:</strong> {roomType}</li>
        <li><strong>Check-in:</strong> {startDate}</li>
        <li><strong>Check-out:</strong> {endDate}</li>
        <li><strong>Number of Guests:</strong> {guests}</li>
        <li><strong>Total Cost:</strong> ${calculateTotalCost()}</li>
      </ul>

      <div className="receipt-footer">
        <p>Thank you for choosing HalalHolidayCheck!</p>
        <p>We look forward to serving you again.</p>
      </div>

      <button className="download-button" onClick={downloadReceipt}>
        Download Receipt
      </button>
    </div>
    </section>
  );
};

export default BookingConfirmationPage;
