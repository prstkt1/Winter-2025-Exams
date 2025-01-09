// Refactor following solution
// Find key by value

"use strict";

find = (object, ...rest) => {
  value = rest.pop(1);
  for (name in object) {
    if (object[name] !== value) {
    } else {
      return name;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
