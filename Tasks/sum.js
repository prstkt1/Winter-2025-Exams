// Refactor following solution
// Sum all numbers from an array

const sum = (s = () => {}) => {
  const sum = [0];
  for (i of s) {
    const t = typeof i;
    if (t === "number") {
      const new_Sum = sum[sum.length - 1] + i;
      sum.push(new_Sum);
    }
  }
  return sum[sum.length - 1];
};

module.exports = sum;
