const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));
  console.log(result);
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j]) {
        result[i][j] = 1;
        for (let k = -1; k < 2; k += 1) {
          for (let l = -1; l < 2; l += 1) {
            const row = i + k;
            const column = j + l;
            if (row > -1 && row < matrix.length && column > - 1 && column < matrix[i].length && !matrix[row][column]) {
              result[row][column] = result[row][column] + 1;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
