const advisor = require('./advisor');

module.exports = count => {
  return new Array(count).fill(null).map(() => advisor());
};
