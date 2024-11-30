// Authors: Brodie Busby &
// Everything that displays on the home page
import React from 'react';
import "../index.css";
import { Link } from "react-router-dom";
//TODO: Make it more apealling XD 
function HomePage() {
  return (
    <div className="home-container">
      {/* Introduction Section */}
      <div className="home-words">
        <h2>
          What is Psyche? Psyche is an asteroid that is more metal than rock or ice. NASA, in order to learn more about this asteroid, launched a satellite with the same name, *Psyche*, to study this potential partial core of a planetesimal. This mission will allow us to study the early building blocks of an early planet.
        </h2>


        {/* Buttons Section */}
        <div className="home-buttons-section">
          {/* Drawing Section */}
          <div className="home-button-container">
            <p>Want to try drawing an asteroid?</p>
            <Link to="/Drawing">
              <button className="home-button">Psyche Illustrator</button>
            </Link>
          </div>

          {/* Trivia Section */}
          <div className="home-button-container">
            <p>Want to learn more about Psyche?</p>
            <Link to="/Trivia">
              <button className="home-button">Trivia</button>
            </Link>
          </div>
          <h2>
            The Psyche satellite will reach the asteroid by August 2029, revealing more about its composition and appearance. In the meantime, check out some trivia about it, calculate your own weight on Psyche, or try drawing your version of it. Once you submit your drawing, you'll even get to see artist renditions of the asteroid.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
