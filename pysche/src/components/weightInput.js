import React from "react";


export default function WeightInput({ weight, isKg, onChange }) {
    return (
        <div>
            <label htmlFor='weight-input'>Enter your weight:</label>
            <input 
                id='weight-input'
                type='number'
                value ={weight}
                onChange={(e) => onChange(e.target.value)}
                min='0'
                step='0.1'
                // will have to add logic to check if switch for kg is on and change the placeholder accordingly
                placeholder={`Weight in ${isKg ? 'kg' : 'lb'}`}
            />
        </div>
    );
}