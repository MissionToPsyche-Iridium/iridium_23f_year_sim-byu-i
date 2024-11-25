import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import WeightSubmit from "./weightSubmit";
import WeightInput from "./weightInput";
import UnitSwitch from "./unitSwitch";
import { calcPsycheWeight } from "../utils/conversions";

function WeightConverter() {
  const [isKg, setIsKg] = useState(false);
  const [weight, setWeight] = useState("");
  const [psycheWeight, setPsycheWeight] = useState(null);

  const handleWeightChange = (value) => {
    setWeight(value);
  };

  const handleUnitToggle = (checked) => {
    setIsKg(checked);
  };

  const handleCalculate = () => {
    const result = calcPsycheWeight(weight, isKg);
    setPsycheWeight(result);
  };

  return (
    <div>
      <h1>Weight Converter</h1>
      <UnitSwitch isKg={isKg} onToggle={handleUnitToggle} />
      <WeightInput weight={weight} isKg={isKg} onChange={handleWeightChange} />
      <WeightSubmit onClick={handleCalculate} />
      <p>Your weight on Psyche: {psycheWeight} {isKg ? 'kg' : 'lbs'}</p>
    </div>
  );
}

export default WeightConverter;
