// Refactor following solution
// Count types in an array

const types_ = function (s) {
  const types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const i of s) {
    const t = typeof i;
    types_[t]++;
  }
  s.push("string");
  return types_;
};

module.exports = types_;
