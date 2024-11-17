import React from "react";
import WeightInput from "../components/weightInput.js";
import UnitSwitch from "../components/unitSwitch.js"
import WeightSubmit from "../components/weightSubmit.js";
import AgeConverter from "../components/ageConverter";
import FunFacts from "../components/funFacts";
import PsycheCost from "../components/psycheCost";
import WeightConverter from "../components/weightConverter.js";

const TriviaPage = () => (
  <main>

    <AgeConverter />
    <WeightConverter />
    <br></br>
    <br></br>
    <FunFacts />
    <br></br>
    <PsycheCost />

  </main>
);

export default TriviaPage;



