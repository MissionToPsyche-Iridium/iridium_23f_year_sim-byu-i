import React from "react";
import "../componentsCSS/trivia.css"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function PsycheCost() {
    return (
     
        <div class="box">
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                    How Much is Psyche Worth? And What Could You Buy?

                </AccordionSummary>

                <AccordionDetails>
                    It is estimated to be a whole lot. Also just as a disclaimer all of these values are just estimates.
                </AccordionDetails>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        Paper

                    </AccordionSummary>

                    <AccordionDetails>
                        You could buy.
                    </AccordionDetails>

                </Accordion>
            </Accordion>
            
                
        </div>
        
    );
}

export default PsycheCost