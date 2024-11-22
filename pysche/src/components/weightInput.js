// Author: Jackson Westover

import React from "react";
import { TextField } from "@mui/material";

// WeightInput Component

// This component is an input field that will take a weight given by a user that will later be used to calculate what the given weight will be on Psyche 
function WeightInput({ weight, isKg, onChange  }) {
    return (
        <TextField 
            fullWidth
            id="weight-input"
            label="Enter your weight"
            type="number"
            placeholder={`Weight in ${isKg ? 'kg' : 'lb'}`}
            value={weight}
            onChange={(e) => onChange(e.target.value)}
            margin="normal"
            variant="standard"
            InputLabelProps={{ shrink: true, }}
        />
    );
}

export default WeightInput;