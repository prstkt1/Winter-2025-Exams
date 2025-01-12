// Refactor following solution
// Sum all numbers from an array

"use strict";

const sum = (inputArr) => {
  let result = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (typeof inputArr[i] === "number") {
      result += inputArr[i];
    }
  }
  return result;
};

module.exports = sum;
