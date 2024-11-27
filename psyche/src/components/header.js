// Basic Header component for Layout

import React from "react";
import { Link } from "react-router-dom";
import "./../componentsCSS/Header.css";

const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Drawing">Draw</Link></li>
        <li><Link to="/Trivia">Trivia</Link></li>
        <li><Link to="/Credits">Credits</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
