const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const s2Array = [...s2];
  for(let char of s1) {
    const charIndex = s2Array.indexOf(char);
    if (charIndex > -1) {
      count += 1;
      delete s2Array[charIndex];
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
