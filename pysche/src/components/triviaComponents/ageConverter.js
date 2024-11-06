import React from "react";
import { useState } from 'react';
import "./../../componentsCSS/trivia.css"




function AgeConverter() {

    const currentYear = new Date().getFullYear();
    const lastYear = 1900;

    const years = [];

    const thirtys = ["Apr", "Jun", "Sep", "Nov"];

    const thirtyOnes = ["Jan", "Mar", "May", "Jul", "Aug", "Nov", "Dec"];
    

    // const daysInMonth = thirtyOnes.includes(selectedMonth) ? 31 : thirtys.includes(selectedMonth) ? 30;


    for (let year = currentYear; year >= lastYear; --year){
        years.push(year);
    }

    const [selectedMonth, setMonth] = useState("");

    const [selectedDay, setDay] = useState("");
    
    const [selectedYear, setYear] = useState("");
    

    

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
            {selectedMonth === "Feb" ? <p>true</p> : <p>false</p>}
            <select id="days" value={selectedDay} onChange={changeDay}>
                <option value="Day">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>

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