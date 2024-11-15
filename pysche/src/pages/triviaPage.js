import React from "react";
// import BasicSwitch from "../../weightSwitch.js";
import WeightInput from "../components/weightInput.js";
import UnitSwitch from "../components/unitSwitch.js"
import AgeConverter from "../components/ageConverter";
import FunFacts from "../components/funFacts";
import PsycheCost from "../components/psycheCost";

const TriviaPage = () => (
  <main>

    <AgeConverter />
    <br></br>
    <WeightInput />
    <UnitSwitch />
    <br></br>
    <FunFacts />
    <br></br>
    <PsycheCost />

  </main>
);

export default TriviaPage;



