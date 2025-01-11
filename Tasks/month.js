// Refactor following solution
// Get month number

"use strict";

const Months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const Month = (inputString) => {
  const lowerCasedInput = inputString.toLowerCase();
  for (let i = 0; i < Months.length; i++) {
    if (lowerCasedInput.startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;
