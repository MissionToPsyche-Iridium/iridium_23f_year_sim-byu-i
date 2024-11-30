// Author: Jackson Westover
import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import WeightSubmit from "./weightSubmit";
import WeightInput from "./weightInput";
import UnitSwitch from "./unitSwitch";
import { calcPsycheWeight } from "../utils/conversions";

// Define style for helvetica font
const helveticaStyle = {
  fontFamily: "Helvetica, Arial, sans-serif",
};

// WeightConnverter Component
// This component create a calculator the conversts Earth weight to Moon Weight. It allows the user to input their weight, toggle between kg and lbs and calculates their weight on Psyche
function WeightConverter() {

  // state for managing weight unit (kg or lb)
  const [isKg, setIsKg] = useState(false);

  // state for storing weight input
  const [weight, setWeight] = useState("");

  // state for storing the calculated moon weight
  const [psycheWeight, setPsycheWeight] = useState(null);

  // Handles changes in weight input field
  // value: new weight value
  const handleWeightChange = (value) => {
    setWeight(value);
  };

  // hangles switching between weight units
  // checked: true if kg is selected, false if lb is selected
  const handleUnitToggle = (checked) => {
    setIsKg(checked);
  };

  // calculates weight on Psyche when submitted
  const handleCalculate = () => {
    const result = calcPsycheWeight(weight, isKg);
    setPsycheWeight(result);
  };

  return (
    <Container maxWidth="sm" stlye={helveticaStyle}>
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={helveticaStyle}
        >
          Psyche Weight Calculator
        </Typography>

        {/* Component Switch to toggle between kg and lbs */}
        <UnitSwitch isKg={isKg} onToggle={handleUnitToggle} />

        {/* Component to input weight */}
        <WeightInput
          weight={weight}
          isKg={isKg}
          onChange={handleWeightChange}
        />
        <Box sx= {{ mt: 2, mb: 2}}>

          {/* Component for submitting calculation */}
          <WeightSubmit onClick={handleCalculate} />
        </Box>

         {/* Display psyche weight if not null */}
         {psycheWeight !== null && (
          <Typography variant="h6" sx={{ mt: 2 }} stlye={helveticaStyle}>
            Your weight on Psyche: {psycheWeight} {(isKg ? 'kg' : 'lb')}
          </Typography>
         )}
      </Box>
    </Container>
  );
}

export default WeightConverter;
