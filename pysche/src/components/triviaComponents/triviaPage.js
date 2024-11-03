import React from "react";
import AgeConverter from "./ageConverter";
import WeightConverter from "./weightConverter";
import FunFacts from "./funFacts";
import PsycheCost from "./psycheCost";


function TriviaPage() {
    return(
        <div>
            
            
                <AgeConverter />
                <br></br>
                <WeightConverter />
                <br></br>
                <FunFacts />
                <br></br>
                <PsycheCost />
            

        </div>
        
    );
}

export default TriviaPage;