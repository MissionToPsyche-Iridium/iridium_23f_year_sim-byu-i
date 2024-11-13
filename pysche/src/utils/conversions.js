export { calcAgeDays, calcAgeYears, calcPsycheWeight };

function calcAgeYears(earthAge) {
    // Uses the approximation of 1 Earth year equaling 5 years on psyche
    // parameters:
    //     earthAge: Age in Earth years
    // return:
    //     Age in psyche years
    const psycheAge = earthAge / 5;
    return Number(psycheAge.toFixed(2));
}

function calcAgeDays(earthAge) {
    // A slighltly more accurate formula that determines Psyche age based on days rather than rounding to the nearest year. Probably unneccessary for our purposes, but included it here just in case
    // parameters:
    //     earthAge: Age in Earth Years
    // return:
    //     Age in psyche Years
    const psycheAge = (earthAge * 365.25) / 1828;
    return Number(psycheAge.toFixed(2));
}

function calcPsycheWeight(earthWeight) {
    // converts given Earth weight into Psyche weight. This function can take lbs or kg for parameter and will spit out the respective unit. (we can add a button later that will dictate what unit the user is inputting later)
    // parametes: 
    //     earthWeight: weight on Earth (kg or lbs)
    // return:
    //     weight on Psyche (in respective unit)
    const psycheWeight = earthWeight * (0.144 / 9.8);
    return Number(psycheWeight.toFixed(2));
}

