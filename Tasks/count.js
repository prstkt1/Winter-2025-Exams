// Refactor following solution
// Sum all number values in dict

"use strict";

const count = (object) => {
  let result = 0;
  for (const value in object) {
    if (typeof object[value] === "number") {
      result += object[value];
    }
  }
  return result;
};

module.exports = count;
