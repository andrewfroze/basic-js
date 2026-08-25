const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  for (const file of names) {
    result.push(makeFileNameUnique(file, result));
  }
  return result;
}

function makeFileNameUnique(originalName, existingFileNames) {
  if (!existingFileNames.includes(originalName)) {
    return originalName;
  }
  let count = 1;
  while (true) {
    const newName = `${originalName}(${count})`;
    if (!existingFileNames.includes(newName)) {
      return newName;
    }
    count += 1;
  }
}

module.exports = {
  renameFiles
};
