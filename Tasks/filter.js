// Refactor following solution
// Filter array by type name

"use strict";

const filterByType = (array, typeName) => {
  const filteredArray = [];
  for (const element of array) {
    if (typeof element === typeName) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = filterByType;
