import React from "react";
// import BasicSwitch from "../../weightSwitch.js";
import WeightInput from "../components/weightInput.js";
import BasicSwitch from "../components/weightSwitch.js"
import AgeConverter from "../components/ageConverter";
import FunFacts from "../components/funFacts";
import PsycheCost from "../components/psycheCost";

const TriviaPage = () => (
  <main>

    <AgeConverter />
    <br></br>
    <WeightInput />
    <BasicSwitch />
    <br></br>
    <FunFacts />
    <br></br>
    <PsycheCost />

  </main>
);

export default TriviaPage;



