import React, {useState} from "react";
import "../index.css"
const hintArr = ["This is a hint", "This is a hint but different"]
// ## Hints

// - **Psyche** is a mixture of rock and metal, with the metal taking up about 30-60% of its composition.
// - **Psyche** is shaped like an irregular and lumpy potato.
// - **Psyche** is about 173 miles (280 kilometers) at its widest point.
// - **Psyche** has two depressions or craters on it that are about 67 km wide.
// - **Psyche** is most likely relatively smooth.

const HintBox = () => {
    const [hintNumber, setHintNumber] = useState(0);

    const handleHintClick = () => {
        setHintNumber(hintNumber >= hintArr.length - 1?0 : hintNumber + 1);
    
};
return (
    <div className="hintBox">
      <div className="hintBoxWords">
        <p>Your hint is: {hintArr[hintNumber]}</p>
        <button onClick={handleHintClick}>Hint</button>
      </div>
    </div>
  );
};

export default HintBox