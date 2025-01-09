// Refactor following solution
// Get day number

"use strict";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const GetDayNumber = (input) => {
  for (let i = 0; i < days.length; i++) {
    if (input.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = GetDayNumber;
