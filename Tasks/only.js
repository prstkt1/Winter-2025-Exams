// Refactor following solution
// Copy only listed values from dict

only = (W, ...only) => {
  X = Object.keys(W);
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  });
  return W;
};

module.exports = only;
