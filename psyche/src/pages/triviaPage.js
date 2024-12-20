/*
* Description: This is the page for the 'trivia' activities. It doesn't have much
*              of anything because it is more of a staging ground for the components
*              to be put into.
*
* Author: Written by Thomas Jamieson
*
*
* Attributions: Set up was gotten from looking at examples from other pages in this project.
*               
*               
* 
*
*
*
*/

import React from "react";

import AgeConverter from "../components/ageConverter";
import PsycheCost from "../components/psycheCost";
import WeightConverter from "../components/weightConverter.js";
import styles from "../componentsCSS/trivia.css";

const TriviaPage = () => (
  <div>

    {/* All the components */}
    <div className="container">
      <AgeConverter />
      <WeightConverter />
    </div>
    <br></br>
    <p>Fun Facts</p>    

    <PsycheCost />

  </div>
);

export default TriviaPage;



