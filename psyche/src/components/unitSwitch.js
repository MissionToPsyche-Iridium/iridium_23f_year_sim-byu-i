// Author: Jackson Westover

import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

// UnitSwitch Component

// This component will be a switch that will allow a user to toggle between kilograms (kg) and pounds (lbs)
function UnitSwitch({ isKg, onToggle }) {
  return (
    <FormControlLabel 
      control={
        // Switch that allows for toggling between weight units
        <Switch
          checked={isKg}
          onChange={(e) => onToggle(e.target.checked)}
          color='default'
        />
      }
      // label will display the respective unit based on the position of the switch
      label={`Input weight in ${isKg ? 'kg' : 'lb'}`}
    />
  );
}

export default UnitSwitch;