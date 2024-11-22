// Author: Jackson Westover

import React from "react";
import { Button } from '@mui/material';

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