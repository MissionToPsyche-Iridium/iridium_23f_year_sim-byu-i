import React from "react";
import { useState } from 'react';
import "./../componentsCSS/trivia.css"




function AgeConverter() {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();


    const lastYear = 1900;

    const years = [];

    const thirties = ["4", "6", "9", "11"];

    const thirtyOnes = ["1", "3", "5", "7", "8", "10", "12"];
    

    for (let year = currentYear; year >= lastYear; --year){
        years.push(year);
    }

    const [selectedMonth, setMonth] = useState("");

    const [selectedDay, setDay] = useState("");
    
    const [selectedYear, setYear] = useState("");
    
    const [earthAgeYears, submitAge] = useState("");
    

    function leapYear(year){
        // console.log(year)
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

    function setAge(){
        const hadBDay = (currentMonth - Number(selectedMonth)) > 0 ? 1 : currentMonth === Number(selectedMonth) && currentDay - Number(selectedDay) >= 0 ? 1 : 0;
        const ageInYears = (currentYear - Number(selectedYear)) - 1 + hadBDay;

        submitAge(ageInYears);
    }

    function setAgeInDays(){

        const daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
        let days = 0

        for (let i = selectedMonth; i < Number(currentMonth); i++) {
            days += daysInMonths[i];
            
        }

        //numOfLeaps calculates the number of leap days that has past, you need the current day so that you don't miss the days that have past in the month already, then we need to account for the day the person was born so we subtract that from the current months day but we also need to subtract on from the selected day because we are counting the day you were born as day number 1, then we add the calculated number of days from the months that had past.
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
    
     
        <div class="box">
            <label for="userAge">Enter Your Birthday: </label>
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
            {/* <p>Selected Month {selectedMonth}</p> */}
            {/* {daysInMonth} */}
            <select id="days" value={selectedDay} onChange={changeDay}>
                <option value="Day">Day</option>
                {Array.from({ length: daysInMonth}, (_, i) => <option value={i+1}>{i+1}</option>)}

            </select>
            {/* <p>Selected Day {selectedDay}</p> */}
            
        
            <select id="years" value={selectedYear} onChange={changeYear}>
                <option value={1}>Year</option>
                {years.map((year) => (
                    <option value={year}> {year} </option>
                ))}
            </select>
            {/* <p>Selected Day {selectedYear}</p> */}
            

            <button onClick={setAge}>Submit</button>

            <p>You are {earthAgeYears} years old on Earth and {earthAgeYears/5} years old on Psyche.</p>
            <p>You are {setAgeInDays()} days old on Earth and {earthAgeYears*1828} days old on Psyche.</p>
            
        </div>
    );
}




export default AgeConverter