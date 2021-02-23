const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let res = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trim();
      res.push(members[i][0].toUpperCase());
    }
  }

  return res.sort().join('');
};
