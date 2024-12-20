// Author: Jackson Westover

export { calcPsycheWeight };

function calcPsycheWeight(earthWeight, isKg) {
    // converts given Earth weight into Psyche weight. This function can take lbs or kg for parameter and will spit out the respective unit. (we can add a button later that will dictate what unit the user is inputting later).
    // parameters: 
    //     earthWeight: weight on Earth (kg or lbs)
    // return:
    //     weight on Psyche (in respective unit)
    const weightInKg = isKg ? parseFloat(earthWeight) : parseFloat(earthWeight) * 0.453592;
    const psycheWeight = weightInKg * (0.144 / 9.8);
    return parseFloat(psycheWeight.toFixed(2));
}

