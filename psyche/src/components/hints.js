// Authors: Brodie Busby
// Component for Hint Box on Draw Page

import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import "../index.css"
const hints = [
  "Psyche is a mixture of rock and metal, with the metal taking up about 30-60% of its composition.",
  "Psyche is shaped like an irregular and lumpy potato.",
  "Psyche is about 173 miles (280 kilometers) at its widest point.",
  "Psyche has two depressions or craters on it that are about 67 km wide.",
  "Psyche is most likely relatively smooth."
];
const HintBox = () => {
  const [hintNumber, setHintNumber] = useState(0);

  const handlePrev = () => {
    setHintNumber(Math.max(0, hintNumber - 1));
  };

  const handleNext = () => {
    setHintNumber(Math.min(hints.length - 1, hintNumber + 1));
  };

  return (
    <div className="hintBox">
      <div className="hintBoxWords">
        <p>Hint: {hints[hintNumber]}</p>
        <div className="buttonContainer">
          <Tooltip open={hintNumber === 0} title="First Hint">
            <button className='hintButton' onClick={handlePrev}>Prev</button>
          </Tooltip>
          <Tooltip open={hintNumber === hints.length - 1} title="Last Hint">
            <button className='hintButton' onClick={handleNext}>Next</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default HintBox;