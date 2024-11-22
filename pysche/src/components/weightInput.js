// Author: Jackson Westover

import React from "react";
import { TextField } from "@mui/material";

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