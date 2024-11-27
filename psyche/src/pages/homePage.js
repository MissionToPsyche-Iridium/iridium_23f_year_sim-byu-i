import React from 'react';
import "../index.css";

function HomePage() {
  return (
    <div className="home-container">
      {/* Buttons Section */}
      <div className="home-buttons-section">
        <div className="home-button-container">
          <button className="home-button">Psyche Illustrator</button>
        </div>
        <div className="home-button-container">
          <button className="home-button">Trivia</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
