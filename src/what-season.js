const CustomError = require('../extensions/custom-error');

//1й способ:

/*
module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('THROWN');

  if ((date.getMonth() >= 0 && date.getMonth() <= 1) || date.getMonth() == 11) return 'winter';
  if (date.getMonth() >= 2 && date.getMonth() <= 4) return 'spring';
  if (date.getMonth() >= 5 && date.getMonth() <= 7) return 'summer';
  if (date.getMonth() >= 8 && date.getMonth() <= 10) return 'autumn';
};
*/

//2й способ:

const SEASONS = [
  'winter',
  'winter',
  'spring',
  'spring',
  'spring',
  'summer',
  'summer',
  'summer',
  'autumn',
  'autumn',
  'autumn',
  'winter',
];

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('THROWN');

  return SEASONS[date.getMonth()];
};
