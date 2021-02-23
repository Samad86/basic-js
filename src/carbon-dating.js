const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_2 = Math.log(2);
const K = LOG_2 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (
    !sampleActivity ||
    typeof sampleActivity !== 'number' ||
    sampleActivity < 4 ||
    sampleActivity > 15
  )
    return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / K);
};
