// Refactor following solution
// Reverse an array, you can't use .reverse()

"use strict";

const invert = (array) => {
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

module.exports = invert;
