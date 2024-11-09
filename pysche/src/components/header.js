import React from "react";
import { Link } from "react-router-dom";
import "./../componentsCSS/Header.css";

const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/FAQ">Contact</Link></li>
        <li><Link to="/DrawingPage">Draw</Link></li>
        <li><Link to="/TriviaPage">Trivia</Link></li>
        <li><Link to="/ExamplePage">ExamplePage</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
