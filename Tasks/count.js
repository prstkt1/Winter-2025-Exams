// Refactor following solution
// Sum all number values in dict

"use strict";

count = (obj) => {
  const values = Object.values(obj);
  const sum = values.reduce((acc, value) => {
    if (typeof value === "number") return acc + value;
    return acc;
  }, 0);
  return sum;
};

module.exports = count;
