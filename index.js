/**
 * write a fn called same that takes two array and check if the second array have each value in the first array but squared
 */

const same = (arrOne, arrTwo) => {
  const isAllArrayIsNumbers = [...arrOne, ...arrTwo].every(
    (num) => isFinite(num) && typeof num === "number"
  );

  if (!arrTwo.length || !arrTwo.length || !isAllArrayIsNumbers) {
    console.log("array is not valid should be all numbers");
    return;
  }

  // let isAllThere = true;
  // for (const num of arrOne) {
  //   if (arrTwo.includes(num ** 2)) {
  //     continue;
  //   } else {
  //     isAllThere = false;
  //     break;
  //   }
  // }
  // return isAllThere;

  // return arrOne.every((num) => arrTwo.includes(num ** 2));

  const frequenciesOne = {};
  const frequenciesTow = {};

  for (const num1 of arrOne) {
    frequenciesOne[num1] = (frequenciesOne[num1] || 0) + 1;
  }
  for (const num2 of arrTwo) {
    frequenciesTow[num2] = (frequenciesTow[num2] || 0) + 1;
  }

  for (const keyOne in frequenciesOne) {
    if (!(keyOne ** 2 in frequenciesTow)) {
      return false;
    }
    if (frequenciesTow[keyOne ** 2] !== frequenciesOne[keyOne]) {
      return false;
    }
  }
  return true;
};

/*
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 3], [1, 4, 9, 5]));
console.log(same([1, 2, 3], [1, 4, 9, 6]));
console.log(same([1, 2, 3], [1, 4, 9, 7]));
console.log(same([1, 2, 3], [1, 4, 9, 8]));
*/

const validAnagram = (str1, str2) => {
  // let isThereChar = true;

  const frequenciesOne = {};
  const frequenciesTow = {};

  for (const key of str1) {
    frequenciesOne[key] = (frequenciesOne[key] ?? 0) + 1;
  }
  for (const key of str2) {
    frequenciesTow[key] = (frequenciesTow[key] ?? 0) + 1;
  }

  console.log(frequenciesOne);
  console.log(frequenciesTow);

  // for (const char of str1) {
  //   if (!str2.includes(char)) {
  //     isThereChar = false;
  //   }
  // }
  // for (const char2 of str2) {
  //   if (!str1.includes(char2)) {
  //     isThereChar = false;
  //   }
  // }
  // return isThereChar;
};

// console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
