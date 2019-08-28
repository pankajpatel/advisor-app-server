const faker = require('faker/locale/en');

const person = require('./person');
const languages = require('../constants/languages');

const getRandomLanguages = count => {
  return new Array(count)
    .fill(null)
    .map(() => faker.random.arrayElement(languages));
};

const advisor = id =>
  Object.assign({}, person(), {
    uuid: id || faker.random.uuid(),
    reviewsCount: faker.random.number({ min: 1, max: 50 }),
    languages: getRandomLanguages(faker.random.number({ min: 1, max: 4 })),
  });

// console.log(JSON.stringify(advisor(), null, 2));

module.exports = advisor;
