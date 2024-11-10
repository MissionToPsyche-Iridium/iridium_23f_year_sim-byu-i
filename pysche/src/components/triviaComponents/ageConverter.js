import React from "react";
import { useState } from 'react';
import "./../../componentsCSS/trivia.css"




function AgeConverter() {

    const currentYear = new Date().getFullYear();
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

    

    return (
    
     
        <div class="box">
            
            <label for="userAge">Enter Your Birthday: </label>
            <select id="months" value={selectedMonth} onChange={changeMonth}>
                <option value="Month">Month</option>
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
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
                
        </div>
        
    );
}




export default AgeConverter