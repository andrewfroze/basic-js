const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr;
  const negativeIndexes = [];
  while (result.includes(-1)) {
    const firstNegativeIndex = result.findIndex(item => item === -1);
    negativeIndexes.push(firstNegativeIndex + negativeIndexes.length);
    result.splice(firstNegativeIndex, 1);
  }
  result.sort((a, b) => a - b);
  for (const index of negativeIndexes) {
    result.splice(index, 0, -1);
  }
  return result;
}

module.exports = {
  sortByHeight
};
