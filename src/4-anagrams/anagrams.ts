import { getLetterCount } from '../3-letter-count/letter-count';

// export const areAnagrams = (first: string, second: string): boolean => {
//   // 2️⃣
//   const firstCleaned = first.toLowerCase();
//   const secondCleaned = second.toLowerCase();
//   // 1️⃣
//   if (firstCleaned === secondCleaned) return true;
//   // 3️⃣
//   if (firstCleaned.length !== secondCleaned.length) return false;

//   const firstLetterCount = getLetterCount(firstCleaned); // {a:1, l:1}
//   const secondLetterCount = getLetterCount(secondCleaned); // {l:1,a:1}
//   const firstDistinctLetters = Object.keys(firstLetterCount); // [a, l]
//   const secondDistinctLetters = Object.keys(secondLetterCount); // [l, a]

//   // 4️⃣
//   if (firstDistinctLetters.length != secondDistinctLetters.length) return false;
//   let areAnagrams = true;
//   firstDistinctLetters.forEach(letterOfFirst => {
//     // 6️⃣
//     if (!secondDistinctLetters.includes(letterOfFirst)) {
//       areAnagrams = false;
//     }
//     if (secondLetterCount[letterOfFirst] !== firstLetterCount[letterOfFirst]) {
//       areAnagrams = false;
//     }
//   });
//   // 5️⃣
//   return areAnagrams;
//   // return JSON.stringify(firstLetterCount) === JSON.stringify(secondLetterCount); //
// };

export const areAnagrams = (first: string, second: string): boolean => {
  const firstCleaned = first.toLowerCase();
  const secondCleaned = second.toLowerCase();
  if (firstCleaned === secondCleaned) {
    return true;
  }
  if (firstCleaned.length !== secondCleaned.length) {
    return false;
  }
  const firstLetterCount = getLetterCount(firstCleaned);
  const secondLetterCount = getLetterCount(secondCleaned);
  const firstLetters = Object.keys(firstLetterCount);
  const secondLetters = Object.keys(secondLetterCount);
  if (firstLetters.length !== secondLetters.length) {
    return false;
  }
  return firstLetters.every(
    letterOfFirst =>
      firstLetterCount[letterOfFirst] === secondLetterCount[letterOfFirst]
  );
};
