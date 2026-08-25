const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const resultArray = [];
  let lastChar = '';
  for (let char of str) {
    if (char !== lastChar) {
      resultArray[resultArray.length] = char;
      lastChar = char;
    } else {
      const lastItem = resultArray.at(-1);
      if (lastItem.length < 2) {
        resultArray[resultArray.length - 1] = `2${lastChar}`;
      } else {
        resultArray[resultArray.length - 1] = `${1 + +resultArray[resultArray.length - 1][0]}${lastChar}`;
      }
    }
  }
  return resultArray.join('');
}

module.exports = {
  encodeLine
};
