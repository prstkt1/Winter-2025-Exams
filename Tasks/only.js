// Refactor following solution
// Copy only listed values from dict

"use strict";

const onlySelected = (dictionary, ...keys) => {
  const dictionaryKeys = Object.keys(dictionary);
  dictionaryKeys.forEach((key) => {
    if (keys.includes(key)) {
    } else {
      delete dictionary[key];
    }
  });
  return dictionary;
};

module.exports = onlySelected;
