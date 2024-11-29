/*
* Description: This component is used display information in drop downs. The information
*              put in this one is about how much you could buy if you had the money
*              that the Psyche astroid is estimated to be.
*
*
* Author: Written by Thomas Jamieson
*
* Attributions: MUI is the where I got the accordion ui and some of how to use it. I think
*               I used ChatGPT to get around some more specific issues I ran into when using
*               the accordion.
*               
*
*
*/


import React from "react";
import "../componentsCSS/trivia.css";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function PsycheCost() {
    return (
     
        <div class="box">

            {/* I wanted all of my accordions to be in one accordion sorta like a nesting doll because I thought it worked better aesthetically. That is why there is this first accordion encapsulating the others.*/}
            <Accordion>

                {/* This 'ArrowDropDownIcon' puts the classic arrow on the right side of the accordion. */}
                <AccordionSummary expandIcon={<ArrowDropDownIcon/>}> 

                {/* This is where the 'title' of the accordion goes. This lets the user know what to expect from dropdown. */}
                    How Much is Psyche Worth? And What Could You Buy?

                </AccordionSummary>

                {/* It may seem obvious, but this is where the description of hte accordion goes. You will see that I use a link on a superscript here. That is to give the users the links to where I got the information. I made a special class in the trivia.css file because the default look for a hyperlink didn't work for a superscript. */}
                <AccordionDetails>
                    Psyche is estimated to be worth, on the low end of estimates, $10,000 quadrillion <a class="sup" href="/Sources" target="_blank"><sup>t_1</sup></a>. Lets look what we could buy for that amount of money to try to understand how massive it is! Also just as a disclaimer all of these values are just estimates. This is purely a fun exercise and is not meant to be a source of concrete answers, especially when you get down to the last few items in the list. You can have some fun with this as well just pull out a calculator and look up what an item is worth and take 10,000 quadrillion divided by that cost.

                </AccordionDetails>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        Paper

                    </AccordionSummary>

                    <AccordionDetails>
                        Right now could go online and buy 500 sheets of paper for $5.57 <a class="sup" href="/Sources" target="_blank"><sup>t_2</sup></a>. If we divide 10,000 quadrillion by 5.57 we get the number 1,795,332,136,445,242,370. Now we have to multiply that by 500 so we get the number of pieces of paper. 897,666,068,222,621,185,000. That is the number of pieces of paper you will have. That is not a very useful comparison seeing as how that is a larger number than what we started with. Great now what? Well what if we stacked each of the papers on top of each other; how high would it be. If we say each piece of paper is .1mm thick, which seems to be a good guess, then we could stack paper to go to the sun... 965,232,331,422 times. So maybe paper was a bad comparison. Let's go with something more expensive.
                        
                    </AccordionDetails>

                </Accordion>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        Gaming Laptop

                    </AccordionSummary>

                    <AccordionDetails>
                        If you try really hard you can get gaming laptops for the 'low' price of $10,000. That would be 1,000,000,000,000,000 laptops. Although that may be a gamers dream I'm still not satisfied. We have to go bigger.
                    </AccordionDetails>

                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        US National Debt

                    </AccordionSummary>

                    <AccordionDetails>
                        Without getting political it is well agreed that the US Nation Debt is very large. As of writing this we are looking at roughly $36 trillion <a class="sup" href="/Sources" target="_blank"><sup>t_3</sup></a>. So how many times could we pay off this debt if we somehow sold the Psyche asteroid? 277,778 times. Well that number is a more comprehensible, but still to big for me. Lets go bigger!
                    </AccordionDetails>

                </Accordion>


                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        America

                    </AccordionSummary>

                    <AccordionDetails>
                        This is going to be a very rough estimate, but lets go for it. According to an article written back in 2022 <a class="sup" href="/Sources" target="_blank"><sup>t_4</sup></a> one acre of land in America is on average $12,000. With there being about 2.26 billion acres <a class="sup" href="/Sources" target="_blank"><sup>t_5</sup></a> making up America; we would be able to buy the entirety of America, according to these numbers, 368,732 times. Yes that is more times than we would be able to pay off the national debt. I didn't expect it either. Lets go bigger.
                    </AccordionDetails>

                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                        Earth

                    </AccordionSummary>

                    <AccordionDetails>
                        One source <a class="sup" href="/Sources" target="_blank"><sup>t_6</sup></a> says Earth is estimated to be worth about $33 quadrillion. Doing some math we see that we could buy 303 Earths. That however was one of the biggest prices for Earth many other sources say it is $5 quadrillion which would mean we could buy 2,000 Earths.
                    </AccordionDetails>

                </Accordion>


            </Accordion>
            
                
        </div>
        
    );
}

export default PsycheCost