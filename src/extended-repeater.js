const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const addition = Object.hasOwn(options, 'addition') ? options['addition'] : '';
  const additionRepeatTimes = Object.hasOwn(options, 'additionRepeatTimes') ? options['additionRepeatTimes'] : 1;
  const additionSeparator = Object.hasOwn(options, 'additionSeparator') ? options['additionSeparator'] : '|';
  const repeatTimes = Object.hasOwn(options, 'repeatTimes') ? options['repeatTimes'] : 1;
  const separator = Object.hasOwn(options, 'separator') ? options['separator'] : '+';
  return repeatWithSeparator(str + repeatWithSeparator(addition, additionSeparator, additionRepeatTimes), separator, repeatTimes);
}

function repeatWithSeparator(str, separator, times) {
  if (times < 2) {
    return str;
  }
  let result = str;
  for (let i = 1; i < times; i += 1) {
    result += separator + str;
  }
  return result;
}

module.exports = {
  repeater
};
