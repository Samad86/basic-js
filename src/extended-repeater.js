const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  str = str === null ? 'null' : str;

  let addition = options.addition === null ? 'null' : options.addition;
  let postfix = new Array(options.additionRepeatTimes)
    .fill(addition)
    .join(options.additionSeparator);

  return new Array(options.repeatTimes).fill(str + postfix).join(options.separator || '+');
};
