import React from "react";
import { useState } from 'react';
import "./../../componentsCSS/trivia.css"




function AgeConverter() {

    const currentYear = new Date().getFullYear();
    const lastYear = 1900;



    const years = [];


    const [month, setMonth] = useState("");


    for (let year = currentYear; year >= lastYear; --year){
        years.push(year);
    }

    // function BirthMonth() {
    //     const [month, setMonth] = useState("");
    // }
    function changeMonth(event){
        setMonth(event.target.value)
        console.log(setMonth)
    }



    return (
    
     
        <div class="box">
            
            <label for="userAge">Enter Your Birthday: </label>
            {/* <input type="text" id="userAge" name="userAge"></input> */}
            <select id="months" value={month} onChange={changeMonth}>
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

            <select name="day" id="days">
                <option value="Day">Day</option>
                <option value="day_1">1</option>
                <option value="day_1">2</option>
                <option value="day_1">3</option>
                <option value="day_1">4</option>
                <option value="day_1">5</option>
                <option value="day_1">6</option>
                <option value="day_1">7</option>
                <option value="day_1">8</option>
                <option value="day_1">9</option>
                <option value="day_1">10</option>
                <option value="day_1">11</option>
                <option value="day_1">12</option>
                <option value="day_1">13</option>
                <option value="day_1">14</option>
                <option value="day_1">15</option>
                <option value="day_1">16</option>
                <option value="day_1">17</option>
                <option value="day_1">18</option>
                <option value="day_1">19</option>
                <option value="day_1">20</option>
                <option value="day_1">21</option>
                <option value="day_1">22</option>
                <option value="day_1">23</option>
                <option value="day_1">24</option>
                <option value="day_1">25</option>
                <option value="day_1">26</option>
                <option value="day_1">27</option>
                <option value="day_1">28</option>
                <option value="day_1">29</option>
                <option value="day_1">30</option>
                <option value="day_1">31</option>

            </select>
            
        
            <select name="year" id="years">
                <option>Year</option>
                {years.map((year) => (
                    <option value={year}> {year} </option>
                ))}
            </select>
                
        </div>
        
    );
}




export default AgeConverter