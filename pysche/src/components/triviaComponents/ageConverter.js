import React from "react";
import { useState } from 'react';
import "./../../componentsCSS/trivia.css"




function AgeConverter() {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();


    const lastYear = 1900;

    const years = [];

    const thirties = ["Apr", "Jun", "Sep", "Nov"];

    const thirtyOnes = ["Jan", "Mar", "May", "Jul", "Aug", "Nov", "Dec"];
    

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

    // function calculateAge(day, month, year){
    //     const earthAgeYears = currentYear - year;
        
    // }

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
                <option>Year</option>
                {years.map((year) => (
                    <option value={year}> {year} </option>
                ))}
            </select>
            {/* <p>Selected Day {selectedYear}</p> */}
            

            <button onClick={setAge}>Submit</button>
            {/* <button onClick={calculateAge(selectedDay, selectedMonth, selectedYear)}>Submit</button> */}

            <p>You are {earthAgeYears} years old on Earth.</p>
            
        </div>
    );
}




export default AgeConverter