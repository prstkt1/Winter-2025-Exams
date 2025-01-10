// Refactor following solution
// Count types in an array

"use strict";

const countTypes = function (arr) {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of arr) {
    const type = typeof item;
    result[type]++;
  }
  arr.push("string");
  return result;
};

module.exports = countTypes;
