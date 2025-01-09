// Refactor following solution
// Filter array by type name

"use strict";

const filterByType = (array, typeName) => {
  return array.filter((element) => typeof element === typeName);
};

module.exports = filterByType;
