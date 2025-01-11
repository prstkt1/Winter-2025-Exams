// Refactor following solution
// Copy only listed values from dict

"use strict";

const onlySelected = (dictionary, ...keys) => {
  const result = {};
  for (const key of keys) {
    if (key in dictionary) {
      result[key] = dictionary[key];
    }
  }
  return result;
};

module.exports = onlySelected;
