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
  const monthIndex = Months.findIndex((month) => lowerCasedInput.startsWith(month));
    if (monthIndex !== -1) return monthIndex + 1;
  return -1;
};

module.exports = Month;
