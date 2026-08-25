const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;
  while (result > 9) {
    let iterationResult = result;
    let sum = 0;
    while (iterationResult > 0) {
      sum += Math.floor(iterationResult % 10);
      iterationResult /= Math.floor(10);
    }
    result = sum;
  }
  return result;
}

module.exports = {
  getSumOfDigits
};
