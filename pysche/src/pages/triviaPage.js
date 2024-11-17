import React from "react";
// import BasicSwitch from "../../weightSwitch.js";
import WeightInput from "../components/weightInput.js";
import UnitSwitch from "../components/unitSwitch.js"
import WeightSubmit from "../components/weightSubmit.js";

const TriviaPage = () => (
  <main>
    <WeightInput />
    <UnitSwitch />
    <WeightSubmit />
  </main>
);

export default TriviaPage;
