import { calcAgeYears, calcAgeDays, calcPsycheWeight} from './conversions.js';

// TODO: calcPsycheWeight function was modified. tests are depricated

// describe('Conversion Functions', () => {
//     test('should convert Earth age to Psyche age on the approximation that 1 Earth year is equal to 5 Pysche years', () => {
//       expect(calcAgeYears(25)).toBeCloseTo(5.00, 2);
//       expect(calcAgeYears(0)).toBe(0.00, 2);
//       expect(calcAgeYears(-1)).toBeCloseTo(-.20, 2);
//     });
  
//     test('should convert Earth Age to Psyche age using the approxitamion that 1 year on Psyche is 1828 earth days', () => {
//       expect(calcAgeDays(25)).toBeCloseTo(5, 2);
//       expect(calcAgeDays(0)).toBe(0);
//       expect(calcAgeDays(-1)).toBeCloseTo(-0.2, 2);
//     });
    
//     test('should convert Earth weight to Psyche weight ', () => {
//         expect(calcPsycheWeight(150)).toBeCloseTo(2.20, 2);
//         expect(calcPsycheWeight(0)).toBe(0);
//         expect(calcPsycheWeight(-1)).toBeCloseTo(-0.01, 2);
//       });
//   });