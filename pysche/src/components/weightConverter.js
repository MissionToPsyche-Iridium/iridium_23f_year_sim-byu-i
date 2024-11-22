// Author: Jackson Westover

import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import WeightSubmit from "./weightSubmit";
import WeightInput from "./weightInput";
import UnitSwitch from "./unitSwitch";
import { calcPsycheWeight } from "../utils/conversions";

// Setting font styles to use inline
const helvetica = {
  fontFamily: 'Helvetica, sans-serif'
};

const arial = {
  fontFamily: 'Arial, sans-serif'
};

// WeightConverter Component

// This component creates a calculator that converts Earth Weight to Psyche weight. It allows a user to input their weight in lbs or kg and determines what their weight would be on Pysche.
function WeightConverter() {
  // state for managing weight unit
  const [isKg, setIsKg] = useState(false);
  // state for storing the input weight
  const [weight, setWeight] = useState("");
  // state for storing the converted Psyche weight
  const [psycheWeight, setPsycheWeight] = useState(null);

  // Handle changes in the input field
  // value (string): weight value
  const handleWeightChange = (value) => {
    setWeight(value);
  };

  // Handles toggle between units
  // checked (boolean): True if kg is selected, false is lb is selected
  const handleUnitToggle = (checked) => {
    setIsKg(checked);
  };

  // Converts the weight on Psyche when submitted
  const handleCalculate = () => {
    const result = calcPsycheWeight(weight, isKg);
    setPsycheWeight(result);
  };

  return (
    // Styles using Material UI
    <Container maxWidth='sm' style={helvetica}>
      <Box sx={{ my: 4, textAlign: 'center'}}>
        <Typography variant="h4" component="h1" gutterBottom style={helvetica}>
          Psyche Weight Converter
        </Typography>

        {/* Component to switch between kg an lb */}
        <UnitSwitch isKg={isKg} onToggle={handleUnitToggle} />

        {/* Component for inputting weight */}
        <WeightInput weight={weight} isKg={isKg} onChange={handleWeightChange} />
        <Box sx={{ mt: 2, mb: 2 }}>

          {/* Component submitting weight and performing calculation */}
          <WeightSubmit onClick={handleCalculate} />
        </Box>

        {/* If a calculation was executed display the Psyche weight in the given unit  */}
        {psycheWeight !== null && (
          <Typography variant="h6" sx={{ mt: 2 }} style={arial}>
            <p>Your weight on Psyche: {psycheWeight} {isKg ? 'kg' : 'lbs'}</p>
          </Typography>
          )}
      </Box>
    </Container>
  );
}

export default WeightConverter;
