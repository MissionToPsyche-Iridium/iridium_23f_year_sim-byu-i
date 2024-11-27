import React from 'react';
import "../index.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      {/* Buttons Section */}
      <div className="home-buttons-section">
        <div className="home-button-container">
          <Link to="/Drawing">
            <button className="home-button">Psyche Illustrator</button>
          </Link>
        </div>
        <div className="home-button-container">
          <Link to="/Trivia">
            <button className="home-button">Trivia</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
