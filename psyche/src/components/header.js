// Authors: Jackson Westover & 
// Basic Header component for Layout

import React from "react";
import { Link } from "react-router-dom";
import "./../componentsCSS/Header.css";

const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li><a href="https://science.nasa.gov/mission/psyche/" target="_blank" rel="noopener noreferrer"><img src="/images/NASA-Logo.png" alt="NASA Logo" /></a></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Drawing">Draw</Link></li>
        <li><Link to="/Trivia">Trivia</Link></li>
        <li><Link to="/Credits">Credits</Link></li>
        <li><a href="https://psyche.asu.edu/" target="_blank" rel="noopener noreferrer"><img src="/images/Psyche_BadgeSolid_BW-SVG.svg" alt="Psyche Logo" /></a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
