import React from 'react';
import "../index.css";
//TODO:: Add header section into header.js and Footer Section into footer.js
function HomePage() {
  return (
    <div className="home-container">
      {/* Welcome Header */}
      <div className="home-welcome-header">Welcome To Psyche</div>

      {/* Header Section */}
      <div className="home-header-section">
        <div className="home-nasa-logo">
          <div className="home-nasa-logo-text">NASA LOGO</div>
        </div>
        <div className="home-link home-link-nasa">NASA Website</div>
        <div className="home-link home-link-psyche">Psyche Mission Website</div>
      </div>

      {/* Buttons Section */}
      <div className="home-button home-button-illustrator"></div>
      <div className="home-button home-button-trivia"></div>
      <div className="home-button-text home-text-illustrator">Psyche Illustrator</div>
      <div className="home-button-text home-text-trivia">Trivia</div>


    </div>
  );
}

export default HomePage;