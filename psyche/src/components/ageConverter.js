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
* Known issues: Users can input an age that is in the future. Error handling has not been added.
*
*
*
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
        const daysOld = earthAgeYears * 365 + numOfLeaps() + currentDay - (selectedDay - 1) + days; 

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

        //This account for if the current year is a leap year and the day has past or it is the 29th.
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

            {/* Ideally these would show up only after the Submit button has been clicked. Right now this will work as a proof of concept. */}
            {/* <p>You are {earthAgeYears} years old on Earth and {earthAgeYears/5} years old on Psyche.</p>
            <p>You are {setAgeInDays()} days old on Earth and {earthAgeYears*1828} days old on Psyche.</p> */}

            <table>
                <tr>
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
                        Years
                    </th>
                    <td>
                        {earthAgeYears}
                    </td>
                    <td>
                        {earthAgeYears/5}
                        
                    </td>
                </tr>
                <tr>
                    <th>
                        Days
                    </th>
                    <td>
                        {setAgeInDays()}
                    </td>
                    <td>
                        {earthAgeYears*1828}
                    </td>
                </tr>
            </table>
            
        </div>
    );
}




export default AgeConverter