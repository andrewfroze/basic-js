const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n < 10) {
    return 0;
  }
  const digits = n.toString();

  let maximal = 0;
  for (let i = 0; i < digits.length; i += 1) {
    const current = Number(digits.slice(0, i) + digits.slice(i + 1));
    if (current > maximal) {
      maximal = current;
    }
  }
  return maximal;
}

module.exports = {
  deleteDigit
};
