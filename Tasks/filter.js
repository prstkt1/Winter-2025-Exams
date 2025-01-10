// Refactor following solution
// Filter array by type name

"use strict";

const filterByType = (array, typeName) => {
  const indexesToRemove = [];
  for (const element of array) {
    const index = array.indexOf(element);
    if (typeof array[index] !== typeName) {
      indexesToRemove.unshift(index);
    }
  }
  for (const index of indexesToRemove) {
    array.splice(index, 1);
  }
  return array;
};

module.exports = filterByType;
