export { calcPsycheWeight };

function calcPsycheWeight(earthWeight) {
    // converts given Earth weight into Psyche weight. This function can take lbs or kg for parameter and will spit out the respective unit. (we can add a button later that will dictate what unit the user is inputting later)
    // parametes: 
    //     earthWeight: weight on Earth (kg or lbs)
    // return:
    //     weight on Psyche (in respective unit)
    const psycheWeight = earthWeight * (0.144 / 9.8);
    return Number(psycheWeight.toFixed(2));
}

