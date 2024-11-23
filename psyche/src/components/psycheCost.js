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
                    It is estimated to be worth, on the low end of estimates, $10,000 quadrillion<sup>t_1</sup>. Lets look what we could buy for that amount of money to try to understand how massive it is! Also just as a disclaimer all of these values are just estimates.
                </AccordionDetails>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        Paper

                    </AccordionSummary>

                    <AccordionDetails>
                        I could go online and buy 500 sheets of paper for $5.57<sup>t_2</sup>. If we divide 10,000 quadrillion by 5.57 we get the number 1,795,332,136,445,242,370. Now we have to multiply that by 500 so we get the number of pieces of paper. 897,666,068,222,621,185,000. That is the number of pieces of paper you will have. That is not a very useful comparison seeing as how that is a larger number than what we started with. Great now what? Well what if we stacked each of the papers on top of each other; how high would it be. If we say each piece of paper is .1mm thick, which seems to be a good guess, then we could stack paper to go to the sun... 965,232,331,422 times. So maybe paper was a bad comparison. Let's go with something more expensive.
                    </AccordionDetails>

                </Accordion>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        Gaming Laptop

                    </AccordionSummary>

                    <AccordionDetails>
                        If you try really hard you can get gaming laptops for the 'low' price of $10,000. That would be 1,000,000,000,000,000 laptops. We have to go bigger.
                    </AccordionDetails>

                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        US National Debt

                    </AccordionSummary>

                    <AccordionDetails>
                        Without getting political it is well agreed that the US Nation Debt is very large. As of writing this we are looking at roughly $36 trillion<sup>t_3</sup>. So how many times could we pay off this debt if we somehow sold the Psyche asteroid? 277,778 times. Well that number is a more comprehensible, but still to big for me. Lets go bigger!
                    </AccordionDetails>

                </Accordion>


                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        America

                    </AccordionSummary>

                    <AccordionDetails>
                        This is going to be a very rough estimate, but lets go for it. 
                    </AccordionDetails>

                </Accordion>


            </Accordion>
            
                
        </div>
        
    );
}

export default PsycheCost