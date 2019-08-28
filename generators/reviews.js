const review = require('./review');

module.exports = count => {
  return new Array(count).fill(null).map(() => review());
};
