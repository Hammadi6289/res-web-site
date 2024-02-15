import React from "react";
import "./TourPreview.css"; // Import CSS file for styling

function TourPreview() {
  return (
    <div className="checkout-page-container">
      <div className="checkout-page-header">
        <h2>Checkout Page</h2>

        <h2>03 Days Trip to Neelum - Arang Kel</h2>
        <p>3 Days & 2 Nights</p>
      </div>
      <div className="tour-preview-details">
        <div className="tour-preview-info">
          <h3>
            Lahore: Neelum Valley Tour Packages - 3 Days Trip to Arang Kel
          </h3>
          <button className="book-now-btn">Book Now</button>
        </div>
        <div className="tour-preview-booking">
          <div className="booking-item">
            <h3>Departure City</h3>
            <p>Lahore</p>
          </div>
          <div className="booking-item">
            <h3>Date</h3>
            <p>22 Feb, 2024 - 25 Feb, 2024</p>
          </div>
          <div className="booking-item">
            <h3>Adult</h3>
            <p>10 > years</p>
          </div>
          <div className="booking-item">
            <h3>Children</h3>
            <p>7 - 10 years</p>
          </div>
          <div className="booking-item">
            <h3>Infant</h3>
            <p>&lt; 3 years</p>
          </div>
        </div>
      </div>
      <div className="tour-preview-itinerary">
        <h3>Detailed Itinerary</h3>
        <p>...</p>
      </div>
      <div className="tour-preview-cancellation">
        <h3>Cancelation Policy</h3>
        <p>36hrs before departure, 100% deduction of advance payment.</p>
      </div>
      <div className="tour-preview-services">
        <h3>Services Included in Cost</h3>
        <ul>
          <li>Private Transport (Coaster / Hi-roof)</li>
          <li>
            2-Night Accommodation (4-Pax Sharing, 2-Bed + 2-Mattress) (Separate
            Room for Couples)
          </li>
          <li>3-Breakfast</li>
          <li>2-Dinner</li>
          <li>Bon Fire</li>
          <li>Tour Guide</li>
          <li>All kind of toll & taxes</li>
        </ul>
      </div>
      <div className="tour-preview-services-not-included">
        <h3>Services not included in Cost</h3>
        <p>END OF SERVICES</p>
      </div>
      <div className="tour-preview-terms">
        <h3>TERMS & CONDITIONS</h3>
        <p>...</p>
      </div>
    </div>
  );
}

export default TourPreview;
