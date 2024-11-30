/*
* Description: This component is used for converting a users age into what their 
*              age would be if they where on Psyche in both years and days.
*
* Author: Written by Thomas Jamieson
*
* Attributions: Code was also received from ChatGPT for some of the more nuanced parts of the program.
*               I have very little experience with JavaScript and no information was given to the AI
*               regarding the Psyche project. Other general code help was given by various sources such
*               as W3Schools.com
*
* Known issues: Users can input an age that is in the future. Error handling has not been added. NUmbers will change
*               the submit button is pressed and they change the months days or years. If it is the year that is changed than 
*               the numbers will be wrong.
*
*/

import React from "react";
import { useState } from 'react';
import "../componentsCSS/trivia.css"




function AgeConverter() {

    //It was important to have the current dates for the correct calculations of age.
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; //A 1 is added here because the Date().getMonth() returns 0-11 and the way I had done the calculations required 1-12.
    const currentDay = new Date().getDate();


    const lastYear = 1900; //No one living was born before 1900. This will give anyone a start date that is within their age.

    const years = [];

    //These are the months that have 30 days or 31 days.
    const thirties = ["4", "6", "9", "11"];
    const thirtyOnes = ["1", "3", "5", "7", "8", "10", "12"];
    
    //This will populate the years list so that the dropdown can be correctly be populated. See line 163 for use.
    for (let year = currentYear; year >= lastYear; --year){
        years.push(year);
    }

    const [selectedMonth, setMonth] = useState("");

    const [selectedDay, setDay] = useState("");
    
    const [selectedYear, setYear] = useState("");
    
    const [earthAgeYears, submitAge] = useState("");
    

    function leapYear(year){
        return(year % 400 === 0 ? 29 : year % 100 === 0 ? 28 : year % 4 === 0 ? 29 : 28)
    }
    
    const daysInMonth = thirtyOnes.includes(selectedMonth) ? 31 : thirties.includes(selectedMonth) ? 30 : leapYear(Number(selectedYear));


    function changeMonth(event){
        setMonth(event.target.value);
    }

    function changeDay(event){
        setDay(event.target.value);
    }

    function changeYear(event){
        setYear(event.target.value);

    }

    //This will get the age of the user in years. Since the website also asks for there date of birth this needs to check if they have had a birthday in the current year.
    function setAge(){
        const hadBDay = (currentMonth - Number(selectedMonth)) > 0 ? 1 : currentMonth === Number(selectedMonth) && currentDay - Number(selectedDay) >= 0 ? 1 : 0;
        const ageInYears = (currentYear - Number(selectedYear)) - 1 + hadBDay;

        submitAge(ageInYears);
    }

    function setAgeInDays(){

        // We start off by assuming that February is 28 days. We later calculate how many leap years have passed and simple had that number to the total number of days.
        const daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
        let days = 0

        for (let i = selectedMonth; i < Number(currentMonth); i++) {
            days += daysInMonths[i];
            
        }

        //numOfLeaps calculates the number of leap days that have passed, you need the current day so that you don't miss the days that have past in the month already, then we need to account for the day the person was born so we subtract that from the current months day but we also need to subtract on from the selected day because we are counting the day you were born as day number 1, then we add the calculated number of days from the months that had past.
        let daysOld = earthAgeYears * 365 + numOfLeaps() + currentDay - (selectedDay - 1) + days; 

        // in the very odd case that someone selects the current month day and year this will set the age to 0. If you want to be more exact than this you would have to get exact times, down to the hour at least, of birth and compare it to the current time. I believe that this would be way over the top.
        if (currentDay === Number(selectedDay) && currentMonth === Number(selectedMonth) && currentYear === Number(selectedYear)){
            daysOld = 0;
        }

        return (daysOld)
    }

    function numOfLeaps(){
        const arrayYears = [];

        let indexYears = Number(selectedYear);

        // Does not include the current year this is important otherwise it may count a leap day (the 29th) that has not happened yet.
        while (indexYears !== currentYear) {
            arrayYears.push(indexYears);

            indexYears++;
        }

        let numDays = 0;

        for (let i = 0; i < arrayYears.length; i++) {
            let isLeap = leapYear(arrayYears[i]);

            if (isLeap === 29) {
                numDays += 1;
            };
            
        }

        //This accounts for if the current year is a leap year and the day has past or it is the 29th.
        if ((leapYear(currentYear) === 29 && Number(selectedMonth) > 2) || (leapYear(currentYear) === 29 && Number(selectedMonth) === 2 && Number(selectedDay) === 29)) {
            numDays += 1;
        }
      

        return (numDays);
    }

    return (
    
        
        // <div class="box">
        <div class="agePlacement">
            {/* Dropbox for months. */}
            
            <label for="userAge">Age Converter - How old would you be on Psyche? </label>
            <br></br>
            <br></br>
            Enter Your Birthday:
            <br></br>

            <select id="months" value={selectedMonth} onChange={changeMonth}>
                <option value="Month">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
     
            {/* Dropbox for days in month that is selected. */}
            <select id="days" value={selectedDay} onChange={changeDay}>
                <option value="Day">Day</option>
                {Array.from({ length: daysInMonth}, (_, i) => <option value={i+1}>{i+1}</option>)}

            </select>
            
            {/* Dropbox this populated dynamically so that is will include the current year going back to 1900. */}
            <select id="years" value={selectedYear} onChange={changeYear}>
                <option value={1}>Year</option>
                {years.map((year) => (
                    <option value={year}> {year} </option>
                ))}
                {/* This years.map() was given by ChatGPT. I have tried to understand how it works and think I have a good grasp on it. */}
            </select>
            

            <button onClick={setAge}>Submit</button>

            
            {/* Table to display the age on Earth and on Psyche. */}
            <table>
                <tr>
                    {/* There is no built in punnet square but I wanted a blank spot in the top right so I added some stylizing to make a td border blank. This allowed for the space to be there without it being visible. */}
                    <td class="blank"></td>
                    <th>
                        Earth
                    </th>
                    <th>
                        Psyche
                    </th>
                </tr>
                <tr>
                    <th>
                        Years Old
                    </th>
                    <td>
                        {/* The way I got this number it doesn't display anything by default in the table. This is how I should have gotten the age in days as well, but I didn't. That is something to work on in the future I guess. You will see in a future comment that it caused some headache not to have done it in the same way. */}
                        {earthAgeYears}
                        
                    </td>
                    <td>
                        {/* If the year 2024 is selected then we want to just get the days. earthAgeYears/5 is by default a 0 and would display without any input from the user. I don't want this so I did a conditional so a blank will be put in instead. */}
                        {selectedYear === '2024' ? earthAgeYears : earthAgeYears/5 === 0 ? <p></p> : earthAgeYears/5}
                    </td>
                </tr>
                <tr>
                    <th>
                        Days Old
                    </th>
                    <td>
                        {/* earthAgeYears/5 is my condition for this rather than something with setAgeInDays() because setAgeInDays changes as you make selections. This means that the days on earth will change as you make selections if it was in the condition. In all reality the information should probably be different so that you only see the change when the submit button is pressed, but I did not do it right to get that working. The error with this is that after you have hit the submit button the condition will no longer be true and so if you change the month or year it will visibly change the number in the table. */}
                        {selectedYear === '2024' ? setAgeInDays() : earthAgeYears/5 === 0 ? <p></p> : setAgeInDays().toLocaleString()}
                    </td>
                    <td>
                        {selectedYear === '2024' ? Math.round((setAgeInDays()/365)*1828).toLocaleString() : earthAgeYears*1828 === 0 ? <p></p> : (earthAgeYears*1828 + setAgeInDays()).toLocaleString()}
                    </td>
                </tr>
            </table>
            
        </div>
    );
}




export default AgeConverter