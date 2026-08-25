const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const transformed = [];
  let previousWasDiscarded = false;
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];

    switch (item) {
      case '--double-next':
        if (i + 1 < arr.length) {
          transformed.push(arr[i + 1]);
          transformed.push(arr[i + 1]);
          i += 1;
        }
        break;

      case '--double-prev':
        if (!previousWasDiscarded && transformed.length > 0) {
          transformed.push(transformed.at(-1));
        }
        previousWasDiscarded = false;
        break;

      case '--discard-prev':
        if (!previousWasDiscarded && transformed.length > 0) {
          transformed.pop();
        }
        previousWasDiscarded = false;
        break;

      case '--discard-next':
        if (i + 1 < arr.length) {
          i += 1;
        }
        previousWasDiscarded = true;
        break;

      default:
        transformed.push(item);
        previousWasDiscarded = false;
    }
  }

  return transformed;
}

module.exports = {
  transform
};
