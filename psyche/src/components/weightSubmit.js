// Author: Jackson Westover

import React from "react";
import { Button } from '@mui/material';


// WeightSubmit Component

// This component creates a submit button that when clicked will submit the weight given in the WeightInput component and will use the calcPsycheWeight function from the conversions.js file. 
function WeightSubmit({ onClick }) {
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            fullWidth
            sx={{
                color: 'black',
                borderColor: 'black',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    borderColor: 'black'
                },
            }}
        >
            Calculate Psyche Weight
        </Button>
    );
}

export default WeightSubmit;