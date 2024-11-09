import React, {useState} from "react";

const hintArr = ["This is a hint", "This is a hint but different"]

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