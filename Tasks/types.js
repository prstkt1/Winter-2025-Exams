// Refactor following solution
// Count types in an array

const countTypes = function (arr) {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of arr) {
    const t = typeof item;
    result[t]++;
  }
  arr.push("string");
  return result;
};

module.exports = countTypes;
