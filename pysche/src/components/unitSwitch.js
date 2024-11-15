import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

function UnitSwitch({ isKg, onToggle }) {
  return (
    <FormControlLabel 
      control={
        <Switch
          checked={isKg}
          onChange={(e) => onToggle(e.target.checked)}
          color='default'
        />
      }
      label={`Input weight in ${isKg ? 'kg' : 'lb'}`}
    />
  );
}

export default UnitSwitch;