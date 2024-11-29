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
* Known issues: Fun facts doesn't actually have anything yet. This could be added to later if desired.
*
*
*
*
*/

import React from "react";

import AgeConverter from "../components/ageConverter";
import FunFacts from "../components/funFacts";
import PsycheCost from "../components/psycheCost";
import WeightConverter from "../components/weightConverter.js";

const TriviaPage = () => (
  <div>

    {/* All the components */}
    <AgeConverter />
    <WeightConverter />
    <br></br>
    <br></br>
    <FunFacts />
    <br></br>
    <PsycheCost />

  </div>
);

export default TriviaPage;



